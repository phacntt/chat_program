import React, { FC, useState } from "react";
import { ButtonCreateRoomChat } from "./style";
import { StatusButtonEmptyLayout } from "types/statusButtonEmptyLayout.type";

interface Props {
  onClick: (type: StatusButtonEmptyLayout) => void;
  typeButtonClick: StatusButtonEmptyLayout;
}

const ButtonCreateRoom: FC<Props> = ({ onClick, typeButtonClick }) => {
  return (
    <ButtonCreateRoomChat
      onClick={() => onClick(StatusButtonEmptyLayout.Create)}
      size="large"
      type="primary"
      value={typeButtonClick}
    >
      Create Room
    </ButtonCreateRoomChat>
  );
};

export default ButtonCreateRoom;
