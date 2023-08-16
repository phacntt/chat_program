import { Button } from "antd";
import { styled } from "styled-components";

export const ButtonCreateRoomChat = styled(Button)`
  margin: 0 10px;
  height: 50px !important;
  font-weight: bold;
  span {
    font-size: 15px;
  }
  :hover {
    text-decoration: underline;
  }
`;
