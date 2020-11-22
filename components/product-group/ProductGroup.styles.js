import styled from "styled-components";

export const Section = styled.section`
  display: flex;
  flex-flow: column nowrap;
  width: 60%;
  margin: 0 auto;
  h2 {
    margin: 2%;
  }
  p {
    margin: 0 2% 2%;
    cursor: pointer;
  }

  div {
    display: flex;
    width: 100%;
    height: 500px;
    margin: 0 auto;
    flex-flow: row wrap;
    @media (max-width: 768px) {
      height: 100%;
    }
  }
  @media (max-width: 768px) {
    width: 90%;
    h3 {
      margin: 5%;
    }
  }
`;
