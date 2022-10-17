import React from "react";
import NavBar from "./NavBar";
import styled from "styled-components";
import Wrapper from "../Wrapper";
import Footer from "./Footer";

const Container = styled.div`
  position: relative;
  height: 100%;
`;

const Layout = (props) => {
  return (
    <Container>
      <Wrapper>
        <NavBar />
        {props.children}
        <Footer />
      </Wrapper>
    </Container>
  );
};

export default Layout;
