import {
  UserOutlined,
  VideoCameraOutlined,
  UploadOutlined,
  BarChartOutlined,
  CloudOutlined,
  AppstoreOutlined,
  TeamOutlined,
  ShopOutlined,
} from "@ant-design/icons";
import { Avatar, MenuProps } from "antd";
import ContainerListRooms from "components/molecules/ContainerListRooms";
import StatusModalCreateAndJoinRoom from "helper/statusModal";
import React, { FC, useState } from "react";
import { StatusButtonEmptyLayout } from "types/statusButtonEmptyLayout.type";
import ListRoomHeader from "components/molecules/ListRoomHeader";
import ListRoomFooter from "components/molecules/ListRoomFooter";

interface Props {
  setRoom: (room: string) => void;
}

const items: MenuProps["items"] = [
  UserOutlined,
  VideoCameraOutlined,
  UploadOutlined,
  BarChartOutlined,
  CloudOutlined,
  AppstoreOutlined,
  TeamOutlined,
  ShopOutlined,
  UserOutlined,
  VideoCameraOutlined,
  UploadOutlined,
  BarChartOutlined,
  CloudOutlined,
  AppstoreOutlined,
  TeamOutlined,
  ShopOutlined,
  UserOutlined,
  VideoCameraOutlined,
  UploadOutlined,
  BarChartOutlined,
  CloudOutlined,
  AppstoreOutlined,
  TeamOutlined,
  ShopOutlined,
  UserOutlined,
  VideoCameraOutlined,
  UploadOutlined,
  BarChartOutlined,
  CloudOutlined,
  AppstoreOutlined,
  TeamOutlined,
  ShopOutlined,
  UserOutlined,
  VideoCameraOutlined,
  UploadOutlined,
  BarChartOutlined,
  CloudOutlined,
  AppstoreOutlined,
  TeamOutlined,
  ShopOutlined,
].map((_, index) => ({
  key: `${index + 1}`,
  icon: (
    <Avatar
      size={"default"}
      src="https://xsgames.co/randomusers/avatar.php?g=pixel&key=2"
    />
  ),
  label: `nav ${index + 1}`,
})) as MenuProps["items"];

const ListRooms: FC<Props> = ({ setRoom }) => {
  const [isModalCreateRoomOpen, setIsModalCreateRoomOpen] = useState(false);
  const [isModalJoinRoomOpen, setIsModalJoinRoomOpen] = useState(false);
  const [typeButton, setTypeButton] = useState<StatusButtonEmptyLayout>(
    StatusButtonEmptyLayout.Create
  );

  const statusModal = new StatusModalCreateAndJoinRoom(
    typeButton,
    setTypeButton,
    setIsModalCreateRoomOpen,
    setIsModalJoinRoomOpen
  );

  return (
    <div>
      <ListRoomHeader />
      <ContainerListRooms items={items!} setRoom={setRoom} />
      <ListRoomFooter
        isModalCreateRoomOpen={isModalCreateRoomOpen}
        isModalJoinRoomOpen={isModalJoinRoomOpen}
        statusModal={statusModal}
      />
    </div>
  );
};

export default ListRooms;
