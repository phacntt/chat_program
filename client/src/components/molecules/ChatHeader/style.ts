import { Avatar } from "antd";
import { Header } from "antd/es/layout/layout";
import { styled } from "styled-components";

export const ContainerHeaderChat = styled.div`
  display: flex;
`;

export const HeaderChat = styled(Header)`
  padding: 0px 24px;
  background: white;
  display: flex;
  align-items: center;
  height: 80px;
`;

export const AvatarHeader = styled(Avatar)`
  margin-right: 20px;
`;

export const HeaderDetail = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;
