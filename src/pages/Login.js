import React, { useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import Wrapper from "../components/Wrapper";
import Layout from "../components/layout/Layout";
import { useDispatch } from "react-redux";
import { logInUser } from "../redux/user";

const Container = styled.div`
  width: 100%;
  height: 100vh;
  background-color: ${(props) => props.theme.colors.black};
  display: flex;
  justify-content: center;
  align-items: center;
`;
const Inner = styled.div`
  width: 600px;
  height: 400px;
  background-color: white;
  border: 4px solid ${(props) => props.theme.colors.blue};
  border-radius: 20px;
  display: flex;
  flex-direction: row;
  @media screen and (max-width: 768px) {
    width: 80%;
    height: unset;
    flex-direction: column;
  }
`;
const Top = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  min-width: 300px;
`;
const LogoImg = styled.img`
  width: 100px;
`;
const FormContainer = styled.div`
  padding-top: 20px;
  display: flex;
  flex-direction: column;
  form {
    display: flex;
    flex-direction: column;
    gap: 10px;
    padding: 20px;

    input {
      //border: 1px solid ${(props) => props.theme.colors.blue_dark};
      //border-radius: 5px;
      border: none;
      margin-bottom: 20px;
      border-bottom: 1px solid ${(props) => props.theme.colors.blue};
      box-shadow: 10px 5px 5px ${(props) => props.theme.colors.blue_lighter};
    }
  }
`;
const Register = styled.p`
  align-self: center;
  font-size: 8px;
  a {
    cursor: pointer;
  }
`;
const RightBox = styled.div`
  background-image: url("/images/login_eye.jpg");
  background-size: cover;
  min-width: 300px;
  flex-grow: 1;
  border-radius: 20px;
  @media screen and (max-width: 768px) {
    display: none;
  }
`;
const Button = styled.button`
  margin-top: 40px;
  background-color: ${(props) => props.theme.colors.black};
  color: ${(props) => props.theme.colors.font_primary};
  border: 1px solid ${(props) => props.theme.colors.font_primary};
  border-radius: 5px;
  &:hover {
    color: ${(props) => props.theme.colors.black};
    background-color: ${(props) => props.theme.colors.font_primary};
    border: 1px solid ${(props) => props.theme.colors.black};
  }
`;

function Login(props) {
  const [user, setUser] = useState({
    email: "",
    password: "",
  });
  const dispatch = useDispatch();

  let handleChange = (e) => {
    let { name, value } = e.target;
    setUser((prevState) => {
      return {
        ...prevState,
        [name]: value,
      };
    });
  };

  const { email, password } = user;

  let handleSubmit = (e) => {
    e.preventDefault();
    if (!email || !password) {
      alert("Por favor preencha todos os campos");
      return;
    }
    dispatch(logInUser(user));
    setUser({
      email: "",
      password: "",
    });
  };

  return (
    <Wrapper>
      <Layout>
        <Container>
          <Inner>
            <Top>
              <LogoImg src="/images/eye-logo.png" alt="logo" />
              <FormContainer>
                <form>
                  <input
                    type="email"
                    name="email"
                    placeholder="Email"
                    value={email}
                    onChange={handleChange}
                  />
                  <input
                    type="password"
                    name="password"
                    value={password}
                    placeholder="Password"
                    onChange={handleChange}
                  />
                  <Button type="submit" onClick={handleSubmit}>
                    Entrar
                  </Button>
                </form>
                <Register>
                  Ainda não tem conta? <Link to="/register">Registar</Link>
                </Register>
              </FormContainer>
            </Top>
            <RightBox></RightBox>
          </Inner>
        </Container>
      </Layout>
    </Wrapper>
  );
}

export default Login;
