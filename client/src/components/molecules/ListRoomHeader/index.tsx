import React, { FC } from 'react';
import { HeaderListRoom } from './style';

interface Props {
  username: string;
}

const ListRoomHeader: FC<Props> = ({ username }) => {
  return <HeaderListRoom>Hi, {username}</HeaderListRoom>;
};

export default ListRoomHeader;
