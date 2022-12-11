import React from 'react'
import Faq from "../sanfonaFaq/Faq"
import { Data } from "../sanfonaFaq/Data";
import styled from "styled-components"
const FAQSection = styled.section`
.faq {
    background-color: var(--bg-white);
    .container {
      min-width: 100%;
      display: flex;
      flex-direction: column;
      align-items: center;

      .titulo {
        span {
          font-family: "Poppins", sans-serif;
          margin-top: 4rem;
          color: var(--orange-dark);
          font-size: 1.5rem;
          font-weight: 500;
        }
      }
    }
    .texto {
      padding: 0;
      margin: 0;
      text-align: center;
      margin-bottom: 3rem;
      h1 {
        font-family: "Poppins", sans-serif;
        font-size: 3rem;
        font-weight: 500;
      }
      p {
        font-size: 1.25rem;
        font-family: "Poppins", sans-serif;
        color: var(--gray);
        font-weight: 500;
      }
      span {
        font-size: 1.25rem;
        font-weight: 500;
      }
      a {
        color: var(--orange-dark);
        font-family: "Poppins", sans-serif;
      }
    }
    .botao {
      display: flex;
      margin: 0 auto;
      justify-content: center;

      button {
        background: transparent;

        background-color: none;
        font-weight: 500;
        border-radius: 0.2rem;
        margin-top: 5.62rem;
        margin-bottom: 5rem;
        font-size: 1.25rem;
        padding: 0.5rem 1rem;
        font-family: "Poppins", sans-serif;
        border: solid 2px var(--blue);
        color: var(--blue);
      }
    }
  }

`
export default function SectionFaq() {
  return (
    <FAQSection className="faq">
        <div className="container">
          <div className="titulo">
            <span>FAQ</span>
          </div>
          <div className="texto">
            <h1>Perguntas frequentes</h1>
            <p>
              Caso não encontre o que procura,
              <span>
                {" "}
                <a href="">vem conversar conosco!</a>{" "}
              </span>
            </p>
          </div>
          <Faq data={Data} />
        </div>
      </FAQSection>
  )
}
