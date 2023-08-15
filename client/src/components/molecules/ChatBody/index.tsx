import { Content } from "antd/es/layout/layout";
import React, { FC, useEffect, useState } from "react";
import Reciver from "../Reciver";
import Sender from "../Sender";
import { ContentChat } from "./style";
import { Message } from "types/message.types";

interface Props {
  messages: Message[];
}

const ChatBody: FC<Props> = ({ messages }) => {
  return (
    <ContentChat>
      {messages.map((message) => {
        return message.type === "Reciver" ? (
          <React.Fragment>
            <Reciver content={message.content} />
            <br />
          </React.Fragment>
        ) : (
          <React.Fragment>
            <Sender content={message.content} />
            <br />
          </React.Fragment>
        );
      })}
    </ContentChat>
  );
};

export default ChatBody;
