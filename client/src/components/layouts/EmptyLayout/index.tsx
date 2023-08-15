import { Layout, Empty } from "antd";
import React from "react";
import { LayoutEmpty } from "./style";

const EmptyLayout = () => {
  return (
    <LayoutEmpty>
        <Empty />
    </LayoutEmpty>    
  );
};

export default EmptyLayout;
