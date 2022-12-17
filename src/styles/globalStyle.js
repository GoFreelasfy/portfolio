import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
*{
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: "Montserrat, sans-serif";
}

ul {
  list-style: none;
}
a{
  text-decoration: none;
}

:root{
  --white:#FFFFFF;
  --black:#000000;
  --bg-white:#F2F2F2;
  --gray:#787878;
  --orange:#FD8C11;
  --orange-light: rgba(253, 140, 17, 0.5);
  --orange-dark:#F1662A;
  --blue-light:#4E96AA;
  --blue:#02485A;
  --blue-dark:#02485A;
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

.tecnologias {
  margin-bottom: 20rem;
}
.container-carrossel {
  width: 90%;
  margin-bottom: 7rem;
  
  .titulo{
    margin-bottom: 7rem;
  }
}

.container {
  max-width: 1440px;
  margin: 0 auto;
  padding-left: 7rem;
  padding-right: 7rem;
}

.btn {
  font-family: "Poppins",sans-serif;
  font-weight: 500;
  font-size: 16px;
    background-color: var(--orange);
    padding: 10px 20px;
    border-radius: 5px;
    color: var(--white);
    transition: 0.2s all ease-in;
    cursor: pointer;
    border: 0;

    &:hover {
      background: var(--orange-dark);
      color: var(--white);
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
      min-width: 100%;
      .col-2 {
        grid-template-columns: 1fr;
        margin: 2rem 0;
        width: 100%;
        input {
          min-width: 100%;
          margin: 0;
        }

        label {
          display: block;
          margin-bottom: 0.25rem;
        }
      }
      input {
        min-width: 100%;
      }
    }
    .mensagem {
      min-width: 100%;
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
        .main-content {
          padding-top: 8rem;
        }
      .container{
        padding-left: 2rem;
      padding-right: 2rem;
      }
      .servicos-cards {
        grid-template-columns: 1fr;
        grid-auto-flow: column;
        justify-content: start;
        width: 100%;
        overflow-x: auto;
        height: 100%;
        padding: 1rem;
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
      max-width: 100%;
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
  @media (max-width: 400px) {
    .faq{
      h2{
        font-size: 1px;
      }
    }
  }
`;
