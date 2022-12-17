import React from "react";
import styled from "styled-components";
import { BsWhatsapp } from "react-icons/bs";
const ButtonWhatsApp = styled.button`
  position: fixed;
  right: 2rem;
  bottom: 4rem;
  background-color: #00a884;
  color: var(--white);
  border: 0;
  outline: none;
  padding: 1rem;
  border-radius: 50%;
  transition: 0.3 all ease-in-out;

  &:hover {
    background-color: #00cea2;
  }
`;
export default function WhatsappButton() {
  return (
    <ButtonWhatsApp>
      <a href="https://wa.me/+5511972266510" target="_blank">
        <BsWhatsapp size={"2rem"} color="#ffffff" />
      </a>
    </ButtonWhatsApp>
  );
}
