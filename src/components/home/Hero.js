import React from "react";
import styled from "styled-components";
import Wrapper from "../Wrapper";

const Container = styled.div`
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: -1;
`;
const InnerWrapper = styled.div`
  display: flex;
  width: 100%;
  height: 600px;
  position: relative;
  background-image: url("/images/robotic_eye.jpg");
  background-size: cover;
  background-repeat: no-repeat;
`;
const TextContainer = styled.div`
  width: 40%;
  color: ${(props) => props.theme.colors.font_primary};
  position: absolute;
  right: 0;
  top: 50%;
  @media screen and (max-width: 1024px) {
    top: 50%;
  }
  @media screen and (max-width: 768px) {
    right: 50%;
    top: 10%;
  }

  h1 {
    font-size: 50px;
    line-height: 60px;
    font-style: italic;
  }
  p {
    text-align: end;
    width: 80%;
    font-size: 20px;
  }
`;

function Hero(props) {
  return (
    <Container>
      <Wrapper>
        <InnerWrapper>
          <TextContainer>
            <h1>Algoritmo de previsão usando deep learning</h1>
            <p>Powered by Adentis</p>
          </TextContainer>
        </InnerWrapper>
      </Wrapper>
    </Container>
  );
}

export default Hero;
