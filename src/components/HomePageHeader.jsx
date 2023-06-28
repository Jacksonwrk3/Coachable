import React from "react";
import Logo from "./Logo";
import Button from "./UI/Button";
const HomePageHeader = () => {
  return (
    <header>
      <Logo />
      <Button isPrimary={false}>Register</Button>
      <Button isPrimary={true}>Sign in</Button>
    </header>
  );
};

export default HomePageHeader;
