import React from "react";
import Carrossel from "../carosselTechs/Carrossel";
import styled from "styled-components";
const TecnologiasSection = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  margin-left: auto;
  margin-right: auto;
  margin-top: 8rem;

  .techs-content {
    margin-bottom: 3rem;
    span,
    h2 {
      font-family: "Poppins", sans-serif;
      text-align: center;
    }

    span {
      color: var(--blue-light);
      font-size: 20px;
      font-weight: 600;
      text-transform: uppercase;
      margin-bottom: 1rem;
      display: block;
    }

    h2 {
      font-weight: 500;
      font-size: 36px;
      margin-bottom: 4rem;
    }
  }
  .container {
    margin: 0 auto;
    padding: 0;
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;

    .tecnologias {
      margin-bottom: 20rem;
    }
    .container-carrossel {
      width: 90%;
    }

    .carrosel {
      width: 100%;
      display: flex;
      align-items: center;
      flex-direction: column;
      justify-content: center;
    }
  }
`;
export default function Tecnologias() {
  return (
    <TecnologiasSection className="tecnologias">
      <div className="techs-content">
        <span className="titulo">TECNOLOGIAS</span>
        <h2>Confira abaixo as tecnologias que trabalhamos!</h2>
      </div>
      <div className="container-carrossel">
        <Carrossel />
      </div>
    </TecnologiasSection>
  );
}
