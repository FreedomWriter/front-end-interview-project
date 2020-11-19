import React from "react";
import {
  StyledHeader,
  P,
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
      <P>FOXTROT</P>
      <Icon />
    </StyledHeader>
  );
}
