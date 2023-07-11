import React from "react";
import Button from "../../components/UI/Button/Button";
import { useAuth0 } from "@auth0/auth0-react";

const RegisterButton = (props) => {
  const { loginWithRedirect } = useAuth0();
  return (
    <Button
      isPrimary={false}
      className={props.className}
      onClick={() =>
        loginWithRedirect({
          authorizationParams: {
            screen_hint: "signup",
          },
        })
      }
    >
      Register
    </Button>
  );
};
export default RegisterButton;
