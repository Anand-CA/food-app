import React, { forwardRef } from "react";
import styled from "styled-components";
import { useStateValue } from "../StateProvider";

const CartItem = forwardRef(({ id, title, image, price, rating },ref)=> {
  const [{  }, dispatch] = useStateValue();
  const removeFromBasket = () => {
    //remove item from basket
    dispatch({
      type: "REMOVE_FROM_BASKET",
      id: id,
    });
  };
  return (
    <Container ref={ref} key={id}>
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
      <button onClick={removeFromBasket}>Remove</button>
    </Container>
  );
})

export default CartItem;

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  padding: 20px;
  img {
    margin-right: 10px;
    height: 100px;
  }
  button {
    padding: 7px 14px;
    background-color: lightcoral;
    color: #fff;
    font-weight: bold;
    border: 1px solid lightgrey;
  }
`;
const Info = styled.div`
  flex: 1;
`;
const Rating = styled.div`
  display: flex;
`;
