import ItemRooms from "components/atoms/ItemRoom";
import React from "react";
import { FC } from "react";
import { ContainerRooms } from "./style";

interface Props {
  setRoom: (room: string) => void;
  items: any[];
}

const ContainerListRooms: FC<Props> = ({ items, setRoom }) => {
  return (
    <ContainerRooms>
      <ItemRooms items={items} setRoom={setRoom} />
    </ContainerRooms>
  );
};

export default ContainerListRooms;
