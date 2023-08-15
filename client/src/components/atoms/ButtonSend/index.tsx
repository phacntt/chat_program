import { SendOutlined } from "@ant-design/icons";
import { Button } from "antd";
import React, { FC, useState } from "react";

interface Props {
  sendMessageClickButton: (e: any) => void;
}

const ButtonSend: FC<Props> = ({ sendMessageClickButton }) => {
  return (
    <Button size="large" onClick={sendMessageClickButton} type="primary">
      <SendOutlined />
    </Button>
  );
};

export default ButtonSend;
