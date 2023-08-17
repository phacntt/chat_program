import { Input, Button } from "antd";
import ButtonSend from "components/atoms/ButtonSend";
import InputChat from "components/atoms/InputChat";
import React, { FC, useEffect } from "react";
import { useState } from "react";
import { ContainerSendMessage } from "./style";
import { MessageAction, MessageChat } from "types/messageAction.types";
import { TypeMessage } from "types/enum";

interface Props {
  contentMessageSend: (message: MessageChat) => void;
  sendMessage: (message: any) => void;
  author: string;
  roomId: string;
}

const ChatFooter: FC<Props> = ({
  contentMessageSend,
  sendMessage,
  author,
  roomId,
}) => {
  const [messageSend, setMessageSend] = useState<MessageChat>();
  const [contentInput, setContentInput] = useState("");
  
  const handleSendMessageToServer = () => {
    const timeSendMessage = new Date();
    
    const messageSend: MessageChat = {
      author: author,
      content: contentInput,
      roomId: roomId,
      time: timeSendMessage.getHours() + " : " + timeSendMessage.getMinutes()
    };

    const message: MessageAction = {
      action: TypeMessage.SendMessage,
      data: messageSend,
    };

    sendMessage(JSON.stringify(message));
  };

  const sendMessages = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (
      e.key === "Enter" &&
      contentInput !== "" &&
      messageSend?.content !== ""
    ) {
      console.log(messageSend);
      const timeSendMessage = new Date();

      const message: MessageChat = {
        content: contentInput,
        author,
        roomId: roomId,
        time: timeSendMessage.getHours() + " : " + timeSendMessage.getMinutes(),
      };
      handleSendMessageToServer();
      contentMessageSend(message!);
      setContentInput("");
      setMessageSend(message);
    }
  };

  const sendMessageClickButton = (e: React.MouseEvent<HTMLElement>) => {
    console.log(messageSend);
    if (contentInput !== "" && messageSend?.content !== "") {
      const timeSendMessage = new Date();

      const message: MessageChat = {
        content: contentInput,
        author,
        roomId: roomId,
        time: timeSendMessage.getHours() + " : " + timeSendMessage.getMinutes(),
      };
      handleSendMessageToServer();
      setContentInput("");
      contentMessageSend(message!);
      setMessageSend(message);
    }
  };

  const handleChange = (e: any) => {
    setMessageSend(e.target.value);
    setContentInput(e.target.value);
  };

  return (
    <ContainerSendMessage>
      <InputChat
        handleChange={handleChange}
        sendMessage={sendMessages}
        messageSend={contentInput}
      />
      <ButtonSend sendMessageClickButton={sendMessageClickButton} />
    </ContainerSendMessage>
  );
};

export default ChatFooter;
