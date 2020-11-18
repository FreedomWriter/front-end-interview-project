import React from "react";
import {
  StyledFooter,
  IconContainer,
  LinkIcon,
  InstagramIcon,
  TwitterIcon,
  FacebookIcon,
  EmailIcon,
  LinkContainer,
  StyledLink,
} from "./Footer.styles";

export default function Footer() {
  return (
    <StyledFooter>
      <IconContainer>
        <LinkIcon />
        <InstagramIcon />
        <TwitterIcon />
        <FacebookIcon />
        <EmailIcon />
      </IconContainer>
      <LinkContainer>
        <StyledLink>Terms of Services</StyledLink>
        <StyledLink>Privacy</StyledLink>
      </LinkContainer>
    </StyledFooter>
  );
}
