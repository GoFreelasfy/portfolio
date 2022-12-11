import React from 'react'
import NewForm from "../newFormContato/NewForm";
import styled from "styled-components"

const FaleConoscoSection = styled.section`
    padding-top: 2rem;
    padding-bottom: 2rem;
    background: var(--bg-white);

    .col-2 {
      display: grid;
      grid-template-columns: 50% 50%;
      width: 90%;
      gap: 10%;
    }
  .fale-conosco-content {
    h2,
    p {
      font-family: "Poppins", sans-serif;
      font-weight: 500;
    }
    h2 {
      color: var(--black);
      font-size: 48px;
      margin-bottom: 1rem;
    }
    p {
      color: var(--gray);
      font-size: 20px;
      margin-bottom: 2rem;
    }
  }
`
export default function FaleConosco() {
  return (
    <FaleConoscoSection >
    <div className="container">
      <div className="fale-conosco-content">
        <h2>Fale conosco!</h2>
        <p>
          Está com alguma dúvida? Preencha os campos abaixo com os seguintes
          dados que em breve entraremos em contato{" "}
        </p>
      </div>
      <NewForm />
    </div>
  </FaleConoscoSection>
  )
}
