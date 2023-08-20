import React, { FC } from 'react';
import { ContainerLogin, ContentLogin } from './style';
import Login from 'components/organisms/Login';
import TitleLogin from 'components/atoms/TitleLogin';

interface Props {
  handleUsername: (username: string | null) => void;
}

const LoginLayout: FC<Props> = ({ handleUsername }) => {
  return (
    <ContentLogin>
      <ContainerLogin>
        <TitleLogin />
        <Login handleUsername={handleUsername} />
      </ContainerLogin>
    </ContentLogin>
  );
};

export default LoginLayout;
