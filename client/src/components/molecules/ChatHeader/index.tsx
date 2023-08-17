import { Avatar } from "antd";
import { Header } from "antd/es/layout/layout";
import LabelChatHeader from "components/atoms/LabelChatHeader";
import React, { FC } from "react";
import { AvatarHeader, HeaderChat } from "./style";

interface Props {
  reciver: string;
  roomId: string;
}

const ChatHeader: FC<Props> = ({ reciver, roomId }) => {
  return (
    <div style={{ display: "flex" }}>
      <HeaderChat>
        <Avatar
          size={"large"}
          src="https://xsgames.co/randomusers/avatar.php?g=pixel&key=2"
        />
      </HeaderChat>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
        }}
      >
        <LabelChatHeader reciver={reciver} />
        <div>ID: {roomId}</div>
      </div>
    </div>
  );
};

export default ChatHeader;
