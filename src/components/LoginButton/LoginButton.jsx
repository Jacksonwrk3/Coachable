import React from "react";
import Button from "../../components/UI/Button/Button";
import { useAuth0 } from "@auth0/auth0-react";
import { useNavigate } from "react-router-dom";
const LoginButton = (props) => {
  const { loginWithRedirect, isAuthenticated } = useAuth0();
  const navigate = useNavigate();
  if (isAuthenticated) {
    navigate("/placeholder");
  }
  return (
    <Button onClick={loginWithRedirect} isPrimary={true}>
      Login
    </Button>
  );
};

export default LoginButton;
