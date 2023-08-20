import { Modal, Input } from 'antd';
import StatusModalCreateAndJoinRoom from 'helper/statusModal';
import statusModal from 'helper/statusModal';
import React, { FC } from 'react';

interface Props {
  statusModal: StatusModalCreateAndJoinRoom;
  isModalJoinRoomOpen: boolean;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  roomId: string;
}

const ModalJoinRoom: FC<Props> = ({ statusModal, isModalJoinRoomOpen, onChange, roomId }) => {
  return (
    <Modal title="Join Room" open={isModalJoinRoomOpen} onOk={statusModal.handleOk} onCancel={statusModal.handleCancel}>
      <Input value={roomId} onChange={onChange} placeholder="Enter Room ID" />
    </Modal>
  );
};

export default ModalJoinRoom;
