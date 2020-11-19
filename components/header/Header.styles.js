import styled from "styled-components";
import { ShoppingBag } from "@styled-icons/heroicons-outline/ShoppingBag";
import { Menu } from "@styled-icons/feather/Menu";

export const StyledHeader = styled.header`
  position: fixed;
  width: 100%;
  height: 56px;
  left: 0px;
  top: 0px;
  background: #121212;
  color: #fff;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const P = styled.p`
  margin: 0 auto;
  width: 100%;
  text-align: center;
  font-size: 1.75em;
  font-weight: bold;
  letter-spacing: 5px;
`;

export const LinkContainer = styled.div`
  display: flex;
  justify-content: space-evenly;
  width: 15%;
  @media (max-width: 768px) {
    display: none;
  }
`;

export const Link = styled.a`
  color: #fff;
  text-decoration: none;
  font-size: 0.8em;
`;

export const Icon = styled(ShoppingBag)`
  color: #fff;
  height: 25px;
  width: 15%;
`;

export const Hamburger = styled(Menu)`
  display: none;
  @media (max-width: 768px) {
    display: flex;
    color: #fff;
    height: 25px;
    margin-left: 2%;
  }
`;
