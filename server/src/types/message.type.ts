import { TypeOfMessage } from "./enum";

export type Message = {
  typeOfMessage: TypeOfMessage;
  roomId: string;
  content: string;
  author: string;
  time: string;
  extendsion?: string;
  fileSize?: number;
};
