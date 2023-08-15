import { Avatar } from "antd";
import { Header } from "antd/es/layout/layout";
import LabelChatHeader from "components/atoms/LabelChatHeader";
import React, { FC } from "react";
import { AvatarHeader, HeaderChat } from "./style";

interface Props {
  reciver: string;
}

const ChatHeader: FC<Props> = ({ reciver }) => {
  return (
    <HeaderChat>
      <AvatarHeader
        size={"large"}
        src="https://xsgames.co/randomusers/avatar.php?g=pixel&key=2"
      />
      <LabelChatHeader reciver={reciver} />
    </HeaderChat>
  );
};

export default ChatHeader;
