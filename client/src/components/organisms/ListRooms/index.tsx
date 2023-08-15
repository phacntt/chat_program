import {
  UserOutlined,
  VideoCameraOutlined,
  UploadOutlined,
  BarChartOutlined,
  CloudOutlined,
  AppstoreOutlined,
  TeamOutlined,
  ShopOutlined,
  PlusOutlined,
} from "@ant-design/icons";
import { Avatar, Button, Menu, MenuProps, Space } from "antd";
import ContainerListRooms from "components/molecules/ContainerListRooms";
import React, { FC } from "react";

interface Props {
  setRoom: (room: any) => void;
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
  key: `nav ${index + 1}`,
  icon: (
    <Avatar
      size={"default"}
      src="https://xsgames.co/randomusers/avatar.php?g=pixel&key=2"
    />
  ),
  label: `nav ${index + 1}`,
})) as MenuProps["items"];

const ListRooms: FC<Props> = ({ setRoom }) => {
  return (
    <div>
      <ContainerListRooms items={items!} setRoom={setRoom}/>
      <div>
        <Space direction="vertical" style={{ width: "100%" }}>
          <Button type="primary" block>
            <PlusOutlined />
          </Button>
        </Space>
      </div>
    </div>
  );
};

export default ListRooms;
