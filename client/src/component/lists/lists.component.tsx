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
import { ItemType } from "antd/es/breadcrumb/Breadcrumb";
import Sider from "antd/es/layout/Sider";
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
    <Sider
      style={{
        overflow: "auto",
        height: "100vh",
        position: "relative",
        left: 0,
        top: 0,
        bottom: 0,
      }}
    >
      <div className="demo-logo-vertical" />
      <Menu
        theme="light"
        mode="inline"
        defaultSelectedKeys={["4"]}
        onClick={setRoom}
        items={items}
      />
      <div style={{}}>
        <Space direction="vertical" style={{ width: "100%" }}>
          <Button type="primary" block>
            <PlusOutlined />
          </Button>
        </Space>
      </div>
    </Sider>
  );
};

export default ListRooms;
