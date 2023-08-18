import { Content } from "antd/es/layout/layout";
import { styled } from "styled-components";

export const ContentChat = styled(Content)`
  overflow: auto;
  background: rgb(178 178 178);
  height: 843px;
  flex: 1;
  padding: 24px;
  width: 1540px;
`;

export const Wrap = styled.div`
  text-align: center;
  margin: 20px;
  position: relative;
  &:before {
    content: '';
    position: absolute;
    top: 50%;
    left: 0;
    border-top: 1px solid gray;
    background: black;
    width: 100%;
    transform: translateY(-50%);
`;
export const Links = styled.div`
  padding: 0 10px;
  display: flex;
  justify-content: space-between;
  position: relative;
`;
export const Dot = styled.div`
  width: max-content;
  background: rgb(178 178 178);
`;
