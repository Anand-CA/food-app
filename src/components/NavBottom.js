import React from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";
import { useStateValue } from "../StateProvider";
import {
  AiOutlineHome,
  AiOutlineSearch,
  AiOutlineQrcode,
} from "react-icons/ai";
import { CgShoppingCart, CgProfile } from "react-icons/cg";
function NavBottom() {
  const [{ basket }, ] = useStateValue();
  return (
    <Nav>
      <NavLink exact to="/" activeClassName="active">
        <li>
          <AiOutlineHome className="react-icon" />
          <span>Home</span>
        </li>
      </NavLink>
      <li>
        <AiOutlineSearch className="react-icon" />
        <span>Search</span>
      </li>
      <NavLink to="/cart" activeClassName="active">
        <li>
          <CgShoppingCart className="react-icon" />

          <span>
            Cart <p>{basket?.length}</p>{" "}
          </span>
        </li>
      </NavLink>

      <li>
        <AiOutlineQrcode className="react-icon" />
        <span>Scan</span>
      </li>
      <li>
        <CgProfile className="react-icon" />
        <span>Profile</span>
      </li>
    </Nav>
  );
}

export default NavBottom;
const Nav = styled.div`
  background-color: #fff;
  display: flex;
  justify-content: space-evenly;
  position: sticky;
  z-index: 1;
  bottom: 0;
  padding: 10px 0;
  .active {
    .react-icon {
      color: lightcoral;
    }
    span {
      color: lightcoral;
    }
  }
  a {
    text-decoration: none;
    color: black;
  }
  li {
    align-items: center;
    justify-content: center;
    list-style: none;
    display: flex;
    flex-direction: column;
    cursor: pointer;
    .react-icon {
      font-size: 2.3rem;
    }
    p {
      background-color: lightcoral;
      margin-left: 5px;
      padding: 2px 6px;
      color: #fff;
      border-radius: 5px;
    }
    span {
      align-items: center;
      display: flex;
      color: black;
    }
    img {
      height: 34px;
      object-fit: contain;
    }
  }
`;
