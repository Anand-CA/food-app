import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import styled from "styled-components";
import { db } from "../firebase";
import MenuItem from "./MenuItem";

function Hotel() {
  const hotelId = useParams();
  const [menu, setMenu] = useState([]);
  const [searchTerm, setSearchTerm] = useState("")
  const [hotel, setHotel] = useState({});
  useEffect(() => {
    db.collection("hotel")
      .doc(hotelId.id)
      .collection("menu")
      .onSnapshot((snapshot) => {
        setMenu(
          snapshot.docs.map((menuList) => ({
            id: menuList.id,
            menu: menuList.data(),
          }))
        );
      });
  }, [hotelId.id]);
  useEffect(() => {
    db.collection("hotel")
      .doc(hotelId.id)
      .get()
      .then((snapshot) => setHotel(snapshot.data()));
  }, [hotelId.id]);
  return (
    <Container>
      <Banner>
        <div
          style={{
            height: "38vh",
            background: `url(${hotel?.image}) no-repeat center center / cover `,
          }}
        ></div>
        <Description>
          <h1>{hotel?.name}</h1>
          <Rating>
            {Array(hotel?.rating)
              .fill()
              .map((_, i) => (
                <p>⭐️</p>
              ))}
          </Rating>
        </Description>
      </Banner>
      <TagsContainer>
        <Tag>
          <img
            src="https://www.flaticon.com/svg/vstatic/svg/3313/3313867.svg?token=exp=1620993106~hmac=c2f93750ece854817dc5a4138351964a"
            alt=""
          />
          <span>Directions</span>
        </Tag>
        <Tag>
          <img
            src="https://www.flaticon.com/svg/vstatic/svg/1828/1828970.svg?token=exp=1620993078~hmac=098d095ed350c24e1e8753298ad95c62"
            alt=""
          />
          <span>Add review</span>
        </Tag>
      </TagsContainer>
      <SearchContainer>
        <input type="text" placeholder="Search dishes..." onChange={(e)=>setSearchTerm(e.target.value)}/>
      </SearchContainer>
      <h2>Recommeded</h2>
      
      {menu
        ?.filter((menuList) => {
          if (searchTerm === "") {
            return menuList;
          } else if (
            menuList.menu?.title
              .toLowerCase()
              .includes(searchTerm.toLowerCase())
          ) {
            return menuList;
          }
        })
        .map((menu) => (
          <MenuItem
            key={menu?.id}
            id={menu?.id}
            image={menu.menu?.image}
            title={menu.menu?.title}
            price={menu.menu?.price}
            rating={menu.menu?.rating}
          />
        ))}
    </Container>
  );
}

export default Hotel;

const Container = styled.div`
  background-color: #f5f5f5;
  min-height: calc(100vh - 50px);
  h2 {
    padding: 13px 0 0 15px;
  }
`;
const Banner = styled.div`
  background-color: #fff;
  img {
    width: 100%;
  }
`;
const Description = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 5px 20px;
`;
const Rating = styled.div`
  display: flex;
`;
const TagsContainer = styled.div`
  display: flex;
  padding: 10px 0 0 15px;
`;
const Tag = styled.div`
  display: flex;
  background-color: lightcoral;
  align-items: center;
  width: fit-content;
  padding: 6px 16px;
  margin-right: 10px;
  border-radius: 99px;
  img {
    height: 20px;
    margin-right: 10px;
  }
  span {
    font-size: 18px;
  }
`;
const SearchContainer = styled.div`
    padding:10px 0 0 15px;
  input {
    padding: 9px 16px;
    border:1px solid lightgrey;
    border-radius:6px;
    font-size:15px;
  }
`;
