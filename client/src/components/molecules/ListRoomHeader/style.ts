import { Header } from "antd/es/layout/layout";
import { styled } from "styled-components";

export const HeaderListRoom = styled(Header)`
  height: 80px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 20px;
  font-weight: bold;
  margin-bottom: 15px;
  background: rgb(238, 174, 202);
  background: radial-gradient(
    circle,
    rgba(238, 174, 202, 1) 0%,
    rgba(148, 187, 233, 1) 100%
  );
  padding: 0 20px;
`;
