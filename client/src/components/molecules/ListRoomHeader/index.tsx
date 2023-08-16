import React from "react";
import { HeaderListRoom } from "./style";

const ListRoomHeader = () => {
  return (
    <HeaderListRoom>Hi, {localStorage.getItem("username")}</HeaderListRoom>
  );
};

export default ListRoomHeader;
