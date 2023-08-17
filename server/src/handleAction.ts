import { RawData, WebSocket } from "ws";
import {
  MessageChat,
  MessageCreateRoom,
  MessageJoinRoom,
  MessageListMessagesByRoomId,
  MessageListRoomsByAuthor,
  MessageAction,
  MessageReturn,
} from "./types/messageAction.type";
import { ActionOfMessage } from "./types/enum";
import { v4 as uuidv4 } from "uuid";
import { Room } from "./types/room.type";
import { User } from "./types/user.type";
import { Message } from "./types/message.type";
export const HandleAction = (
  ws: WebSocket,
  message: RawData,
  listRoom: Map<string, any>
) => {
  console.log(`Received: ${message}`);
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
      handleActionSendMessage(ws, listRoom, messageAction);
      break;
    case ActionOfMessage.ListMessages:
      handleActionListMessageByRoomId(ws, listRoom, messageAction);
      break;
    default:
      break;
  }
};

const handleActionCreateRoom = (
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

  const listRoomReturn: Room[] = []

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

const handleActionJoinRoom = (
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

const handleActionListRoom = (
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
        console.log("GIONG KHONG Z");
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

const handleActionSendMessage = (
  ws: WebSocket,
  listRoom: Map<string, Room>,
  messageAction: MessageAction
) => {
  const messageData = messageAction.data as MessageChat;

  const room = listRoom.get(messageData.roomId);

  if (!room) {
    ws.send("Room not found");
    return;
  }

  const timeSendMessage = new Date();

  const message: Message = {
    author: messageData.author,
    content: messageData.content,
    time: timeSendMessage.getHours() + " : " + timeSendMessage.getMinutes()
  };

  room.messages.push(message);

  const messageSend: MessageReturn = {
    action: ActionOfMessage.SendMessage,
    data: room.messages,
  };

  ws.send(JSON.stringify(messageSend));
};

const handleActionListMessageByRoomId = (
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
