import { MdPhoneAndroid } from "react-icons/md";
import { AiOutlineMail } from "react-icons/ai";
import { ImLocation } from "react-icons/im";
import React from "react";
import styled from "styled-components";

const Container = styled.div`
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: rgb(35, 34, 34);
  margin: auto;
  color: #fff;

  @media screen and (max-width: 720px) {
    display: flex;
    flex-direction: column;
  } ;
`;
const Left = styled.div`
  flex: 1;
  padding: 20px;

  @media screen and (max-width: 720px) {
    display: flex;
    flex-direction: column;
  } ;
`;
const Logo = styled.h3`
  font-size: 35px;
`;

const Desc = styled.p`
  margin: 20px 0px;
  font-size: 16px;
`;

const Center = styled.div`
  flex: 1;
  padding: 20px;

  @media screen and (max-width: 720px) {
    display: flex;
    flex-direction: column;
    background-color: lightgray;
    color: rgb(35, 34, 34);
  } ;
`;
const Title = styled.h3`
  margin-bottom: 10px;
  font-size: 26px;
  font-weight: bold;
  text-decoration: underline;
`;

const List = styled.ul`
  margin: 0;
  padding: 0;
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  cursor: pointer;
`;

const ListItem = styled.li`
  width: 50%;
  margin-bottom: 10px;

  @media screen and (max-width: 720px) {
    width: 100%;
    margin-left: 10px;
  } ;
`;

const Right = styled.div`
  flex: 1;
  padding: 20px;

  @media screen and (max-width: 720px) {
    margin-right: auto;
  }
`;

const ContactItem = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 15px;

  @media screen and (max-width: 720px) {
    display: flex;
    align-items: left;
  } ;
`;

const Footer = () => {
  return (
    <Container>
      <Left>
        <Logo>RISING SUN</Logo>
        <Desc>
          Our fleet includes minibus, minivan, Toyota Coaster & Hiace for rent
          by the best prices in Dubai and all over UAE. Our bus rentals provide
          a wide range of transport services for rentbus, airport transfer,
          school and labor transportation. If you have any questions contact us
          24/7 Bus Rental Sharjah Bus Rental UAE Bus Rental ??? just contact us!
        </Desc>
      </Left>
      <Center>
        <Title>Usefull Link</Title>
        <List>
          <ListItem>Van rental Dubai</ListItem>
          <ListItem>Coaster bus rent</ListItem>
          <ListItem>Toyota Hiace rent</ListItem>
          <ListItem>Minivan/minibus Dubai rent</ListItem>
          <ListItem>Bus rent transportation company</ListItem>
          <ListItem>Bus rental service Dubai</ListItem>
          <ListItem>Transport company in Aby Dhabi</ListItem>
          <ListItem>Bus Rental Abu Dhabi</ListItem>
          <ListItem>Bus Rental Dubai</ListItem>
        </List>
      </Center>
      <Right>
        <Title>Contact</Title>
        <ContactItem>
          <ImLocation style={{ marginRight: "10px" }} /> Dubai
        </ContactItem>
        <ContactItem>
          <MdPhoneAndroid style={{ marginRight: "10px" }} /> +971521220414
        </ContactItem>
        <ContactItem>
          <AiOutlineMail style={{ marginRight: "10px" }} />{" "}
          risingsuntravels329@gmail.com
        </ContactItem>
        <ContactItem>
          <ImLocation style={{ marginRight: "10px" }} /> Dubai
        </ContactItem>
        <ContactItem>
          <MdPhoneAndroid style={{ marginRight: "10px" }} /> +971521220414
        </ContactItem>
        <ContactItem>
          <AiOutlineMail style={{ marginRight: "10px" }} />{" "}
          risingsuntravels329@gmail.com
        </ContactItem>
      </Right>
    </Container>
  );
};

export default Footer;
