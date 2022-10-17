import React from "react";
import styled from "styled-components";
import Wrapper from "../components/Wrapper";
import { FaBell, FaUser } from "react-icons/fa";
import { MdDashboard } from "react-icons/md";

const Top = styled.div`
  width: 100%;
  display: flex;
  justify-content: end;
  align-items: center;
  padding: 20px;
  box-sizing: border-box;
`;
const UserBox = styled.div`
  display: flex;
  gap: 15px;
  svg {
    cursor: pointer;
    font-size: 20px;
    color: ${(props) => props.theme.colors.blue_dark};
  }
`;
const NotificationBox = styled.div`
  display: flex;
  position: relative;
  p {
    margin: 0;
    position: absolute;
    left: 65%;
    top: -50%;
    background-color: ${(props) => props.theme.colors.red};
    padding: 2px;
    border-radius: 50%;
    font-size: 10px;
    color: ${(props) => props.theme.colors.white};
  }
`;
const Container = styled.div`
  //padding: 200px 0;
  width: 100%;
  height: 100vh;
  display: flex;
`;

const Left = styled.div`
  width: 20%;
  margin: 0 auto;
  height: 100%;
  background-color: red;
  display: flex;
  flex-direction: column;
`;
const ListedLinks = styled.ul`
  list-style: none;
  width: 60%;
  display: flex;
  flex-direction: column;
  justify-content: center;

  li {
    display: flex;
    align-items: center;
    svg {
      margin-right: 5px;
      path {
        width: 100px;
      }
    }
  }
`;
const ImgBox = styled.div`
  display: flex;
  justify-content: center;
  img {
    width: 100px;
  }
`;
const Right = styled.div`
  width: 80%;
  height: 100%;
  background-color: blue;
`;

function Dashboard(props) {
  return (
    <Wrapper>
      <Top>
        <UserBox>
          <NotificationBox>
            <FaBell />
            <p>2</p>
          </NotificationBox>
          <FaUser />
        </UserBox>
      </Top>
      <Container>
        <Left>
          <ImgBox>
            <img src="/images/eye-logo.png" alt="Retinopatia Logo" />
          </ImgBox>
          <ListedLinks>
            <li>
              <MdDashboard />
              <p>Dashboard</p>
            </li>
            <li>Utilizador</li>
            <li>Produto</li>
          </ListedLinks>
        </Left>
        <Right></Right>
      </Container>
    </Wrapper>
  );
}

export default Dashboard;
