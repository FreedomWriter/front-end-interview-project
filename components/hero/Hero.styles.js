import styled from "styled-components";

export const HeroSection = styled.section`
  width: 70%;
  margin: 7.5% auto;
  display: flex;
  justify-content: center;

  h1 {
    font-size: 1.75rem;
  }

  @media (max-width: 768px) {
    flex-flow: column nowrap;
    width: 100%;
    margin: 56px 0 7.5%;
  }
`;

export const HeroImage = styled.img`
  max-width: 100%;
`;

export const HeroText = styled.div`
  max-width: 100%;
  padding: 5%;
`;
