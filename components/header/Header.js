import React from "react";
import { StyledHeader, H1, Icon, LinkContainer, Link } from "./Header.styles";

export default function Header() {
  return (
    <StyledHeader>
      <LinkContainer>
        <Link>Stores</Link>
        <Link>Contact Us</Link>
      </LinkContainer>
      <H1>FOXTROT</H1>
      <Icon />
    </StyledHeader>
  );
}
