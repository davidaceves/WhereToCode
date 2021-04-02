import React from "react";
import { useRef } from "react";

import styled from "styled-components";

const SearchBar = (props) => {
  const searchButton = useRef(null);

  const addEventListener = () => {
    searchButton.current.addEventListener("click", props.mapChange);
  };

  return (
    <Container>
      <InputField
        id="locationType"
        placeholder="What are you looking for...ex: cafe"
        onChange={props.onChange}
        value={props.query}
      />
      <InputField
        id="autocomplete"
        placeholder="Enter location..."
        onFocus={props.onFocus}
      />
      <Button ref={searchButton} onClick={addEventListener}>
        Search
      </Button>
    </Container>
  );
};

export default SearchBar;

// Not sure what I was doing here...
// props.locationLen !== 0 ? 49vw :

const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const InputField = styled.input`
  position: relative;
  border: 1px solid black;
  borderbottom: 1px solid black;
  width: 50%;
  height: 30px;
  margin: 2%;
  fontsize: 20px;
`;

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
