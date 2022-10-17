import React from "react";
import styled from "styled-components";

const Container = styled.div`
  background-color: ${(props) => props.theme.colors.blue_dark};
`;
const InnerBox = styled.div`
  display: flex;
  flex-direction: row;
  padding: 15px;
  margin-top: 50px;
  padding-bottom: 300px;
  gap: 40px;
  @media screen and (max-width: 768px) {
    flex-direction: column;
    align-items: center;
  }
`;
const Left = styled.div`
  width: 50%;
  border: 3px solid ${(props) => props.theme.colors.black};
  border-radius: 30px;
  padding: 15px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  @media screen and (max-width: 768px) {
    width: 80%;
  }
`;
const Text = styled.p`
  color: ${(props) => props.theme.colors.blue_lighter};
`;
const Title = styled.h2`
  color: ${(props) => props.theme.colors.blue_darker};
`;

const Right = styled.div`
  width: 50%;

  video {
    border-radius: 30px;
    width: 100%;
  }
  @media screen and (max-width: 768px) {
    width: 80%;
  }
`;
const TopImg = styled.img`
  margin-top: -290px;
`;

function ThirdRow(props) {
  return (
    <Container>
      <TopImg src="/images/wave.svg" alt="TopForm" />
      <InnerBox>
        <Left>
          <Title>O Algoritmo</Title>
          <Text>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </Text>
        </Left>
        <Right>
          <video src="/video/eyeball.mp4" autoPlay loop muted />
        </Right>
      </InnerBox>
    </Container>
  );
}

export default ThirdRow;
