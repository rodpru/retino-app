import React from "react";
import styled from "styled-components";

const FooterContainer = styled.div`
  height: 200px;
  //background-color: ${(props) => props.theme.colors.black};
`;
const FooterForm = styled.img`
  transform: rotate(180deg);
  //margin-top: -350px;
  @media screen and (max-width: 768px) {
    margin-top: -300px;
  }
`;
const Inner = styled.div`
  margin-top: -20px;
  padding: 0 20px;
  padding-top: 30px;
  background-color: ${(props) => props.theme.colors.black};
  display: flex;
  justify-content: space-between;
  @media screen and (max-width: 768px) {
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
`;
const Left = styled.div`
  display: flex;
  flex-direction: column;
  width: 20%;
  background-color: ${(props) => props.theme.colors.black};
  padding-bottom: 50px;
  align-items: center;
  text-align: center;
  img {
    width: 100px;
  }
  p {
    width: 80%;
    color: ${(props) => props.theme.colors.font_primary};
    font-size: 20px;
  }
  @media screen and (max-width: 768px) {
    flex-direction: row;
    width: 80%;
    justify-content: center;
    align-items: end;
  }
`;
const Right = styled.div`
  color: ${(props) => props.theme.colors.font_primary};
  display: flex;
  justify-content: center;
  margin: auto 0;
  div {
    flex: 1;
  }
  ul {
    list-style-type: none;
    padding: 0;
    display: flex;
    flex-direction: column;
    gap: 10px;
  }
  h4 {
    text-transform: uppercase;
  }
`;

function Footer(props) {
  return (
    <FooterContainer>
      <FooterForm src="/images/wave_black.svg" alt="BottomForm" />
      <Inner>
        <Left>
          <img src="/images/adentis_logo.svg" alt="Adentis Logo" />
          <p>
            We were born to inspire talents to develop technology, we walk
            together and innovate with you.
          </p>
        </Left>
        <Right>
          <div>
            <h4>Services</h4>
            <ul>
              <li>Strategy</li>
              <li>Research & Development</li>
              <li>Nearshore</li>
            </ul>
          </div>
          <div>
            <h4>Company</h4>
            <ul>
              <li>About Us</li>
              <li>Ambassadors</li>
              <li>News</li>
              <li>Career</li>
              <li>Contact</li>
            </ul>
          </div>
          <div>
            <h4>Policy</h4>
            <ul>
              <li>Privacy Policy</li>
              <li>Quality Policy</li>
              <li>Irregularities Reporting Regulation</li>
            </ul>
          </div>
        </Right>
      </Inner>
    </FooterContainer>
  );
}

export default Footer;
