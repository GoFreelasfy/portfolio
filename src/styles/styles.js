import styled from "styled-components";

export const DivHome = styled.div`
  .tecnologias {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%;
    margin: 0 auto;
    padding: 0;
    .container {
      margin: 0 auto;
      padding: 0;
      width: 100%;
      display: flex;
      flex-direction: column;
      justify-content: center;

      .carrosel {
        width: 100%;
        display: flex;
        align-items: center;
        flex-direction: column;
        justify-content: center;
      }
    }
  }

  .main {
    background-image: url("./img/hero.png");
    padding: 2rem;
    background-repeat: no-repeat;
    background-attachment: fixed;
    background-size: cover;
    height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .main-content {
    max-width: 600px;
    text-align: center;
    h1,
    span {
      font-family: "Poppins", sans-serif;
    }
    h1 {
      margin-bottom: 1rem;
      font-weight: 600;
      color: var(--white);
    }
    span {
      color: var(--orange);
    }
    p {
      font-family: "Montserrat", sans-serif;
      color: var(--white);
      margin-bottom: 2rem;
    }
  }

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

  .titulo {
    font-family: "Poppins", sans-serif;
    font-weight: 500;
    color: var(--blue-light);

    display: flex;
    text-align: center;
    align-items: center;
    justify-content: center;
    margin-bottom: 3rem;
    font-size: 1.5rem;
  }
  .sobre {
    padding-bottom: 10rem;

    .caixa {
      display: flex;
      gap: 6.688rem;
    }
    .conteudo-texto {
      width: 35.75rem;
      margin-top: 3rem;
    }
    h1 {
      font-family: "Poppins", sans-serif;
      font-size: 2.25rem;
      font-weight: 600;
      color: black;
      text-align: center;
    }
    p {
      font-family: "Montserrat", sans-serif;
      font-weight: 500;
      font-size: 1.5rem;
      color: #787878;
      text-align: center;
      margin-top: 1rem;
    }
    img {
      border-radius: 1rem;
      max-width: 33.125rem;
      max-height: 46.688rem;
      position: relative;
    }

    #ideia {
      color: var(--orange);
      font-family: "Montserrat", sans-serif;
      font-weight: 600;
      font-size: 2.25rem;
    }
    #preocupada {
      color: var(--blue-light);
      font-family: "Montserrat", sans-serif;
      font-weight: 600;
      font-size: 2.25rem;
    }
    .imagem2 {
      position: relative;
    }
  }
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
  .fale-conosco {
    padding-top: 2rem;
    padding-bottom: 2rem;
    background: var(--bg-white);

    .col-2 {
      display: grid;
      grid-template-columns: 50% 50%;
      width: 90%;
      gap: 10%;
    }
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

  /*-=-=-=-=-=-=RESPONSIVE=-=-=-=-=-=-*/
  @media (max-width: 1920px) {
    .imagem2 {
      top: -10rem;
    }
  }
  @media (max-width: 1320px) {
    .imagem2 {
      top: 0rem;
    }
  }
  @media (max-width: 1200px) {
    .servicos-cards {
      grid-template-columns: repeat(2, 300px);
    }
    .diferenciais {
      flex-direction: column;
      justify-content: center;
      align-items: center;
      gap: 4rem;
    }
    .diferenciais-card {
      left: 0;
    }
    .form {
      gap: 0;
      .col-2 {
        grid-template-columns: 1fr;
        margin: 2rem 0;
        input {
          margin: 0;
        }
        label {
          display: block;
          margin-bottom: 0.25rem;
        }
      }
    }
    @media (max-width: 1200px) {
      /* .servicos-cards {
        grid-template-columns: repeat(2, 300px);
      } */
    }
    @media (max-width: 1322px) {
      .imagem.imagem2 {
      }
    }

    @media (max-width: 1336px) {
      .titulo {
        margin-bottom: 2rem;
      }

      .caixa {
        align-items: center;
        flex-direction: column;
      }
      .caixa.final {
        flex-direction: column-reverse;
      }

      .conteudo-texto {
        width: 85%;
      }
    }

    @media (max-width: 768px) {
      .servicos-cards {
        grid-template-columns: 300px;
        /* display: flex; */
        /* flex-basis: 0; */
        /* grid-template-columns: repeat(4, 300px); */
        /* padding: 1rem; */
        /* margin-left: 2rem; */
        /* grid-auto-flow: column;
        grid-auto-columns: 45%;
        gap: 5rem;
        background-color: red;
        overflow-x: auto;
        overscroll-behavior-inline: contain; */
        /* object-fit: cover; */

        & > div {
          /* inline-size: 100%;
          aspect-ratio: 16 / 9; */
        }
        /* grid-auto-flow: row; */

        /* &::-webkit-scrollbar {
          width: 0;
        } */
      }

      .diferenciais-cards {
        flex-direction: column;
      }
      .diferenciais-content {
        text-align: center;
      }
    }

    @media (max-width: 600px) {
      .conteudo-texto {
        max-width: 20rem;
        h1 {
          text-align: left;
        }
        p {
          text-align: left;
        }
      }
    }
    .faq {
      width: 100%;
      margin: 0 auto;
      padding: 0;
      .texto {
        h1 {
          text-align: center;
        }
        p {
          text-align: center;
        }
      }
    }
    @media (max-width: 544px) {
      h1 {
        font-size: 1.5rem;
      }
      #ideia {
        font-size: 1.5rem;
      }
      #preocupada {
        font-size: 1.5rem;
      }
      .conteudo-texto {
        width: 23rem;
      }
      .sobre img {
        width: 23rem;
      }
    }
  }
`;
