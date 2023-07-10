import React from "react";
import Button from "../../components/UI/Button/Button";
import { useAuth0 } from "@auth0/auth0-react";
const LoginButton = (props) => {
  const { loginWithRedirect } = useAuth0();

  return (
    <Button onClick={loginWithRedirect} isPrimary={true}>
      Login
    </Button>
  );
};

export default LoginButton;
