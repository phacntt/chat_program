import { Input, Button } from "antd";
import ButtonSend from "components/atoms/ButtonSend";
import InputChat from "components/atoms/InputChat";
import React, { FC, useEffect } from "react";
import { useState } from "react";
import { ContainerSendMessage } from "./style";
import { Message } from "types/message.types";

interface Props {
  contentMessageSend: (message: Message) => void;
}

const ChatFooter: FC<Props> = ({ contentMessageSend }) => {
  let [messageSend, setMessageSend] = useState<Message>();
  const [contentInput, setContentInput] = useState("");

  const sendMessage = (e: any) => {
    if (e.key === "Enter" && contentInput !== "" && messageSend?.content !== "") {
      console.log(messageSend);
      const message: Message = { content: contentInput, type: "Sender" };
      contentMessageSend(message!);
      setContentInput("");
      setMessageSend(message);
    }
  };

  const sendMessageClickButton = (e: any) => {
    console.log(messageSend);
    if (contentInput !== "" && messageSend?.content !== "") {
      const message: Message = { content: contentInput, type: "Sender" };
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
        sendMessage={sendMessage}
        messageSend={contentInput}
      />
      <ButtonSend sendMessageClickButton={sendMessageClickButton} />
    </ContainerSendMessage>
  );
};

export default ChatFooter;
