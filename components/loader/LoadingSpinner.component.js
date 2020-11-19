import React from "react";
import styled from "styled-components";
import Loader from "react-loader-spinner";

const SpinnerContainer = styled.div`
  display: flex;
  justify-content: center;
  align-content: center;
  height: 100%;
  margin: 15% auto;
`;

export default function LoadingSpinner() {
  return (
    <SpinnerContainer>
      <Loader
        type="TailSpin"
        color="#121212"
        height="50%"
        width="50%"
        timeout={30000} //3 secs
      />
    </SpinnerContainer>
  );
}
