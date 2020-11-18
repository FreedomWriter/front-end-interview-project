import React from "react";
import {
  StyledHeader,
  H1,
  Hamburger,
  Icon,
  LinkContainer,
  Link,
} from "./Header.styles";

export default function Header() {
  return (
    <StyledHeader>
      <Hamburger />
      <LinkContainer>
        <Link>Stores</Link>
        <Link>Contact Us</Link>
      </LinkContainer>
      <H1>FOXTROT</H1>
      <Icon />
    </StyledHeader>
  );
}
