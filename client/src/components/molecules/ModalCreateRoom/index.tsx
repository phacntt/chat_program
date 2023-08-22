import { Modal, Input } from 'antd';
import { StatusModalCreateAndJoinRoom } from 'helper/statusModal';
import React, { FC } from 'react';
import { StatusButtonEmptyLayout } from 'types/statusButtonEmptyLayout.type';

interface Props {
  statusModal: StatusModalCreateAndJoinRoom;
  typeButton: StatusButtonEmptyLayout;
  isModalCreateRoomOpen: boolean;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  roomName: string;
}

const ModalCreateRoom: FC<Props> = ({ statusModal, typeButton, isModalCreateRoomOpen, onChange, roomName }) => {
  return (
    <Modal
      title="Create Room"
      open={isModalCreateRoomOpen}
      onOk={() => statusModal.handleOk(roomName, typeButton)}
      onCancel={() => statusModal.handleCancel(StatusButtonEmptyLayout.Create)}
    >
      <div>
        <Input value={roomName} onChange={onChange} placeholder="Enter Name Room" />
      </div>
    </Modal>
  );
};

export default ModalCreateRoom;
