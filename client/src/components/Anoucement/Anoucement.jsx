import React from "react";
import styled from "styled-components";
import { AiFillPhone, AiTwotoneMail } from "react-icons/ai";

const Container = styled.div`
  width: 100%;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: teal;
  color: #fff;

  @media screen and (max-width: 768px) {
    display: flex;
    align-items: center;
    justify-content: space-around;
    flex-direction: column;
    padding: 10px;
  }
`;
const Contact = styled.span`
  display: flex;
  align-items: center;
  gap: 6px;
  margin-left: 20px;
`;

const Anoucement = () => {
  return (
    <Container>
      <Contact>
        <AiFillPhone size={20} /> +923449677369
      </Contact>
      <Contact>
        <AiTwotoneMail size={20} /> abdullah.khan@genesisengr.com
      </Contact>
    </Container>
  );
};

export default Anoucement;
