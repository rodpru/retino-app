import React from "react";
import styled from "styled-components";
import Slider from "react-slick";
import Wrapper from "../Wrapper";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Container = styled.div`
  position: relative;
  img {
    width: 100vw;
    height: 600px;
  }
  .slick-track {
    overflow-x: hidden;
  }
`;

function HeroSlider(props) {
  var settings = {
    dots: true,
    infinite: true,
    centerMode: false,
    autoplay: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <Wrapper>
      <Container>
        <Slider {...settings}>
          <div>
            <img className="image" src="/images/carousel/rp1.png" alt="1" />
          </div>
          <div>
            <img className="image" src="/images/carousel/rp2.png" alt="2" />
          </div>
          <div>
            <img className="image" src="/images/carousel/rp3.png" alt="3" />
          </div>
          <div>
            <img className="image" src="/images/carousel/rp4.png" alt="4" />
          </div>
        </Slider>
      </Container>
    </Wrapper>
  );
}

export default HeroSlider;
