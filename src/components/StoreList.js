import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { db } from "../firebase";
import { useStateValue } from "../StateProvider";
function StoreList() {
  const [hotels, setHotels] = useState([]);
  const [{ searchTerm },] = useStateValue();
  useEffect(() => {
    db.collection("hotel").onSnapshot((snapshot) => {
      setHotels(
        snapshot.docs.map((doc) => ({
          id: doc.id,
          hotel: doc.data(),
        }))
      );
    });
  }, []);
  return (
    <Container>
      <h2>Top rated</h2>
      <List>
        {hotels
          ?.filter((hotel) => {
            if (searchTerm === "") {
              return hotel;
            } else if (
              hotel.hotel?.name.toLowerCase().includes(searchTerm.toLowerCase())
            ) {
              return hotel;
            }
          })
          .map((hotel) => (
            <Wrap key={hotel.id}>
              <Link to={`/hotel/${hotel.id}`}>
                <img src={hotel.hotel?.image} alt="" />
                <Content>
                  <div>
                    <h3>{hotel.hotel?.name}</h3>

                    <Rating>
                      {Array(hotel.hotel?.rating)
                        .fill()
                        .map((_, i) => (
                          <p>⭐️</p>
                        ))}
                    </Rating>
                  </div>
                  <span>50% off</span>
                </Content>
              </Link>
            </Wrap>
          ))}
      </List>
    </Container>
  );
}

export default StoreList;

const Container = styled.div`
  h2 {
    font-size: 28px;
    margin-bottom:13px;
  }
`;
const List = styled.div`
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  grid-gap: 15px;
  a {
    text-decoration: none;
    color: black;
  }
  @media (max-width: 800px) {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }
`;
const Wrap = styled.div`
  border-radius: 10px;
  overflow: hidden;
  cursor: pointer;
  img {
    height: 80%;
    width: 100%;
    object-fit: cover;
    @media (max-width: 800px) {
      height: 70%;
    }
  }
  span {
    font-family: "Courier New", Courier, monospace;
    font-weight: bold;
    background-color: deepskyblue;
    color: #fff;
    font-size: 22px;
    @media (max-width: 800px) {
      font-size: 17px;
    }
  }
`;
const Content = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
const Rating = styled.div`
  display: flex;
`;
