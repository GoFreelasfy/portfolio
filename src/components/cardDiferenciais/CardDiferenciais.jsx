import React from "react";
import styled from "styled-components";
import design from "../../assets/icons/design.png";

export default function CardDiferenciais({ title, image, description }) {
  const DivCardDiferenciais = styled.div`
    background-color: var(--white);
    box-shadow: 0px 15px 45px rgba(2, 72, 90, 0.12);
    border-radius: 10px;
    padding: 1.5rem;
    display: flex;
    align-items: center;
    max-width: 500px;
    gap: 1.5rem;
    cursor: pointer;
    .img-icone {
      img {
        width: 50px;
      }
    }
    .card-diferencias-content {
      h3 {
        font-family: "Poppins", sans-serif;
        font-weight: 500;
        font-size: 20px;
        margin-bottom: 5px;
      }
      p {
        font-family: "Montserrat", sans-serif;
        font-weight: 500;
        font-size: 14px;
      }
    }

    @media (max-width: 768px) {
      flex-direction: column;
      .img-icone {
        width: 60px;
        img {
          width: 100%;
        }
      }
    }
  `;
  return (
    <DivCardDiferenciais>
      <div className="img-icone">
        <img src={image} alt="Icone" />
      </div>
      <div className="card-diferencias-content">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </DivCardDiferenciais>
  );
}
