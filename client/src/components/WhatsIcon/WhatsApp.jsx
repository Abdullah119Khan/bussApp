import React from "react";
import { BsWhatsapp } from "react-icons/bs";
import styled from "styled-components";

const Container = styled.div`
  position: fixed;
  bottom: 10px;
  left: 10px;
  z-index: 999;
`;
const Wrapper = styled.div`
  width: 70px;
  height: 70px;
  background-color: #25d366;
  color: #fff;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  padding: 16x;
  cursor: pointer;
`;

const Anchor = styled.a`
  text-decoration: none;
  color: inherit;

  &:hover {
    color: inherit;
  }
`;

const WhatsApp = () => {
  return (
    <Container>
      <Wrapper>
        <Anchor href="https://wa.me/+971521220414">
          <BsWhatsapp size={35} />
        </Anchor>
      </Wrapper>
    </Container>
  );
};

export default WhatsApp;
