import { Input, Button } from "antd";
import ButtonSend from "components/atoms/ButtonSend";
import InputChat from "components/atoms/InputChat";
import React from "react";
import { useState } from "react";
import { ContainerSendMessage } from "./style";

const ChatFooter = () => {
  const [messageSend, setMessageSend] = useState("");

  const sendMessage = (e: any) => {
    if (e.key === "Enter") {
      console.log(messageSend);
      setMessageSend("");
    }
  };

  const sendMessageClickButton = (e: any) => {
    console.log(messageSend);
    setMessageSend("");
  };

  const handleChange = (e: any) => {
    console.log(e.target.value);
    setMessageSend(e.target.value);
  };

  return (
    <ContainerSendMessage>
      <InputChat
        handleChange={handleChange}
        sendMessage={sendMessage}
        messageSend={messageSend}
      />
      <ButtonSend />
    </ContainerSendMessage>
  );
};

export default ChatFooter;
