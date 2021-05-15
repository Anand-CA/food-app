import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import styled from "styled-components";

function CaroselContainer() {
  return (
    <StyledCarousel autoPlay={true}>
      <div>
        <img
          src="https://b.zmtcdn.com/data/pictures/0/18952730/1588ab7f544d4433e6f476a7469e217e.jpg?fit=around|771.75:416.25&crop=771.75:416.25;*,*"
          alt=""
        />
      </div>
      <div>
        <img
          src="https://b.zmtcdn.com/data/pictures/1/66341/611f8610b94ac98f986b43007e662a53.jpg?fit=around|771.75:416.25&crop=771.75:416.25;*,*"
          alt=""
        />
      </div>
      <div>
        <img
          src="https://b.zmtcdn.com/data/pictures/4/902164/1f691adf84d06946c0b1c067eb97f756.jpg?fit=around|771.75:416.25&crop=771.75:416.25;*,*"
          alt=""
        />
      </div>
    </StyledCarousel>
  );
}

export default CaroselContainer;

const StyledCarousel = styled(Carousel)`
  margin: 10px 0;
`;
