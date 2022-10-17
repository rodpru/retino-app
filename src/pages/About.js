import React from "react";
import styled from "styled-components";
import Layout from "../components/layout/Layout";
import Wrapper from "../components/Wrapper";
import HeroSlider from "../components/about/HeroSlider";
import FirstRow from "../components/about/FirstRow";
import SecondRow from "../components/about/SecondRow";
import ThirdRow from "../components/about/ThirdRow";
import Cta from "../components/about/Cta";

const Container = styled.div`
  height: 100%;
  margin-bottom: 200px;
  display: flex;
  flex-direction: column;
  gap: 40px;
`;

function About(props) {
  return (
    <Wrapper>
      <Layout>
        <HeroSlider />
        <Container>
          <FirstRow />
          <SecondRow />
          <ThirdRow />
          <Cta />
        </Container>
      </Layout>
    </Wrapper>
  );
}

export default About;
