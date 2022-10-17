import React from "react";
import styled from "styled-components";

const Container = styled.div`
  height: 300px;
  width: 300px;
  border: 2px solid ${(props) => props.theme.colors.blue_light};
  border-radius: 20px;
  perspective: 500px;
`;
const Content = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  box-shadow: 0 0 15px rgba(0, 0, 0, 0.1);
  transition: transform 0.8s;
  transform-style: preserve-3d;
  &:hover {
    transform: rotateX(180deg);
    transition: transform 0.8s;
  }
`;
const InnerFront = styled.div`
  position: absolute;
  height: 100%;
  width: 100%;
  background: ${(props) => props.theme.colors.blue_dark};
  color: ${(props) => props.theme.colors.blue_light};
  text-align: center;
  border-radius: 20px;
  backface-visibility: hidden;
`;
const InnerBack = styled(InnerFront)`
  background: #03446a;
  color: white;
  transform: rotateX(180deg);
`;
const InnerContent = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;

  h4 {
    margin: 0;
    width: fit-content;
    font-size: 20px;
  }
  p {
    font-size: 20px;
    font-style: italic;
  }
`;

function Card({ titulo, description }) {
  return (
    <Container>
      <Content>
        <InnerFront>
          <InnerContent>
            <h4>{titulo}</h4>
          </InnerContent>
        </InnerFront>
        <InnerBack>
          <InnerContent>
            <p>{description}</p>
          </InnerContent>
        </InnerBack>
      </Content>
    </Container>
  );
}

export default Card;
