import React from "react";
import styled from "styled-components";

const Container = styled.div`
  width: 100%;
  display: flex;
  @media screen and (max-width: 768px) {
    flex-direction: column-reverse;
    justify-content: center;
    align-items: center;
  }
`;
const Left = styled.div`
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
    transform: rotate(90deg);
    width: 250px;
  }
  @media screen and (max-width: 768px) {
    width: 100%;
  }
`;
const Right = styled.div`
  width: 40%;
  box-sizing: border-box;
  min-height: 400px;
  background-color: ${(props) => props.theme.colors.white};
  display: flex;
  flex-direction: column;
  padding: 40px;
  align-items: center;
  justify-content: center;
  color: ${(props) => props.theme.colors.font_primary};
  h2 {
    font-size: 36px;
    line-height: 45px;
  }
  h4 {
    text-align: center;
    font-size: 22px;
    line-height: 35px;
  }
  @media screen and (max-width: 768px) {
    width: 80%;
  }
`;
const ImgBox = styled.div`
  background-color: ${(props) => props.theme.colors.white};
  padding: 80px 200px;
  border-radius: 10px;
  @media screen and (max-width: 768px) {
    padding: 40px 150px;
  }
`;

function SecondRow(props) {
  return (
    <Container>
      <Left>
        <ImgBox>
          <img src="/images/data_augmentation.png" alt="Data Augmentation" />
        </ImgBox>
      </Left>
      <Right>
        <h2>Data Augmentation</h2>
        <h4>Expansão de Dataset</h4>
        <ul>
          <li>Reflexão vertical</li>
          <li>Reflexão horizontal</li>
          <li>Rotação 90 graus</li>
        </ul>
        <h4 style={{ fontStyle: "italic", textDecoration: "underline" }}>
          Imagem gerada mantém a sua categoria original
        </h4>
      </Right>
    </Container>
  );
}

export default SecondRow;
