import { Avatar, MenuProps } from 'antd';
import ContainerListRooms from 'components/molecules/ContainerListRooms';
import React, { FC, useEffect, useState } from 'react';
import { StatusButtonEmptyLayout } from 'types/statusButtonEmptyLayout.type';
import ListRoomHeader from 'components/molecules/ListRoomHeader';
import ListRoomFooter from 'components/molecules/ListRoomFooter';
import { MessageListRoomsByAuthor, MessageAction } from 'types/messageAction.types';
import { TypeMessage } from 'types/enum';
import { Room } from 'types/room.type';
import { statusModalCreateAndJoinRoom } from 'helper/statusModal';

interface Props {
  setRoom: (room: string) => void;
  setRoomId: (roomId: string) => void;
  sendMessage: (message: any) => void;
  username: string;
  rooms: Room[];
  roomId: string;
}

const ListRooms: FC<Props> = ({ setRoom, setRoomId, sendMessage, username, rooms, roomId }) => {
  const [isModalCreateRoomOpen, setIsModalCreateRoomOpen] = useState(false);
  const [items, setItems] = useState<any[]>([]);
  const [isModalJoinRoomOpen, setIsModalJoinRoomOpen] = useState(false);
  const [typeButton, setTypeButton] = useState<StatusButtonEmptyLayout>(StatusButtonEmptyLayout.Create);

  useEffect(() => {
    const items: MenuProps['items'] = [...rooms].map((room, index) => ({
      key: room.roomId,
      icon: <Avatar size={'large'} src="https://xsgames.co/randomusers/avatar.php?g=pixel&key=2" />,
      label: room.roomName,
    }));
    setItems(items);
  }, [rooms]);

  const statusModal = statusModalCreateAndJoinRoom(username, setTypeButton, setIsModalCreateRoomOpen, setIsModalJoinRoomOpen, sendMessage, setRoomId);

  useEffect(() => {
    const messageListRoomsByAuthor: MessageListRoomsByAuthor = {
      author: username,
    };

    const message: MessageAction = {
      action: TypeMessage.ListRooms,
      data: messageListRoomsByAuthor,
    };

    sendMessage(JSON.stringify(message));
  }, []);

  return (
    <div>
      <ListRoomHeader username={username} />
      <ContainerListRooms items={items} setRoom={setRoom} setRoomId={setRoomId} sendMessage={sendMessage} roomId={roomId} />
      <ListRoomFooter
        isModalCreateRoomOpen={isModalCreateRoomOpen}
        isModalJoinRoomOpen={isModalJoinRoomOpen}
        statusModal={statusModal}
        typeButton={typeButton}
      />
    </div>
  );
};

export default ListRooms;
