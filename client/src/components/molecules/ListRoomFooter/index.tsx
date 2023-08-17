import ButtonCreateRoom from "components/atoms/ButtonCreateRoom";
import ButtonJoinRoom from "components/atoms/ButtonJoinRoom";
import { GroupButtonAction } from "components/layouts/EmptyLayout/style";
import statusModal from "helper/statusModal";
import React, { FC, useEffect, useState } from "react";
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
  const [roomName, setRoomName] = useState<string>("");
  const [roomId, setRoomId] = useState<string>("");

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
        onChange={onChangeCreateRoom}
        roomName={roomName}
      />
      <ModalJoinRoom
        isModalJoinRoomOpen={isModalJoinRoomOpen}
        statusModal={statusModal}
        onChange={onChangeJoinRoom}
        roomId={roomId}
      />
    </React.Fragment>
  );
};

export default ListRoomFooter;
