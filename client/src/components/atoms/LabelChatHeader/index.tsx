import React, { FC } from 'react';
import { LabelNameRoom } from './style';

interface Props {
  roomName: string;
}

const LabelChatHeader: FC<Props> = ({ roomName }) => {
  return <LabelNameRoom>{roomName}</LabelNameRoom>;
};

export default LabelChatHeader;
