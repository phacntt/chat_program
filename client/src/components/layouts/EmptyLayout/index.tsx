import { Layout, Empty, Button } from "antd";
import React from "react";
import { LayoutEmpty } from "./style";

const EmptyLayout = () => {
  return (
    <LayoutEmpty>
      <Empty />
      <div style={{marginTop: "30px"}}>
        <Button size="large" type="primary">Create</Button>
        <Button size="large" type="primary">Join</Button>
      </div>
    </LayoutEmpty>
  );
};

export default EmptyLayout;
