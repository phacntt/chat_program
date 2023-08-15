import React, { useEffect, useState } from "react";
import ContainerLayout from "components/layouts/ContainerLayout";
import LoginLayout from "components/layouts/LoginLayout";

const App: React.FC = () => {
  const [userName, setUserName ] = useState<string | null>("");

  useEffect(() => {
    const username = localStorage.getItem("username")
    setUserName(username)
  }, [userName])

  const handleUsername = (username: string | null) => {
    setUserName(username);
  }

  return (
    !userName ? <LoginLayout handleUsername={handleUsername}/> : <ContainerLayout/>
  );
};

export default App;
