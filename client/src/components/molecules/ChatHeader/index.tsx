import { Avatar } from 'antd';
import LabelChatHeader from 'components/atoms/LabelChatHeader';
import React, { FC } from 'react';
import { ContainerHeaderChat, HeaderChat, HeaderDetail } from './style';

interface Props {
  roomName: string;
  roomId: string;
}

const ChatHeader: FC<Props> = ({ roomName, roomId }) => {
  return (
    <ContainerHeaderChat>
      <HeaderChat>
        <Avatar size={'large'} src="https://xsgames.co/randomusers/avatar.php?g=pixel&key=2" />
      </HeaderChat>
      <HeaderDetail>
        <LabelChatHeader roomName={roomName} />
        <div>ID: {roomId}</div>
      </HeaderDetail>
    </ContainerHeaderChat>
  );
};

export default ChatHeader;
