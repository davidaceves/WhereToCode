import React from "react";
import { useRef } from "react";

import styled from "styled-components";


const SearchBar = (props) => {
    const searchButton = useRef(null)

    const addEventListener = () => {
        searchButton.current.addEventListener("click", props.mapChange);
    }

    return (
    <div
        style={{
          display: "flex",
          flexDirection: "column",
          padding: "5% 0 0 0",
          width: props.locationLen !== 0 ? "49vw" : "100%",
          alignItems: "center"
        }}
      >
        <input
          id="locationType"
          style={{ width: "25%" }}
          placeholder="What are you looking for...ex: cafe"
          style={{
            border: "none",
            borderBottom: "1px solid black",
            width: "50%",
            marginBottom: "20px",
            background: "transparent",
            fontSize: "20px"
          }}
          onChange={props.onChange}
          value={props.query}
        />
        <input
          id="autocomplete"
          style={{ width: "99.6%", height: "30px" }}
          placeholder="Enter location..."
          style={{
            border: "none",
            borderBottom: "1px solid black",
            width: "50%",
            marginBottom: "20px",
            background: "transparent",
            fontSize: "20px"
          }}
          onFocus={props.onFocus}
        />
        <Button ref={ searchButton } onClick={ addEventListener }>Search</Button>
        </div>
)
}

export default SearchBar;

const Button = styled.button`
  align-self: center;
  border-radius: 10px;
  border: 2px solid gold;
  font-size: 18px;
  cursor: pointer;
  width: 200px;
  padding: 10px 56px;
  margin: 35px 0 10px;
  background: white;
  &:hover {
    box-shadow: 0px 5px 5px 0px rgba(176, 170, 176, 1);
    transform: translateY(-2px);
    transition: 0.2s;
  }
`;