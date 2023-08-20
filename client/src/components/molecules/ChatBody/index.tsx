import React, { FC, useEffect, useRef } from 'react';
import Reciver from '../Reciver';
import Sender from '../Sender';
import { ContentChat } from './style';
import { MessageChat } from 'types/messageAction.types';
import { VariableLocal } from 'constant';

interface Props {
  messages: MessageChat[];
}

const ChatBody: FC<Props> = ({ messages }) => {
  console.log(messages);

  const messagesEndRef = useRef<HTMLDivElement>(null);
  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  return (
    <ContentChat>
      {messages.map(message => {
        return message.author !== localStorage.getItem(VariableLocal.username) ? (
          <React.Fragment>
            <Reciver message={message} />
            <br />
          </React.Fragment>
        ) : (
          <React.Fragment>
            <Sender message={message} />
            <br />
          </React.Fragment>
        );
      })}
      <div ref={messagesEndRef} />
    </ContentChat>
  );
};

export default ChatBody;
