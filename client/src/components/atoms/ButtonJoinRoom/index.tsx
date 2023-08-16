import { Button } from "antd";
import React, { FC } from "react";
import { ButtonJoinRoomChat } from "../ButtonJoinRoom/style";
import { StatusButtonEmptyLayout } from "types/statusButtonEmptyLayout.type";

interface Props {
  onClick: (type: StatusButtonEmptyLayout) => void;
  typeButtonClick: StatusButtonEmptyLayout;
}

const ButtonJoinRoom: FC<Props> = ({ onClick }) => {
  return (
    <ButtonJoinRoomChat
      onClick={() => onClick(StatusButtonEmptyLayout.Join)}
      size="large"
      type="primary"
      danger
    >
      Join Room
    </ButtonJoinRoomChat>
  );
};

export default ButtonJoinRoom;
