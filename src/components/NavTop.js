import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { useStateValue } from "../StateProvider";
import { IoLocationSharp } from "react-icons/io5";
function NavTop() {
  const [{}, dispatch] = useStateValue();
  const [search, setSearch] = useState("");
  const [location, setLocation] = useState("Current location");

  useEffect(() => {
    dispatch({
      type: "SET_SEARCHTERM",
      searchTerm: search,
    });
  }, [search]);
  return (
    <Nav>
      <IoLocationSharp className="react-icon" />
      <p>{location}</p>
      <input
        type="text"
        onChange={(e) => setSearch(e.target.value)}
        value={search}
        placeholder="Search hotels..."
      />
    </Nav>
  );
}

export default NavTop;
const Nav = styled.div`
  display: flex;
  align-items: center;
  .react-icon {
    color:#ec2e54;
    font-size:3rem;
  }
  img {
    height: 50px;
  }
  p {
    flex: 1;
  }
  input {
    margin-right: 15px;
    padding: 6px 17px;
  }
`;
