import { Empty } from "antd";
import React, { FC, useEffect, useState } from "react";
import { GroupButtonAction, LayoutEmpty } from "./style";
import ButtonCreateRoom from "components/atoms/ButtonCreateRoom";
import ButtonJoinRoom from "components/atoms/ButtonJoinRoom";
import { StatusButtonEmptyLayout } from "types/statusButtonEmptyLayout.type";
import StatusModalCreateAndJoinRoom from "helper/statusModal";
import ModalJoinRoom from "components/molecules/ModalJoinRoom";
import ModalCreateRoom from "components/molecules/ModalCreateRoom";

interface Props {
  sendMessage: (message: any) => void;
  username: string;
}

const EmptyLayout: FC<Props> = ({ sendMessage, username }) => {
  const [isModalCreateRoomOpen, setIsModalCreateRoomOpen] = useState(false);
  const [isModalJoinRoomOpen, setIsModalJoinRoomOpen] = useState(false);
  const [typeButton, setTypeButton] = useState<StatusButtonEmptyLayout>(
    StatusButtonEmptyLayout.Create
  );
  const [roomName, setRoomName] = useState<string>("");
  const [roomId, setRoomId] = useState<string>("");

  const onChangeCreateRoom = (e: React.ChangeEvent<HTMLInputElement>) => {
    setRoomName(e.target.value);
  };

  const onChangeJoinRoom = (e: React.ChangeEvent<HTMLInputElement>) => {
    setRoomId(e.target.value);
  };

  const statusModal = new StatusModalCreateAndJoinRoom(
    typeButton,
    username,
    setTypeButton,
    setIsModalCreateRoomOpen,
    setIsModalJoinRoomOpen,
    sendMessage
  );

  useEffect(() => {
    statusModal.roomValue = roomName;
  }, [roomName])

  useEffect(() => {
    statusModal.roomValue = roomId;
  }, [roomId])

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
    </LayoutEmpty>
  );
};

export default EmptyLayout;
