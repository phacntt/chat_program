import ItemRooms from 'components/atoms/ItemRoom';
import React from 'react';
import { FC } from 'react';
import { ContainerRooms } from './style';
import { ItemType } from 'antd/es/breadcrumb/Breadcrumb';

interface Props {
  items: ItemType[];
  roomId: string;
  setRoom: (room: string) => void;
  setRoomId: (roomId: string) => void;
  sendMessage: (message: any) => void;
}

const ContainerListRooms: FC<Props> = ({ items, setRoom, setRoomId, sendMessage, roomId }) => {
  return (
    <ContainerRooms>
      <ItemRooms items={items} setRoom={setRoom} setRoomId={setRoomId} sendMessage={sendMessage} roomId={roomId} />
    </ContainerRooms>
  );
};

export default ContainerListRooms;
