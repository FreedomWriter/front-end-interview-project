import styled from "styled-components";

export const Article = styled.article`
  height: 126px;
  width: 168px;
  left: 0px;
  top: 0px;
  border-radius: 0px;
  display: flex;
  margin: 2%;
  flex-flow: column nowrap;

  img {
    /* width: 100%; */
    height: 126px;
    width: 168px;
    left: 0px;
    top: 0px;
    border-radius: 0px;
  }

  div {
    font-style: normal;
    font-weight: normal;
    font-size: 14px;
    line-height: 20px;
    color: #121212;
  }

  p {
    color: #6d7173;
    font-size: 14px;
    font-style: normal;
    font-weight: 400;
    line-height: 20px;
    letter-spacing: 0px;
    text-align: left;
  }
  @media (max-width: 768px) {
    height: 100%;
    width: 45%;
  }
`;
