import React, { FC } from "react";
import { Avatar, Card, CardProps, TabPaneProps } from "antd";
import { title } from "process";
import { MessageReciver, ContentMessageReciver } from "./style";

interface Props {
  content: string;
}

const Reciver: FC<Props> = ({ content }) => {
  return (
    <React.Fragment>
      <MessageReciver>
        <div>
          <Avatar
            size={"large"}
            src="https://xsgames.co/randomusers/avatar.php?g=pixel&key=2"
          />
        </div>
        <ContentMessageReciver>{content}</ContentMessageReciver>
      </MessageReciver>
    </React.Fragment>
  );
};

export default Reciver;
