import ButtonCreateRoom from "components/atoms/ButtonCreateRoom";
import ButtonJoinRoom from "components/atoms/ButtonJoinRoom";
import { GroupButtonAction } from "components/layouts/EmptyLayout/style";
import statusModal from "helper/statusModal";
import React, { FC, useState } from "react";
import ModalCreateRoom from "../ModalCreateRoom";
import ModalJoinRoom from "../ModalJoinRoom";
import StatusModalCreateAndJoinRoom from "helper/statusModal";
import { StatusButtonEmptyLayout } from "types/statusButtonEmptyLayout.type";

interface Props {
  isModalCreateRoomOpen: boolean;
  isModalJoinRoomOpen: boolean;
  statusModal: StatusModalCreateAndJoinRoom;
}

const ListRoomFooter: FC<Props> = ({
  isModalCreateRoomOpen,
  isModalJoinRoomOpen,
  statusModal,
}) => {
  return (
    <React.Fragment>
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
      <ModalCreateRoom
        isModalCreateRoomOpen={isModalCreateRoomOpen}
        statusModal={statusModal}
      />
      <ModalJoinRoom
        isModalJoinRoomOpen={isModalJoinRoomOpen}
        statusModal={statusModal}
      />
    </React.Fragment>
  );
};

export default ListRoomFooter;
