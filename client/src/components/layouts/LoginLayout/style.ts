import { Content } from "antd/es/layout/layout";
import styled from "styled-components";

export const ContentLogin = styled(Content)`
  background: rgb(2, 0, 36);
  background: linear-gradient(
    90deg,
    rgba(2, 0, 36, 1) 0%,
    rgba(9, 121, 114, 1) 0%,
    rgba(0, 212, 255, 1) 100%
  );
`;

export const ContainerLogin = styled.div`
  width: 400px;
  position: absolute;
  top: 45%;
  left: 50%;
  margin-right: -50%;
  transform: translate(-50%, -50%);
`;
