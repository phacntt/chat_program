import { Content } from "antd/es/layout/layout";
import React, { FC, useEffect, useRef, useState } from "react";
import Reciver from "../Reciver";
import Sender from "../Sender";
import { ContentChat } from "./style";
import { MessageChat } from "types/messageAction.types";

interface Props {
  messages: MessageChat[];
}

const ChatBody: FC<Props> = ({ messages }) => {
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  console.log(messages);

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  return (
    <ContentChat>
      {messages.map((message) => {
        return message.author !== localStorage.getItem("username") ? (
          <React.Fragment>
            <Reciver content={message.content} name={message.author} timeSend={message.time}/>
            <br />
          </React.Fragment>
        ) : (
          <React.Fragment>
            <Sender content={message.content} timeSend={message.time}/>
            <br />
          </React.Fragment>
        );
      })}
      <div ref={messagesEndRef} />
    </ContentChat>
  );
};

export default ChatBody;
