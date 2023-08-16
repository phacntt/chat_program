import { Menu } from "antd";
import React, { FC } from "react";
import { MenuListRoom } from "./style";

interface Props {
    setRoom: (room: any) => void;
    items: any[]
}

const ItemRooms: FC<Props> = ({items, setRoom}) => {
    return (
        <MenuListRoom
          theme="light"
          mode="inline"
        //   onClick={setRoom}
          onClick={(key: any ) => {
            setRoom(items[key.key - 1].label)
          }}
          items={items}
        />
    );
}

export default ItemRooms;