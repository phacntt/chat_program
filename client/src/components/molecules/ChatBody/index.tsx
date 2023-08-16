import { Content } from "antd/es/layout/layout";
import React, { FC, useEffect, useRef, useState } from "react";
import Reciver from "../Reciver";
import Sender from "../Sender";
import { ContentChat } from "./style";
import { Message } from "types/message.types";

interface Props {
  messages: Message[];
}

const ChatBody: FC<Props> = ({ messages }) => {
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };
  useEffect(() => {
    scrollToBottom()
  }, [messages]);

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
      <div ref={messagesEndRef}/>
    </ContentChat>
  );
};

export default ChatBody;
