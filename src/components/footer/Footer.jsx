import react from "react";
import styled from "styled-components";
import facebook from "../../assets/icons/facebook.svg";
import instagram from "../../assets/icons/instagram.svg";
import linkedin from "../../assets/icons/linkedin.svg";

export default function Footer() {
  const DivFooter = styled.div`
    * {
      background-color: var(--blue);
      color: white;
      list-style: none;
      text-decoration: none;
    }

    ul {
      padding: 0;
    }

    h1 {
      font-family: "Poppins", sans-serif;
      font-size: 1.25rem;
      margin-bottom: 1rem;
    }
    li {
      margin-bottom: 1rem;
    }
    li a {
      font-family: "Montserrat", sans-serif;
      font-size: 15px;

      &:hover {
        color: var(--orange);
      }
    }

    #container {
      justify-content: space-around;
      /* margin: 0;
      gap: 0; */
      width: 100%;
      display: flex;
    }

    .line {
      border-bottom: 1px solid var(--gray);
    }
    #logo {
      font-size: 1.5rem;
      margin-bottom: 1rem;
    }
    #contatos {
      display: flex;
      flex-direction: column;
    }
    #caixa1 {
      display: flex;
      flex-direction: row;
    }
    #caixa2 {
      display: flex;
    }
    #social {
      display: flex;
      flex-direction: column;

      img {
        margin-bottom: 1rem;
      }

      a {
        &:hover {
          transform: scale(1.1);
        }
      }
    }
    #direitos {
      margin: 0 auto;
      text-align: center;
      padding-top: 2rem;
      padding-bottom: 4rem;

      p {
        font-family: "Montserrat", sans-serif;
        font-size: 1rem;
        color: var(--bg-white);
      }
    }

    @media (min-width: 1920px) {
      #container {
        padding: 2rem 7.5rem;
      }
      #caixa1 {
        gap: 16.5rem;
      }
      #caixa2 {
        gap: 16.5rem;
      }
    }
    @media (max-width: 1920px) {
      #container {
        padding: 2rem 7.5rem;
      }
      #caixa1 {
        gap: 16.5rem;
      }
      #caixa2 {
        gap: 16.5rem;
      }
    }

    @media (max-width: 1320px) {
      #caixa1 {
        gap: 10rem;
      }
      #caixa2 {
        gap: 10rem;
      }
    }

    /*RESPONSIVE */
    @media (max-width: 1150px) {
      #logo {
        text-align: center;
      }
      #container {
        padding: 2rem 2.5rem;
        /* flex-direction: column; */
      }
      #caixa1 {
        display: flex;
        gap: 3.25rem;
      }
      #caixa2 {
        display: flex;
        gap: 3.25rem;
      }
      li a {
      }
    }
    @media (max-width: 733px) {
      #container {
        flex-direction: column;
      }
    }
    @media (max-width: 450px) {
      #caixa2 {
        flex-wrap: wrap;
      }
    }
    @media (max-width: 430px) {
      #caixa2 {
        gap: 2.3rem;
      }
    }
  `;

  return (
    <DivFooter>
      <div id="container">
        <div id="contato">
          <div id="logo">{/* <img src={macawLogo} alt="Logo Macaw" /> */}</div>
          <div id="contatos">
            <li>
              <a href="mailto:macawti@gmail.com" id="email">
                macawti@gmail.com
              </a>
            </li>
            <li>
              <a href="tel:+5511991947735" id="telefone">
                +55 11 99194-7735
              </a>
            </li>
          </div>
        </div>
        <div id="caixa2">
          <div id="caixa1">
            <div id="empresa">
              <h1>Empresa</h1>
              <ul id="menu-empresa">
                <li>
                  <a href="#home">Home</a>
                </li>
                <li>
                  <a href="#servicos">Serviços</a>
                </li>
                <li>
                  <a href="#projetos">Projetos</a>
                </li>
                <li>
                  <a href="#sobre-nos">Sobre nós</a>
                </li>
                <li>
                  <a href="#contato">Contato</a>
                </li>
              </ul>
            </div>

            <div id="ajuda">
              <h1>Ajuda</h1>
              <ul>
                <li>
                  <a href="#termos">Termos e condições</a>
                </li>
                <li>
                  <a href="#mapa-do-site">Mapa do site</a>
                </li>
                <li>
                  <a href="#faq">FAQ</a>
                </li>
              </ul>
            </div>
          </div>
          <div id="social">
            <h1>Social</h1>
            <a href="https://www.instagram.com/macaw.it/" target="_blank">
              <img src={instagram} alt="instagram" />
            </a>
            <a
              href="https://www.facebook.com/profile.php?id=100088515982136&is_tour_dismissed=true"
              target="_blank"
            >
              <img src={facebook} alt="facebook" />
            </a>
          </div>
        </div>
      </div>
      <div className="line"></div>
      <div id="direitos">
        <p>©2022 Todos os direitos reservados Macaw.IT</p>
      </div>
    </DivFooter>
  );
}
