import React from "react";
import styled from "styled-components";

import CardServicos from "../cardServicos/CardServicos";
import { cardServicosData } from "../cardServicos/CardServicosData";

export default function Servicos() {
  const DivServicos = styled.div`
    .servicos {
      background-color: var(--bg-white);
      padding-top: 7.5rem;
      padding-bottom: 7.5rem;
      .servicos-content {
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
    }

    .servicos-cards {
      align-items: center;
      justify-content: center;
      display: grid;
      grid-template-columns: repeat(3, 300px);
      gap: 2rem;
    }

    @media (max-width: 768px) {
      .servicos-cards {
        grid-template-columns: 1fr;
        grid-auto-flow: column;
        justify-content: start;
        width: 100%;
        overflow-x: auto;
        height: 100%;
        padding: 1rem;
      }
    }
  `;

  return (
    <DivServicos>
      <section id="servicos" className="servicos">
        <div className="container">
          <div className="servicos-content">
            <span>Nossos serviços</span>
            <h2>
              Conheça nossos principais serviços que você precisa para aumentar
              suas vendas!
            </h2>
          </div>
        </div>
        <div className="servicos-cards">
          {cardServicosData.map((item, index) => (
            <CardServicos
              key={index}
              title={item.title}
              image={item.image}
              description={item.description}
              longDescription={item.longDescription}
            />
          ))}
        </div>
      </section>
    </DivServicos>
  );
}
