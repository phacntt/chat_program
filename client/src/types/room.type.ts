import { Message } from "./message.type"
import { User } from "./user.type"

export type Room = {
    roomId: string,
    roomName: string,
    author: string,
    users: User[],
    messages: Message[],
}