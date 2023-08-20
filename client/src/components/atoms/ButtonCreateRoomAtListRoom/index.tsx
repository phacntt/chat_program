import React, { FC } from 'react';
import { ButtonCreateRoomFooter } from './style';
import { StatusButtonEmptyLayout } from 'types/statusButtonEmptyLayout.type';

interface Props {
  onClick: (type: StatusButtonEmptyLayout) => void;
  typeButtonClick: StatusButtonEmptyLayout;
}

const ButtonCreateRoomAtListRoom: FC<Props> = ({ onClick, typeButtonClick }) => {
  return (
    <ButtonCreateRoomFooter onClick={() => onClick(StatusButtonEmptyLayout.Create)} value={typeButtonClick}>
      Create Room
    </ButtonCreateRoomFooter>
  );
};

export default ButtonCreateRoomAtListRoom;
