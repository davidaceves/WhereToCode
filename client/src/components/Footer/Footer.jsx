import React from "react";
import styled from "styled-components";

const Footer = () => {
  return (
    <FooterContainer>
      <h3>
        <i class="fas fa-wifi" style={{ color: "gold", margin: "0 5px" }}></i>{" "}
        HiveStack
      </h3>
    </FooterContainer>
  );
};

export default Footer;

const FooterContainer = styled.div`
  border: 1px solid #f6f6f6;
  background: #f6f6f6;
  text-align: right;
  h3 {
    padding-right: 11px;
    font-size: 17px;
  }
`;
