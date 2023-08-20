import React, { useState } from 'react';
import ContainerLayout from 'components/layouts/ContainerLayout';
import LoginLayout from 'components/layouts/LoginLayout';
import 'index.css';
import { VariableLocal } from 'constant';

const App: React.FC = () => {
  const [userName, setUserName] = useState<string | null>('');

  const handleUsername = (username: string | null) => {
    setUserName(username);
    localStorage.setItem(VariableLocal.username, username!);
  };

  const checkUserLogin = localStorage.getItem(VariableLocal.username);

  return !checkUserLogin ? <LoginLayout handleUsername={handleUsername} /> : <ContainerLayout username={checkUserLogin} />;
};

export default App;
