import React, { useState } from "react";
import ContainerLayout from "components/layouts/ContainerLayout";
import LoginLayout from "components/layouts/LoginLayout";
import "index.css";

const App: React.FC = () => {
  const [userName, setUserName] = useState<string | null>("");
  
  const handleUsername = (username: string | null) => {
    setUserName(username);
    localStorage.setItem("username", username!);
  };


  return !userName ? (
    <LoginLayout handleUsername={handleUsername} />
  ) : (
    <ContainerLayout username={userName}/>
  );
};

export default App;
