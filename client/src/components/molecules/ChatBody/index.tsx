import React, { FC, useEffect, useRef } from "react";
import Reciver from "../Reciver";
import Sender from "../Sender";
import { ContentChat } from "./style";
import { MessageChat } from "types/messageAction.types";
import { VariableLocal } from "constant";

interface Props {
  messages: MessageChat[];
}

const ChatBody: FC<Props> = ({ messages }) => {
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  return (
    <ContentChat>
      {messages.map((message) => {
        return message.author !== localStorage.getItem(VariableLocal.username) ? (
          <React.Fragment>
            <Reciver content={message.content} name={message.author} timeSend={message.time!}/>
            <br />
          </React.Fragment>
        ) : (
          <React.Fragment>
            <Sender content={message.content} timeSend={message.time!}/>
            <br />
          </React.Fragment>
        );
      })}
      {/* <Wrap>
        <Links>
          <Dot>ABC</Dot>
        </Links>
      </Wrap> */}

      <div ref={messagesEndRef} />
    </ContentChat>
  );
};

export default ChatBody;
