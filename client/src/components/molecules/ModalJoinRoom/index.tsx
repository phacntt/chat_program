import { Modal, Input } from 'antd';
import { StatusModalCreateAndJoinRoom } from 'helper/statusModal';
import React, { FC } from 'react';
import { StatusButtonEmptyLayout } from 'types/statusButtonEmptyLayout.type';

interface Props {
  statusModal: StatusModalCreateAndJoinRoom;
  isModalJoinRoomOpen: boolean;
  roomId: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  typeButton: StatusButtonEmptyLayout;
}

const ModalJoinRoom: FC<Props> = ({ statusModal, isModalJoinRoomOpen, roomId, onChange, typeButton }) => {
  return (
    <Modal
      title="Join Room"
      open={isModalJoinRoomOpen}
      onOk={() => statusModal.handleOk(roomId, typeButton)}
      onCancel={() => statusModal.handleCancel(typeButton)}
    >
      <Input onChange={onChange} placeholder="Enter Room ID" />
    </Modal>
  );
};

export default ModalJoinRoom;
