import React from "react";
import Slider from "react-slick";
import styled from "styled-components";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export const MainSlider = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    autoplay: true,
    autoplaySpeed: 2000,
  };

  return (
    <>
      <SliderContainer {...settings}>
        <Card>123</Card>
        <Card>456</Card>
        <Card>789</Card>
      </SliderContainer>
    </>
  );
};

const SliderContainer = styled(Slider)`
  height: 100%;
  & div {
    height: 100%;
  }

  .slick-prev {
    left: 25px;
    z-index: 1;
  }
  .slick-next {
    right: 25px;
    z-index: 1;
  }
`;

const Card = styled.div`
  background-color: red;
  width: 80%;
  height: 100%;
`;
