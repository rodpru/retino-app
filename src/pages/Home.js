import React from "react";
import Layout from "../components/layout/Layout";
import HeroVideo from "../components/home/Hero";
import CardList from "../components/home/CardList";
import ThirdRow from "../components/home/ThirdRow";

function Home(props) {
  return (
    <Layout>
      <HeroVideo />
      <CardList />
      <ThirdRow />
    </Layout>
  );
}

export default Home;
