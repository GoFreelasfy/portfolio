import React from "react";
import styled from "styled-components";
import arrowLeft from "../../assets/icons/arrow-left.svg";
import * as Dialog from "@radix-ui/react-dialog";
import ModalServicos from "../modalServicos/ModalServicos";

export default function CardServicos({
  title,
  image,
  description,
  longDescription,
}) {
  const DivCardServicos = styled.div`
    background: var(--white);
    box-shadow: 0px 5px 30px rgba(0, 0, 0, 0.08);
    border-radius: 10px;
    max-width: 300px;
    padding: 2rem;
    display: flex;
    cursor: pointer;
    flex-direction: column;
    gap: 1rem;
    border: 0;
    transition: 0.2s all ease-in-out;

    &:hover {
      transform: scale(1.1);

      span {
        color: var(--orange);
      }

      .arrow-left > img {
        left: 0;
      }
    }

    h3 {
      font-family: "Poppins", sans-serif;
      font-weight: 500;
      color: var(--orange);
      font-size: 18px;
    }
    p {
      font-family: "Montserrat", sans-serif;
      color: #787878;
      font-size: 14px;
    }
    span {
      font-family: "Poppins", sans-serif;
      text-transform: uppercase;
      font-weight: 700;
      font-size: 10px;
      transition: 0.2s all ease-in-out;
    }

    .card-footer {
      display: flex;
      justify-content: space-between;

      .arrow-left {
        display: flex;
        align-items: center;
        position: relative;

        & > img {
          position: absolute;
          right: 5px;
        }
        &::after {
          content: "";
          display: inline-block;
          background: var(--orange-light);
          width: 10px;
          height: 10px;
          border-radius: 50%;
        }
      }
    }
  `;
  return (
    <Dialog.Root>
      <Dialog.Trigger asChild>
        <DivCardServicos>
          <h3>{title}</h3>
          <p>{description}</p>
          <div className="card-footer">
            <span>Veja mais</span>
            <div className="arrow-left">
              <img src={arrowLeft} alt="Icone de seta para esquerda" />
            </div>
          </div>
        </DivCardServicos>
      </Dialog.Trigger>
      <ModalServicos
        title={title}
        image={image}
        description={description}
        longDescription={longDescription}
      />
    </Dialog.Root>
  );
}
