import React from "react";
import { StyledHeader, Hamburger, Icon } from "./Header.styles";

export default function Header() {
  return (
    <StyledHeader>
      <Hamburger />
      <nav>
        <a>Stores</a>
        <a>Contact Us</a>
      </nav>
      <p>FOXTROT</p>
      <Icon data-testid="shopping-icon" />
    </StyledHeader>
  );
}
