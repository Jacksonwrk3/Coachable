import React from "react";
import LogoutButton from "../../components/LogoutButton/LogoutButton";
import { useAuth0 } from "@auth0/auth0-react";

const PlaceHolder = (props) => {
  const { isAuthenticated, user, isLoading } = useAuth0();
  console.log(user);
  if (isAuthenticated) {
    return (
      <>
        <h1>PlaceHolder</h1>
        email:{user.email} <br />
        name: {user.name}
        <br />
        nickname: {user.nickname}
        <br />
        picture:{" "}
        <img
          src={user.picture}
          style={{ height: "150px", width: "150px" }}
          alt="profile-pic"
        />
        <br />
        sub: {user.sub}
        <br />
        updated at: {user["updated_at"]}
        <br /> <br />
        <LogoutButton />
      </>
    );
  }
};

export default PlaceHolder;
