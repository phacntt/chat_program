import { SendOutlined } from "@ant-design/icons";
import { Button } from "antd";
import React, { useState } from "react";

const ButtonSend = () => {
  const [messageSend, setMessageSend] = useState("");

  const sendMessageClickButton = (e: any) => {
    console.log(messageSend);
    setMessageSend("");
  };

  return (
    <Button size="large" onClick={sendMessageClickButton} type="primary">
      <SendOutlined/>
    </Button>
  );
};

export default ButtonSend;
