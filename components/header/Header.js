import React from "react";
import { StyledHeader, Hamburger, Icon } from "./Header.styles";

export default function Header() {
  return (
    <StyledHeader>
      <Hamburger />
      <div>
        <a>Stores</a>
        <a>Contact Us</a>
      </div>
      <p>FOXTROT</p>
      <Icon data-testid="shopping-icon" />
    </StyledHeader>
  );
}
