import React from "react";
import styled from "styled-components";
import Card from "../common/Card";

const Container = styled.div`
  padding: 20px;
  background-color: ${(props) => props.theme.colors.black};
  height: 600px;
  color: white;
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  align-items: center;
  @media screen and (max-width: 768px) {
    flex-direction: column;
    height: unset;
    gap: 20px;
    padding: 50px 0;
  }
`;
function CardList(props) {
  return (
    <Container>
      <Card
        titulo={"Retinopatia - Causas"}
        description={
          "A retinopatia diabética ocorre quando, em decorrência da diabetes, os vasos sanguíneos presentes na retina sofrem alterações, que podem prejudicar a visão do paciente. Este tipo de retinopatia é o mais comum e uma das principais causas de cegueira entre jovens e adultos hoje."
        }
      />
      <Card
        titulo={"Retinopatia - Sintomas"}
        description={
          "A visão turva é um dos sintomas de retinopatia diabética mais frequentes e ocorre, habitualmente, na fase proliferativa da doença, quando a mácula possui edema e quando os neo-vasos se rompem e sangram para o vítreo."
        }
      />
      <Card
        titulo={"Retinopatia - Tratamentos"}
        description={
          "Durante os primeiros estadios da retinopatia diabética, não se verifica a necessidade de efetuar, normalmente, nenhum tratamento. Um dos tratamentos disponíveis na retinopatia diabética é o laser árgon ou até ser necessaria efetuar cirurgia (vitrectomia)."
        }
      />
    </Container>
  );
}

export default CardList;
