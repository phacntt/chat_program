import { Empty } from "antd";
import React, { useState } from "react";
import { GroupButtonAction, LayoutEmpty } from "./style";
import ButtonCreateRoom from "components/atoms/ButtonCreateRoom";
import ButtonJoinRoom from "components/atoms/ButtonJoinRoom";
import { StatusButtonEmptyLayout } from "types/statusButtonEmptyLayout.type";
import StatusModalCreateAndJoinRoom from "helper/statusModal";
import ModalJoinRoom from "components/molecules/ModalJoinRoom";
import ModalCreateRoom from "components/molecules/ModalCreateRoom";

const EmptyLayout = () => {
  const [isModalCreateRoomOpen, setIsModalCreateRoomOpen] = useState(false);
  const [isModalJoinRoomOpen, setIsModalJoinRoomOpen] = useState(false);
  const [typeButton, setTypeButton] = useState<StatusButtonEmptyLayout>(
    StatusButtonEmptyLayout.Create
  );

  const statusModal = new StatusModalCreateAndJoinRoom(
    typeButton,
    setTypeButton,
    setIsModalCreateRoomOpen,
    setIsModalJoinRoomOpen
  );

  return (
    <LayoutEmpty>
      <Empty />
      <GroupButtonAction>
        <ButtonCreateRoom
          onClick={(typeButton) => statusModal.showModal(typeButton)}
          typeButtonClick={statusModal.typeButton}
        />
        <ButtonJoinRoom
          onClick={(typeButton) => statusModal.showModal(typeButton)}
          typeButtonClick={statusModal.typeButton}
        />
      </GroupButtonAction>
      <ModalCreateRoom isModalCreateRoomOpen={isModalCreateRoomOpen} statusModal={statusModal}/>
      <ModalJoinRoom isModalJoinRoomOpen={isModalJoinRoomOpen} statusModal={statusModal}/>
    </LayoutEmpty>
  );
};

export default EmptyLayout;
