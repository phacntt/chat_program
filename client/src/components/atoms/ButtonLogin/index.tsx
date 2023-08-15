import { Button } from "antd";
import React, { FC } from "react";

interface Props {
  onClick: (e: any) => void;
}

const ButtonLogin: FC<Props> = ({ onClick }) => {
  return (
    <Button size="large" onClick={onClick} type="primary">
      Let's go
    </Button>
  );
};

export default ButtonLogin;
