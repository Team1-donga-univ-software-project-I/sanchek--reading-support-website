import React from "react";
import Slider from "react-slick";
import styled from "styled-components";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Link } from "react-router-dom";

export const MainSlider = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    autoplay: true,
    autoplaySpeed: 7000,
  };

  return (
    <>
      <SliderContainer {...settings}>
        <Card>
          <CardContent>
            <CardLink to="#">123</CardLink>
          </CardContent>
        </Card>
        <Card>
          <CardContent>
            <CardLink to="#">456</CardLink>
          </CardContent>
        </Card>
        <Card>
          <CardContent>
            <CardLink to="#">789</CardLink>
          </CardContent>
        </Card>
      </SliderContainer>
    </>
  );
};

const SliderContainer = styled(Slider)`
  height: 100%;
  div {
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
  background-color: #efd345;
`;

const CardContent = styled.span`
  background-color: #ffef82;
  width: 50%;
  height: 90%;
  margin: auto;
  margin-top: 15px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 30px;
`;

const CardLink = styled(Link)`
  width: 100%;
  height: 100%;
  text-decoration: none;
  display: flex;
  flex-direction: column;
  align-items: center;
`;
