import React from "react";
import { useRef } from "react";

import styled, { css } from "styled-components";

const SearchBar = (props) => {
  const searchButton = useRef(null);

  const addEventListener = () => {
    searchButton.current.addEventListener("click", props.mapChange);
  };

  return (
    <Container>
      <FormGroup>
        <FormInputContainer>
          <InputField
            id="place"
            placeholder="Place"
            name="place"
            onChange={props.onChange}
            value={props.query}
            tabIndex="0"
          />
          <FormLabel for="place">Place</FormLabel>
        </FormInputContainer>
        <FormInputContainer>
          <InputFieldLocation
            id="locationAutoComplete"
            placeholder="Location"
            name="locationAutoComplete"
            tabIndex="1"
          />
          <FormLabelLocation for="locationAutoComplete">
            Location
          </FormLabelLocation>
        </FormInputContainer>
      </FormGroup>
      <Button ref={searchButton} onClick={addEventListener}>
        Search
      </Button>
    </Container>
  );
};

// #TODO Button is taking two clicks to work

export default SearchBar;

// Not sure what I was doing here...
// props.locationLen !== 0 ? 49vw :

const Container = styled.div`
  font-family: Poppins, sans-serif;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 25%;
  font-size: 1.5rem;
`;

const FormInputContainer = styled.div`
  margin-bottom: 50px;
`;

const FormGroup = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
  padding: 15px 0 0;
  margin-top: 10px;
  width: 50%;
`;

const FormLabel = styled.label`
  position: absolute;
  top: 0;
  display: block;
  transition: 0.2s;
  font-size: 1rem;
  color: gray;
`;

const FormLabelLocation = styled.label`
  position: absolute;
  top: 88px;
  display: block;
  transition: 0.2s;
  font-size: 1rem;
  color: gray;
`;

const InputField = styled.input`
  font-family: inherit;
  width: 100%;
  border: 0;
  border-bottom: 2px solid gray;
  outline: 0;
  font-size: 1rem;
  padding: 7px 0;
  background: transparent;
  transition: border-color 0.2s;

  &::placeholder {
    color: transparent;
  }

  &:placeholder-shown ~ ${FormLabel} {
    font-size: 1.3rem;
    cursor: text;
    top: 27px;
  }

  :focus {
    ~ ${FormLabel} {
      position: absolute;
      top: 0;
      display: block;
      transition: 0.2s;
      font-size: 1rem;
      color: black;
      font-weight: 700;
    }
  }
`;

const InputFieldLocation = styled.input`
  font-family: inherit;
  width: 100%;
  border: 0;
  border-bottom: 2px solid gray;
  outline: 0;
  font-size: 1rem;
  padding: 7px 0;
  background: transparent;
  transition: border-color 0.2s;
  -webkit-user-select: all;
  user-select: all;

  &::placeholder {
    color: transparent;
  }

  &:placeholder-shown ~ ${FormLabelLocation} {
    font-size: 1.3rem;
    cursor: text;
    top: 115px;
  }

  :focus {
    ~ ${FormLabelLocation} {
      position: absolute;
      top: 88px;
      display: block;
      transition: 0.2s;
      font-size: 1rem;
      color: black;
      font-weight: 700;
    }
  }
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
