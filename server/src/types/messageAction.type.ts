import { ActionOfMessage, TypeOfMessage } from "./enum"

export type MessageAction = {
    action: ActionOfMessage,
    data: MessageChat | MessageCreateRoom | MessageJoinRoom | MessageListRoomsByAuthor | MessageListMessagesByRoomId
}

export type MessageReturn = {
    action: ActionOfMessage,
    data: any
}

export type MessageChat = {
    typeOfMessage: TypeOfMessage,
    roomId: string,
    content: string,
    author: string,
    time: string,
    extendsion?: string,
    fileSize?: number;
}

export type MessageCreateRoom = {
    roomName: string,
    author: string,
}

export type MessageJoinRoom = {
    roomId: string,
    author: string,
}

export type MessageLeaveRoom = {
    roomId: string,
    author: string,
}

export type MessageListRoomsByAuthor = {
    author: string,
}

export type MessageListMessagesByRoomId = {
    roomId: string,
}