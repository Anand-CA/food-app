import React from "react";
import styled from "styled-components";
import { useStateValue } from "../StateProvider";
import CartItem from "./CartItem";
import FlipMove from "react-flip-move";

function Cart() {
  const [{ basket }] = useStateValue();

  return (
    <Container>
      {basket?.length === 0 ? (
        <h3>
          Your cart is empty <img src="/images/sad-emoji.png" alt="" />{" "}
        </h3>
      ) : (
        <>
          <h1>Cart</h1>
          <FlipMove>
            {basket?.map((basket) => (
              <CartItem
                key={basket?.id}
                id={basket?.id}
                title={basket?.title}
                image={basket?.image}
                price={basket?.price}
                rating={basket?.rating}
              />
            ))}
          </FlipMove>
    
        </>
      )}
    </Container>
  );
}

export default Cart;

const Container = styled.div`
  min-height: calc(100vh - 80px);
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  padding-top:1rem;
  h3{
      align-items: center;
      display: flex;
      img{
          height:50px;
      }
  }
  h1 {
    text-align: center;
  }
`;
