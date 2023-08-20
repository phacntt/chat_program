import { Modal, Input } from 'antd';
import StatusModalCreateAndJoinRoom from 'helper/statusModal';
import React, { FC } from 'react';

interface Props {
  statusModal: StatusModalCreateAndJoinRoom;
  isModalCreateRoomOpen: boolean;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  roomName: string;
}

const ModalCreateRoom: FC<Props> = ({ statusModal, isModalCreateRoomOpen, onChange, roomName }) => {
  return (
    <Modal title="Create Room" open={isModalCreateRoomOpen} onOk={statusModal.handleOk} onCancel={statusModal.handleCancel}>
      <div>
        <Input value={roomName} onChange={onChange} placeholder="Enter Name Room" />
      </div>
    </Modal>
  );
};

export default ModalCreateRoom;
