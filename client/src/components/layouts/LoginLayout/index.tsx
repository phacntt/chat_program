import { Layout, Empty, Button, Checkbox, Form, Input } from "antd";
import React, { FC } from "react";
import { ContainerLogin, ContentLogin } from "./style";
import { InputUsername } from "components/atoms/InputUsernameLogin/style";
import { LoginButton } from "components/atoms/ButtonLogin/style";
import LoginBody from "components/molecules/LoginBody";

interface Props {
  handleUsername: (username: string | null) => void;
}

const LoginLayout: FC<Props> = ({ handleUsername }) => {
  return (
    <ContentLogin>
      <ContainerLogin>
        <h2>BEFORE STARTED</h2>
        <LoginBody handleUsername={handleUsername}/>
      </ContainerLogin>
    </ContentLogin>
  );
};

export default LoginLayout;
