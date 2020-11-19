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
        <LinkIcon data-testid="link-icon" />
        <InstagramIcon data-testid="instagram-icon" />
        <TwitterIcon data-testid="twitter-icon" />
        <FacebookIcon data-testid="facebook-icon" />
        <EmailIcon data-testid="email-icon" />
      </IconContainer>
      <LinkContainer>
        <StyledLink>Terms of Services</StyledLink>
        <StyledLink>Privacy</StyledLink>
      </LinkContainer>
    </StyledFooter>
  );
}
