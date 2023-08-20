import React, { FC, useEffect, useState } from 'react';
import ModalCreateRoom from '../ModalCreateRoom';
import ModalJoinRoom from '../ModalJoinRoom';
import StatusModalCreateAndJoinRoom from 'helper/statusModal';
import { GroupButtonAtListRoom } from './style';
import ButtonCreateRoomAtListRoom from 'components/atoms/ButtonCreateRoomAtListRoom';
import ButtonJoinRoomAtListRoom from 'components/atoms/ButtonJoinRoomAtListRoom';

interface Props {
  isModalCreateRoomOpen: boolean;
  isModalJoinRoomOpen: boolean;
  statusModal: StatusModalCreateAndJoinRoom;
}

const ListRoomFooter: FC<Props> = ({ isModalCreateRoomOpen, isModalJoinRoomOpen, statusModal }) => {
  const [roomName, setRoomName] = useState<string>('');
  const [roomId, setRoomId] = useState<string>('');

  const onChangeCreateRoom = (e: React.ChangeEvent<HTMLInputElement>) => {
    setRoomName(e.target.value);
  };

  const onChangeJoinRoom = (e: React.ChangeEvent<HTMLInputElement>) => {
    setRoomId(e.target.value);
  };

  useEffect(() => {
    statusModal.roomValue = roomName;
  }, [roomName]);

  useEffect(() => {
    statusModal.roomValue = roomId;
  }, [roomId]);

  return (
    <React.Fragment>
      <GroupButtonAtListRoom>
        <ButtonCreateRoomAtListRoom onClick={typeButton => statusModal.showModal(typeButton)} typeButtonClick={statusModal.typeButton} />
        <ButtonJoinRoomAtListRoom onClick={typeButton => statusModal.showModal(typeButton)} typeButtonClick={statusModal.typeButton} />
      </GroupButtonAtListRoom>
      <ModalCreateRoom isModalCreateRoomOpen={isModalCreateRoomOpen} statusModal={statusModal} onChange={onChangeCreateRoom} roomName={roomName} />
      <ModalJoinRoom isModalJoinRoomOpen={isModalJoinRoomOpen} statusModal={statusModal} onChange={onChangeJoinRoom} />
    </React.Fragment>
  );
};

export default ListRoomFooter;
