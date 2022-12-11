import React from "react";
import * as Dialog from "@radix-ui/react-dialog";
import styled from "styled-components";
import { IoMdClose } from "react-icons/io";

// const DivModalServicos = styled.div``;

const Overlay = styled(Dialog.Overlay)`
  position: fixed;
  width: 100vw;
  height: 100vh;
  padding: 1rem;
  z-index: 2;
  inset: 0;
  background: rgba(0, 0, 0, 0.75);
`;
const Content = styled(Dialog.Content)`
  min-width: 32rem;
  max-width: 32rem;
  border-radius: 6px;
  padding: 2.5rem 3rem;
  background: var(--white);
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 2;
  .title,
  .description {
    font-family: "Poppins", sans-serif;
    font-weight: 500;
  }
  .title {
    color: var(--orange);
    font-size: 32px;
    margin-bottom: 2rem;
  }
  .servico-img {
    border-radius: 10px;
    max-width: 300px;
    margin-left: auto;
    margin-right: auto;
    margin-bottom: 1rem;
    img {
      width:100%;
      height: 100%;
    }
  }
  .description {
    color: var(--gray);
    font-size: 14px;
  }

  @media (max-width: 768px) {
    min-width: 24rem;
    .title {
      font-size: 24px;
    }
    .servico-img {
      width: 150px;
      height: 150px;
    }
  }

  @media (max-width: 425px) {
    min-width: 18rem;
  }
`;
const CloseButton = styled(Dialog.Close)`
  position: absolute;
  background: transparent;
  border: 0;
  top: 1.5rem;
  right: 1.5rem;
  line-height: 0;
  cursor: pointer;
`;
export default function ModalServicos({
  title,
  image,
  description,
  longDescription,
}) {
  return (
    <Dialog.Portal>
      <Overlay />
      <Content>
        <Dialog.Title className="title">{title}</Dialog.Title>
        <div className="servico-img">
          <img src={image} alt="Imagem do serviço selecionado" />
        </div>
        <CloseButton>
          <IoMdClose size={24} />
        </CloseButton>
        <Dialog.Description className="description">
          {longDescription}
        </Dialog.Description>
      </Content>
    </Dialog.Portal>
  );
}
