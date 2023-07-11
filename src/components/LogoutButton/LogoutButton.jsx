import Button from "../../components/UI/Button/Button";
import { useAuth0 } from "@auth0/auth0-react";
import React from "react";

const LogoutButton = (props) => {
  const { logout } = useAuth0();
  return (
    <Button isPrimary={false} onClick={logout}>
      Log out
    </Button>
  );
};

export default LogoutButton;
