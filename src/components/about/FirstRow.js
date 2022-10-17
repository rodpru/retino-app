import React from "react";
import styled from "styled-components";

const Container = styled.div`
  box-sizing: border-box;
  width: 100%;
  margin-top: 100px;
  display: flex;
  @media screen and (max-width: 768px) {
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
`;
const Left = styled.div`
  width: 40%;
  box-sizing: border-box;
  min-height: 400px;
  background-color: ${(props) => props.theme.colors.white};
  display: flex;
  padding: 40px;
  align-items: center;
  h2 {
    color: ${(props) => props.theme.colors.font_primary};
    font-size: 36px;
    line-height: 45px;
  }
  @media screen and (max-width: 768px) {
    width: 80%;
  }
`;
const Right = styled.div`
  box-sizing: border-box;
  width: 60%;
  min-height: 400px;
  padding-top: 40px;
  padding-bottom: 40px;
  background-color: ${(props) => props.theme.colors.black};
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 20px;
  img {
    border-radius: 10px;
  }
  @media screen and (max-width: 768px) {
    width: 100vw;
    img {
      width: 50vw;
    }
  }
`;

function FirstRow(props) {
  return (
    <Container>
      <Left>
        <h2>Ciclo de Treino do Algoritmo de rastreio da Retinopatia</h2>
      </Left>
      <Right>
        <img
          src="/images/ciclo_treino.png"
          alt="Ciclo de Treino do Algoritmo"
        />
      </Right>
    </Container>
  );
}

export default FirstRow;
