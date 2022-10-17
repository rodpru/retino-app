import React from "react";
import styled from "styled-components";

const Container = styled.div`
  width: 100%;
  height: 400px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 20px 0 10px 0;
`;
const Inner = styled.div`
  width: 80%;
  height: 100%;
  background-color: ${(props) => props.theme.colors.blue_darker};
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: ${(props) => props.theme.colors.white};
  border-radius: 10px;
  a {
    cursor: pointer;
  }
  button {
    cursor: pointer;
    background-color: inherit;
    border: 2px solid ${(props) => props.theme.colors.blue_light};
    border-radius: 5px;
    color: ${(props) => props.theme.colors.blue_light};
    font-weight: 900;
    text-transform: uppercase;
    padding: 10px 15px;
    &:hover {
      background-color: ${(props) => props.theme.colors.blue_light};
      color: ${(props) => props.theme.colors.blue_darker};
    }
  }
`;

function Cta(props) {
  return (
    <Container>
      <Inner>
        <img src="/images/adentis_logo.svg" alt="Adentis Logo" />
        <h2>Necessita mais informações?</h2>
        <a href="mailto:rgp@mail.pt">
          <button>Contacto</button>
        </a>
      </Inner>
    </Container>
  );
}

export default Cta;
