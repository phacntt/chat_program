import { Menu } from "antd";
import React, { FC } from "react";

interface Props {
    setRoom: (room: any) => void;
    items: any[]
}

const ItemRooms: FC<Props> = ({items, setRoom}) => {
    return (
        <Menu
          theme="light"
          mode="inline"
          onClick={setRoom}
          items={items}
        />
    );
}

export default ItemRooms;