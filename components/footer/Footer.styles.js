import styled from "styled-components";
import { ShoppingBag } from "@styled-icons/heroicons-outline/ShoppingBag";
// import { InstagramAlt } from "@@styled-icons/boxicons-logos/InstagramAlt";

import { Menu } from "@styled-icons/feather/Menu";
import { Link } from "@styled-icons/heroicons-outline/Link";

export const StyledFooter = styled.footer`
  position: absolute;
  width: 100%;
  height: 56px;
  left: 0px;
  bottom: 0px;
  background: #121212;
  color: #fff;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const LinkContainer = styled.div`
  display: flex;
  justify-content: space-evenly;
  width: 15%;
  @media (max-width: 768px) {
    display: none;
  }
`;

export const StyledLink = styled.a`
  color: #fff;
  text-decoration: none;
  font-size: 0.7em;
`;

export const IconContainer = styled.div`
  display: flex;
`;

export const LinkIcon = styled(Link)`
  height: 15px;
  background: #fff;
  color: #121212;
  border-radius: 50%;
  padding: 1%;
`;
// export const StyledInstaIcon = styled(InstagramAlt)`
//   height: 15px;
//   background: #fff;
//   color: #121212;
//   border-radius: 50%;
//   padding: 1%;
// `;
