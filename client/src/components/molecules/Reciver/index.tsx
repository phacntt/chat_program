import React, { FC } from "react";
import { Avatar, Card, CardProps, TabPaneProps } from "antd";
import { title } from "process";
import {
  MessageReciver,
  ContentMessageReciver,
  ContenHeaderReciver,
  ContenFooterReciver,
  ContentBodyReciver,
} from "./style";

interface Props {
  content: string;
  name: string;
  timeSend: string;
}

const Reciver: FC<Props> = ({ content, name, timeSend }) => {
  return (
    <React.Fragment>
      <MessageReciver>
        <div>
          <Avatar
            size={"large"}
            src="https://xsgames.co/randomusers/avatar.php?g=pixel&key=2"
          />
        </div>
        <div>
          <ContentMessageReciver>
            <ContenHeaderReciver>{name}</ContenHeaderReciver>
            <ContentBodyReciver>{content}</ContentBodyReciver>
            <ContenFooterReciver>{timeSend}</ContenFooterReciver>
          </ContentMessageReciver>
        </div>
      </MessageReciver>
    </React.Fragment>
  );
};

export default Reciver;
