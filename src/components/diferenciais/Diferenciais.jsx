import React from "react";
import styled from "styled-components";
import CardDiferenciais from "./cardDiferenciais/CardDiferenciais";


export default function Diferenciais() {

    const DivDiferenciais = styled.div`
    .diferenciais {
    padding-top: 7.5rem;
    padding-bottom: 7.5rem;
    display: flex;
    justify-content: center;
    align-items: center;
    .diferenciais-content {
      max-width: 500px;
      span,
      h2 {
        font-family: "Poppins", sans-serif;
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
        margin-bottom: 1rem;
      }

      p {
        font-family: "Montserrat", sans-serif;
        font-size: 24px;
        font-weight: 500;
        color: var(--gray);
        margin-bottom: 4rem;
      }
    }
  }

  .diferenciais-cards {
    display: flex;
    flex-direction: column;
    gap: 2rem;
  }

  .diferenciais-card {
    position: relative;
    left: 6.25rem;
  }
    
    `



    return (
        <DivDiferenciais>

            <section id="diferenciais" className="diferenciais container">
                <div className="diferenciais-content">
                    <span>Diferenciais</span>
                    <h2>Por que escolher a Web plataform?</h2>
                    <p>
                        Trabalhamos com as melhores e mais recentes tecnologias do Mercado,
                        trazendo soluções otimizadas e Responsivas para seu negócio!
                    </p>
                    <a href="#" className="btn">
                        Entre em contato!
                    </a>
                </div>


                <div className="diferenciais-cards">
                    <CardDiferenciais
                        image="./icons/design.png"
                        title="Design Responsivo"
                        description="Trabalhamos com estruturas totalmente responsivas e Mobile Friendly!"
                    />
                    <div className="diferenciais-card">
                        <CardDiferenciais
                            image="./icons/sprint.png"
                            title="Metodologias Ágeis"
                            description="Nossa metodologia contribui para um desenvolvimento prático e bem estruturado!"
                        />
                    </div>
                    <CardDiferenciais
                        image="./icons/hospedagem.png"
                        title="Hospedagem e SEO"
                        description="Fazemos o suporte de hospedagens de sites, criação de domínio e metricas avançadas de visibilidade e gestão!"
                    />
                </div>
            </section>

        </DivDiferenciais>
    )
}