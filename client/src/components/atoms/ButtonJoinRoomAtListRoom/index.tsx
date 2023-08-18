import React, { FC } from "react"
import { ButtonJoinRoomFooter } from "./style"
import { StatusButtonEmptyLayout } from "types/statusButtonEmptyLayout.type";

interface Props {
    onClick: (type: StatusButtonEmptyLayout) => void;
    typeButtonClick: StatusButtonEmptyLayout;
  }

const ButtonJoinRoomAtListRoom: FC<Props> = ({ onClick }) => {
    return (
        <ButtonJoinRoomFooter onClick={() => onClick(StatusButtonEmptyLayout.Join)}>
            Join Room
        </ButtonJoinRoomFooter>
    )
}

export default ButtonJoinRoomAtListRoom;