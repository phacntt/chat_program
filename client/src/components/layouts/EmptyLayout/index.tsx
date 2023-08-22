import { Empty } from 'antd';
import React, { FC, useEffect, useState } from 'react';
import { GroupButtonAction, LayoutEmpty } from './style';
import ButtonCreateRoom from 'components/atoms/ButtonCreateRoom';
import ButtonJoinRoom from 'components/atoms/ButtonJoinRoom';
import { StatusButtonEmptyLayout } from 'types/statusButtonEmptyLayout.type';
import ModalJoinRoom from 'components/molecules/ModalJoinRoom';
import ModalCreateRoom from 'components/molecules/ModalCreateRoom';
import { statusModalCreateAndJoinRoom } from 'helper/statusModal';

interface Props {
  sendMessage: (message: any) => void;
  username: string;
  setRoomId: (roomId: any) => void;
  roomId: string;
}

const EmptyLayout: FC<Props> = ({ sendMessage, username, setRoomId, roomId }) => {
  const [isModalCreateRoomOpen, setIsModalCreateRoomOpen] = useState(false);
  const [isModalJoinRoomOpen, setIsModalJoinRoomOpen] = useState(false);
  const [typeButton, setTypeButton] = useState<StatusButtonEmptyLayout>(StatusButtonEmptyLayout.Create);
  const [roomName, setRoomName] = useState<string>('');

  const statusModal = statusModalCreateAndJoinRoom(username, setTypeButton, setIsModalCreateRoomOpen, setIsModalJoinRoomOpen, sendMessage, setRoomId);

  const onChangeCreateRoom = (e: React.ChangeEvent<HTMLInputElement>) => {
    setRoomName(e.target.value);
  };

  const onChangeJoinRoom = (e: React.ChangeEvent<HTMLInputElement>) => {
    setRoomId(e.target.value);
  };

  return (
    <LayoutEmpty>
      <Empty />
      <GroupButtonAction>
        <ButtonCreateRoom onClick={statusModal.showModal} typeButtonClick={typeButton} />
        <ButtonJoinRoom onClick={statusModal.showModal} typeButtonClick={typeButton} />
      </GroupButtonAction>
      <ModalCreateRoom
        isModalCreateRoomOpen={isModalCreateRoomOpen}
        typeButton={typeButton}
        statusModal={statusModal}
        onChange={onChangeCreateRoom}
        roomName={roomName}
      />
      <ModalJoinRoom
        isModalJoinRoomOpen={isModalJoinRoomOpen}
        typeButton={typeButton}
        statusModal={statusModal}
        onChange={onChangeJoinRoom}
        roomId={roomId}
      />
    </LayoutEmpty>
  );
};

export default EmptyLayout;
