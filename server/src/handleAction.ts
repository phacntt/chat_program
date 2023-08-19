import WebSocket, { RawData } from "ws";
import {
  MessageChat,
  MessageCreateRoom,
  MessageJoinRoom,
  MessageListMessagesByRoomId,
  MessageListRoomsByAuthor,
  MessageAction,
  MessageReturn,
  MessageLeaveRoom,
} from "./types/messageAction.type";
import { ActionOfMessage, TypeOfMessage } from "./types/enum";
import { v4 as uuidv4 } from "uuid";
import { Room } from "./types/room.type";
import { User } from "./types/user.type";
import { Message } from "./types/message.type";
import path from "path";
import fs from "fs";

export const HandleAction = (
  wss: WebSocket.Server,
  ws: WebSocket,
  message: RawData,
  listRoom: Map<string, any>
) => {
  const messageAction: MessageAction = JSON.parse(message.toString());

  switch (messageAction.action) {
    case ActionOfMessage.CreateRoom:
      handleActionCreateRoom(ws, listRoom, messageAction);
      break;
    case ActionOfMessage.JoinRoom:
      handleActionJoinRoom(ws, listRoom, messageAction);
      break;
    case ActionOfMessage.ListRooms:
      handleActionListRoom(ws, listRoom, messageAction);
      break;
    case ActionOfMessage.SendMessage:
      handleActionSendMessage(wss, ws, listRoom, messageAction);
      break;
    case ActionOfMessage.ListMessages:
      handleActionListMessageByRoomId(ws, listRoom, messageAction);
      break;
    case ActionOfMessage.LeaveRoom:
      handleActionLeaveRoom(wss, ws, listRoom, messageAction);
      break;
    default:
      break;
  }
};

export const handleActionCreateRoom = (
  ws: WebSocket,
  listRoom: Map<string, Room>,
  messageAction: MessageAction
) => {
  const messageData = messageAction.data as MessageCreateRoom;

  const roomId = uuidv4().slice(0, 8);

  const user: User = {
    username: messageData.author,
  };

  const initialRoom: Room = {
    author: user.username,
    messages: [],
    roomId: roomId,
    roomName: messageData.roomName,
    users: [user],
  };

  listRoom.get(roomId)
    ? handleActionCreateRoom(ws, listRoom, messageAction)
    : listRoom.set(roomId, initialRoom);

  const mapRoomToArrayRoom: Room[] = [];

  const listRoomReturn: Room[] = [];

  listRoom.forEach((room: Room) => {
    mapRoomToArrayRoom.push(room);
  });

  for (let room of mapRoomToArrayRoom) {
    if (room.author === messageData.author) {
      listRoomReturn.push(room);
    }
  }

  const messageSend: MessageReturn = {
    action: ActionOfMessage.CreateRoom,
    data: listRoomReturn,
  };

  ws.send(JSON.stringify(messageSend));
};

export const handleActionJoinRoom = (
  ws: WebSocket,
  listRoom: Map<string, Room>,
  messageAction: MessageAction
) => {
  const messageData = messageAction.data as MessageJoinRoom;

  const room = listRoom.get(messageData.roomId);

  const isUserJoin = room?.users.find(
    (user: User) => user.username === messageData.author
  );

  if (room && !isUserJoin) {
    const user: User = {
      username: messageData.author,
    };

    room.users.push(user);
  }

  let arrayRooms: Room[] = [];

  listRoom.forEach((room: Room, key: string) => {
    arrayRooms.push(room);
  });

  const listRoomsUserJoin: Room[] = [];

  for (let room of arrayRooms) {
    room.users.find((user: User) => {
      if (user.username === messageData.author) {
        listRoomsUserJoin.push(room);
      }
    });
  }

  const messageSend: MessageReturn = {
    action: ActionOfMessage.JoinRoom,
    data: listRoomsUserJoin,
  };

  ws.send(JSON.stringify(messageSend));
};

export const handleActionListRoom = (
  ws: WebSocket,
  listRoom: Map<string, Room>,
  messageAction: MessageAction
) => {
  const messageData = messageAction.data as MessageListRoomsByAuthor;

  const roomsUserHasJoin: Room[] = [];

  let arrayRooms: any[] = [];

  listRoom.forEach((room: Room, key: string) => {
    arrayRooms.push(room);
  });

  for (let room of arrayRooms) {
    room.users.find((user: User) => {
      if (user.username === messageData.author) {
        roomsUserHasJoin.push(room);
      }
    });
  }

  const messageSend: MessageReturn = {
    action: ActionOfMessage.ListRooms,
    data: roomsUserHasJoin,
  };

  ws.send(JSON.stringify(messageSend));
};

export const handleActionSendMessage = (
  wss: WebSocket.Server,
  ws: WebSocket,
  listRoom: Map<string, Room>,
  messageAction: MessageAction
) => {
  const messageData = messageAction.data as MessageChat;
  console.log("CLIENT: ", messageData);
  const room = listRoom.get(messageData.roomId);

  if (!room) {
    ws.send("Room not found");
    return;
  }

  const timeSendMessage = new Date();

  const message: Message = {
    author: messageData.author,
    content: messageData.content,
    time:
      (timeSendMessage.getHours() < 10
        ? "0" + timeSendMessage.getHours()
        : timeSendMessage.getHours()) +
      ":" +
      (timeSendMessage.getMinutes() < 10
        ? "0" + timeSendMessage.getMinutes()
        : timeSendMessage.getMinutes()),
    roomId: messageData.roomId,
    typeOfMessage:
      messageData.typeOfMessage === TypeOfMessage.Text
        ? TypeOfMessage.Text
        : TypeOfMessage.UploadFile,
    extendsion: messageData.extendsion,
    fileSize: messageData.fileSize,
  };

  room.messages.push(message);

  wss.clients.forEach(function (client: WebSocket) {
    if (client.readyState === WebSocket.OPEN) {
      const messageSend: MessageReturn = {
        action: ActionOfMessage.SendMessage,
        data: {
          roomId: messageData.roomId,
          messages: room.messages,
        },
      };

      room.users.forEach((_) => {
        client.send(JSON.stringify(messageSend));
      });
    }
  });
};

export const handleActionListMessageByRoomId = (
  ws: WebSocket,
  listRoom: Map<string, Room>,
  messageAction: MessageAction
) => {
  const messageData = messageAction.data as MessageListMessagesByRoomId;

  const room = listRoom.get(messageData.roomId);

  if (!room) {
    ws.send("Room not found");
    return;
  }

  const messages = room.messages;

  const messageSend: MessageReturn = {
    action: ActionOfMessage.ListMessages,
    data: messages,
  };

  ws.send(JSON.stringify(messageSend));
};

export const handleActionLeaveRoom = (
  wss: WebSocket.Server,
  ws: WebSocket,
  listRoom: Map<string, Room>,
  messageAction: MessageAction
) => {
  const messageData = messageAction.data as MessageLeaveRoom;

  const room = listRoom.get(messageData.roomId);

  if (!room) {
    ws.send(JSON.stringify({ error: true, data: "Not found Room" }));
    return;
  }

  room.users = room.users.filter(
    (user: User) => user.username !== messageData.author
  );

  const listRoomUserHasJoin: Room[] = [];

  let arrayRooms: any[] = [];

  listRoom.forEach((room: Room, key: string) => {
    arrayRooms.push(room);
  });

  for (let room of arrayRooms) {
    room.users.find((user: User) => {
      if (user.username === messageData.author) {
        listRoomUserHasJoin.push(room);
      }
    });
  }

  console.log(room.users);

  const messageSend: MessageReturn = {
    action: ActionOfMessage.LeaveRoom,
    data: {
      username: messageData.author,
      roomId: messageData.roomId,
      rooms: listRoomUserHasJoin,
    },
  };

  ws.send(JSON.stringify(messageSend));
};
export const handleActionUploadFile = async (
  ws: WebSocket,
  listRoom: Map<string, any>,
  message: RawData
) => {
  let hasClosed = false;
  const fileData: Uint8Array[] = [];

  const onChunk = (chunk: Uint8Array) => {
    fileData.push(chunk);
  };

  const callbackFnc = (error: any) => {
    if (error) console.log(error);
    else {
      console.log("File written successfully\n");
    }
  };

  ws.on("message", onChunk);

  ws.once("close", async () => {
    if (hasClosed) {
      return; // Exit if already closed
    }
    hasClosed = true;

    ws.removeListener("message", onChunk); // Remove the message listener

    const filename = `${Date.now()}-uploaded-file`;

    const filenameToSave = `${filename}.png`;
    console.log(filenameToSave);
    const filePath = path.join(__dirname, "../uploads", filenameToSave);
    console.log(filePath);

    try {
      await fs.writeFileSync(filePath, Buffer.concat(fileData));
      console.log("File saved:", filename);
      ws.send("File uploaded successfully.");
    } catch (error) {
      console.error("Error saving file:", error);
      ws.send("File upload failed.");
    }
  });
};
