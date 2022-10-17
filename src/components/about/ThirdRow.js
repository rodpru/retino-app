import React from "react";
import styled from "styled-components";

const Container = styled.div`
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
  flex-direction: column;
  padding: 40px;
  align-items: center;
  color: ${(props) => props.theme.colors.font_primary};
  h2 {
    font-size: 36px;
    line-height: 45px;
  }
  ul {
    display: flex;
    flex-direction: column;
    gap: 20px;
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
    width: 300px;
  }
  @media screen and (max-width: 768px) {
    width: 100%;
  }
`;

function ThirdRow(props) {
  return (
    <Container>
      <Left>
        <h2>Como Melhorar</h2>
        <ul>
          <li>
            Cloud/Cluster Computing - Apache Spark, Google Cloud, Amazon Web
            Services
          </li>
          <li>Uso de GPU - Treino mais rápido</li>
          <li>Arquitetura da rede neural mais robusta</li>
          <li>Maiores dimensões de imagens</li>
        </ul>
      </Left>
      <Right>
        <img src="/images/next_steps.png" alt="Ciclo de Treino do Algoritmo" />
      </Right>
    </Container>
  );
}

export default ThirdRow;
