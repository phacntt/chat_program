import React from "react";
import { Avatar, Card, CardProps, TabPaneProps } from "antd";
import { title } from "process";
import { MessageReciver } from "./reciver.style";
import { ContentMessageReciver } from "./reciver.style";

const Reciver = () => {
  return (
    <>
      <MessageReciver>
        <div>
          <Avatar
            size={"large"}
            src="https://xsgames.co/randomusers/avatar.php?g=pixel&key=2"
          />
        </div>
        <ContentMessageReciver>
            Lorem ipsum dolor sit,
        </ContentMessageReciver>
      </MessageReciver>
      <MessageReciver>
        <div>
          <Avatar
            size={"large"}
            src="https://xsgames.co/randomusers/avatar.php?g=pixel&key=2"
          />
        </div>
        <ContentMessageReciver>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Odio,
            exercitationem saepe, nulla fugiat nobis aliquid nesciunt, a
            laudantium repudiandae in id velit sint optio qui. Qui delectus
            repellat aperiam amet.
        </ContentMessageReciver>
      </MessageReciver>
    </>
  );
};

export default Reciver;
