import React, { FC, useState } from 'react';
import ModalCreateRoom from '../ModalCreateRoom';
import ModalJoinRoom from '../ModalJoinRoom';
import { GroupButtonAtListRoom } from './style';
import ButtonCreateRoomAtListRoom from 'components/atoms/ButtonCreateRoomAtListRoom';
import ButtonJoinRoomAtListRoom from 'components/atoms/ButtonJoinRoomAtListRoom';
import { StatusModalCreateAndJoinRoom } from 'helper/statusModal';
import { StatusButtonEmptyLayout } from 'types/statusButtonEmptyLayout.type';

interface Props {
  isModalCreateRoomOpen: boolean;
  isModalJoinRoomOpen: boolean;
  statusModal: StatusModalCreateAndJoinRoom;
  typeButton: StatusButtonEmptyLayout;
}

const ListRoomFooter: FC<Props> = ({ isModalCreateRoomOpen, isModalJoinRoomOpen, statusModal, typeButton }) => {
  const [roomName, setRoomName] = useState<string>('');
  const [roomId, setRoomId] = useState<string>('');

  const onChangeCreateRoom = (e: React.ChangeEvent<HTMLInputElement>) => {
    setRoomName(e.target.value);
  };

  const onChangeJoinRoom = (e: React.ChangeEvent<HTMLInputElement>) => {
    setRoomId(e.target.value);
  };

  return (
    <React.Fragment>
      <GroupButtonAtListRoom>
        <ButtonCreateRoomAtListRoom onClick={typeButton => statusModal.showModal(typeButton)} typeButtonClick={typeButton} />
        <ButtonJoinRoomAtListRoom onClick={typeButton => statusModal.showModal(typeButton)} typeButtonClick={typeButton} />
      </GroupButtonAtListRoom>
      <ModalCreateRoom
        isModalCreateRoomOpen={isModalCreateRoomOpen}
        statusModal={statusModal}
        onChange={onChangeCreateRoom}
        roomName={roomName}
        typeButton={StatusButtonEmptyLayout.Create}
      />
      <ModalJoinRoom
        isModalJoinRoomOpen={isModalJoinRoomOpen}
        statusModal={statusModal}
        onChange={onChangeJoinRoom}
        roomId={roomId}
        typeButton={StatusButtonEmptyLayout.Join}
      />
    </React.Fragment>
  );
};

export default ListRoomFooter;
