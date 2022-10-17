import React from "react";
import styled from "styled-components";

const Container = styled.div`
  margin: 0;
  max-width: 1500px;
  margin: 0 auto;
`;

const Wrapper = (props) => {
  return <Container>{props.children}</Container>;
};

export default Wrapper;
