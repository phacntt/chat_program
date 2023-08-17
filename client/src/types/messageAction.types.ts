import { TypeMessage } from "./enum";

export type MessageAction = {
    action: TypeMessage,
    data: MessageChat | MessageCreateRoom | MessageJoinRoom | MessageListRoomsByAuthor | MessageListMessagesByRoomId
}

export type MessageReceive = {
    action: TypeMessage,
    data: any
}

export type MessageChat = {
    roomId: string,
    author: string,
    content: string,
    time: string,
}

export type MessageCreateRoom = {
    author: string;
    roomName: string;
}

export type MessageJoinRoom = {
    roomId: string,
}

export type MessageListRoomsByAuthor = {
    author: string,
}

export type MessageListMessagesByRoomId = {
    roomId: string,
}