import styled from "styled-components";
import { ShoppingBag } from "@styled-icons/heroicons-outline/ShoppingBag";

export const StyledHeader = styled.header`
  position: absolute;
  width: 1440px;
  height: 56px;
  left: 0px;
  top: 0px;
  background: #121212;
  color: #fff;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const H1 = styled.h1`
  margin: 0 auto;
  width: 100%;
  text-align: center;
  font-weight: 300;
`;

export const LinkContainer = styled.div`
  display: flex;
  justify-content: space-evenly;
  width: 15%;
`;

export const Link = styled.a`
  color: #fff;
  text-decoration: none;
`;

export const Icon = styled(ShoppingBag)`
  color: #fff;
  height: 25px;
  width: 15%;
`;
