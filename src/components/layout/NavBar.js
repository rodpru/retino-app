import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { logOutUser } from "../../redux/user";
import { Link } from "react-router-dom";
import styled from "styled-components";
import Wrapper from "../Wrapper";

const NavBarBox = styled.div`
  box-sizing: border-box;
  z-index: 10;
  position: fixed;
  //top: 0;
  padding: 0 20px;
  background-color: rgba(0, 0, 0, 0.5);
  color: ${(props) => props.theme.colors.font_primary};
  display: flex;
  flex-direction: row;
  height: 64px;
  width: 100%;
  max-width: 1500px;
  align-items: center;
  justify-content: space-between;
  a {
    color: inherit;
    text-decoration: none;
  }
`;
const Left = styled.div`
  width: auto;
  display: flex;
  align-items: center;
  img {
    cursor: pointer;
    width: 84px;
  }
`;
const LogoName = styled.p`
  font-size: 20px;
  padding-bottom: 5px;
`;
const Right = styled.div`
  width: auto;
`;
const NavLinks = styled.ul`
  margin: 0;
  padding: 0;
  list-style: none;
  display: flex;
  justify-content: flex-end;
  gap: 15px;
  li {
    cursor: pointer;
  }
`;

function NavBar(props) {
  let { user, isLoggedIn } = useSelector((state) => state.user);
  let dispatch = useDispatch();

  let handleLogOut = () => {
    dispatch(logOutUser());
  };
  return (
    <NavBarBox>
      <Left>
        <Link to="/">
          <img src="/images/eye-logo.png" alt="Logo Image" />
        </Link>
        <Link to="/">
          <LogoName>Adentis - Retinopatia</LogoName>
        </Link>
      </Left>
      <Right>
        <NavLinks>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          {user && isLoggedIn ? (
            <li onClick={handleLogOut}>Log Out </li>
          ) : (
            <li>
              <Link to="/login">Login / Register</Link>
            </li>
          )}
        </NavLinks>
      </Right>
    </NavBarBox>
  );
}

export default NavBar;
