import { TypeMessage, TypeOfMessage } from "./enum";

export type MessageAction = {
  action: TypeMessage;
  data:
    | MessageChat
    | MessageCreateRoom
    | MessageJoinRoom
    | MessageListRoomsByAuthor
    | MessageListMessagesByRoomId
    | MessageLeaveRoom;
};

export type MessageReceive = {
  action: TypeMessage;
  data: any;
};

export type MessageChat = {
  typeOfMessage: TypeOfMessage;
  roomId: string;
  author: string;
  content: string;
  time?: string;
  extendsion?: string,
  fileSize?: number
};

export type MessageChatByRoom = {
  roomId: string;
  messages: MessageChat[];
};

export type MessageCreateRoom = {
  author: string;
  roomName: string;
};

export type MessageLeaveRoom = {
  author: string;
  roomId: string;
};

export type MessageJoinRoom = {
  author: string;
  roomId: string;
};

export type MessageListRoomsByAuthor = {
  author: string;
};

export type MessageListMessagesByRoomId = {
  roomId: string;
};
