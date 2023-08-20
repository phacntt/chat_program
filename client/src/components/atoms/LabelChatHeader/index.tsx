import React, { FC } from 'react';
import { LabelNameRoom } from './style';

interface Props {
  reciver: string;
}

const LabelChatHeader: FC<Props> = ({ reciver }) => {
  return <LabelNameRoom>{reciver}</LabelNameRoom>;
};

export default LabelChatHeader;
