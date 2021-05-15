import React from "react";
import styled from "styled-components";
import CaroselContainer from "./CaroselContainer";
import NavTop from "./NavTop";
import StoreList from "./StoreList";

function Home() {
  return (
    <Container>
      <NavTop />
      <CaroselContainer />
      <StoreList />
    </Container>
  );
}

export default Home;

const Container = styled.div`
  background-color: #f5f5f5;
  padding: 0 10px;
  min-height: calc(100vh - 50px);
  &::-webkit-scrollbar {
    display: none;
  }
`;
