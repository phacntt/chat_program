import { Modal, Input } from "antd";
import StatusModalCreateAndJoinRoom from "helper/statusModal";
import React, { FC } from "react";

interface Props {
  statusModal: StatusModalCreateAndJoinRoom;
  isModalCreateRoomOpen: boolean;
}

const ModalCreateRoom: FC<Props> = ({ statusModal,  isModalCreateRoomOpen}) => {

  return (
    <Modal
      title="Create Room"
      open={isModalCreateRoomOpen}
      onOk={statusModal.handleOk}
      onCancel={statusModal.handleCancel}
    >
      <div>
        <Input placeholder="Enter Name Room" />
      </div>
    </Modal>
  );
};

export default ModalCreateRoom;
