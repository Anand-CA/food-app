import React from "react";
import styled from "styled-components";
import { useStateValue } from "../StateProvider";

function MenuItem({ id, image, title, price, rating }) {
  const [{}, dispatch] = useStateValue();
  const addToBasket = () => {
    dispatch({
      type: "ADD_TO_BASKET",
      item: {
        id: id,
        title: title,
        price: price,
        rating: rating,
        image: image,
      },
    });
  };
  return (
    <Container>
      <img src={image} alt="" />
      <Info>
        <h3>{title}</h3>
        <Rating>
          {Array(rating)
            .fill()
            .map((_, i) => (
              <p>⭐️</p>
            ))}
        </Rating>

        <p>${price}</p>
        <p>Cheese, mushroom, paneer</p>
      </Info>
      <button onClick={addToBasket}>
        <span >Add</span>
        <img
          src="https://www.flaticon.com/svg/vstatic/svg/1828/1828921.svg?token=exp=1620984223~hmac=664e6d295bd539de439f816d0952479a"
          alt=""
        />
      </button>
    </Container>
  );
}

export default MenuItem;

const Container = styled.div`
  display: flex;
  margin: 18px 0;
  padding: 0 15px;
  align-items: flex-start;
  img {
    height: 100px;
    margin-right: 13px;
    border-radius: 8px;
  }
  button {
    display: flex;
    align-items: center;
    padding: 4px 4px 4px 10px;
    border: 1px solid lightgrey;
    border-radius: 99px;
    justify-content: space-between;
    cursor: pointer;
    img {
      height: 15px;
      margin-left: 3px;
      margin-right: 4px;
    }
  }
`;
const Info = styled.div`
  flex: 1;
`;
const Rating = styled.div`
  display: flex;
`;
