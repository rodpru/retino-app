import React, { useState } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import Wrapper from "../components/Wrapper";
import Layout from "../components/layout/Layout";
import { useDispatch, useSelector } from "react-redux";
import { setUser } from "../redux/user";

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
      border: none;
      margin-bottom: 10px;
      border-bottom: 1px solid ${(props) => props.theme.colors.blue};
      box-shadow: 10px 5px 5px ${(props) => props.theme.colors.blue_lighter};
    }
  }
`;
const LinkToLogin = styled.p`
  align-self: center;
  font-size: 8px;
  a {
    cursor: pointer;
  }
`;

const RightBox = styled.div`
  background-image: url("/images/register_pic.jpg");
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

function Register(props) {
  const { user } = useSelector((state) => state.user);
  const dispatch = useDispatch();
  const [newUser, setNewUser] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });
  const { name, email, password, confirmPassword } = newUser;

  let handleChange = (e) => {
    let { name, value } = e.target;
    setNewUser((prevState) => {
      return {
        ...prevState,
        [name]: value,
      };
    });
  };

  let handleSubmit = (e) => {
    e.preventDefault();
    if (!name || !email || !password || !confirmPassword) {
      alert("Por favor preencha todos os campos");
      return;
    }
    if (password !== confirmPassword) {
      alert("As passwords não coincidem");
      return;
    }
    let userToSend = { name, email, password };

    dispatch(setUser(userToSend));

    setNewUser({
      name: "",
      email: "",
      password: "",
      confirmPassword: "",
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
                  <div style={{ display: "flex", flexDirection: "column" }}>
                    <input
                      type="text"
                      name="name"
                      value={name}
                      placeholder="Nome"
                      onChange={handleChange}
                    />
                  </div>
                  <div style={{ display: "flex", flexDirection: "column" }}>
                    <input
                      type="email"
                      name="email"
                      value={email}
                      placeholder="Email"
                      onChange={handleChange}
                    />
                  </div>

                  <div style={{ display: "flex", flexDirection: "column" }}>
                    <input
                      type="password"
                      name="password"
                      value={password}
                      placeholder="Password"
                      onChange={handleChange}
                    />
                  </div>

                  <div style={{ display: "flex", flexDirection: "column" }}>
                    <input
                      type="password"
                      name="confirmPassword"
                      value={confirmPassword}
                      placeholder="Confirme a password"
                      onChange={handleChange}
                    />
                  </div>

                  <Button type="submit" onClick={handleSubmit}>
                    Registar
                  </Button>
                </form>
                <LinkToLogin>
                  Já possui conta? <Link to="/login">Login</Link>
                </LinkToLogin>
              </FormContainer>
            </Top>
            <RightBox></RightBox>
          </Inner>
        </Container>
      </Layout>
    </Wrapper>
  );
}

export default Register;
