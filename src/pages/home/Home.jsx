import React from "react";
import CardServicos from "../../components/cardServicos/CardServicos";
import Footer from "../../components/footer/Footer";
import Header from "../../components/header/Header";
import styled from "styled-components";
import CardDiferenciais from "../../components/cardDiferenciais/CardDiferenciais";
export default function Home() {
  const cardServicosData = [
    {
      id: "1",
      title: "Ui Design",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    },
    {
      id: "2",
      title: "UX Design",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    },
    {
      id: "3",
      title: "Manutenção de Sites",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    },
    {
      id: "4",
      title: "Desenvolvimento Web",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    },
    {
      id: "5",
      title: "Métricas e SEO",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    },
    {
      id: "6",
      title: "Hospedagem",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    },
  ];

  const cardDiferenciaisData = [
    {
      id: "1",
      image: "./icons/design.png",
      title: "Design Responsivo",
      description:
        "Trabalhamos com estruturas totalmente responsivas e Mobile Friendly!",
    },
    {
      id: "2",
      image: "./icons/sprint.png",
      title: "Metodologias Ágeis",
      description:
        "Nossa metodologia contribui para um desenvolvimento prático e bem estruturado!",
    },
    {
      id: "3",
      image: "./icons/hospedagem.png",
      title: "Hospedagem e SEO",
      description:
        "Fazemos o suporte de hospedagens de sites, criação de domínio e metricas avançadas de visibilidade e gestão!",
    },
  ];

  const DivHome = styled.div`
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

    /*-=-=-=-=-=-=RESPONSIVE=-=-=-=-=-=-*/
    @media (max-width: 1200px) {
      .servicos-cards {
        grid-template-columns: repeat(2, 300px);
      }
    }
    @media (max-width: 768px) {
      .servicos-cards {
        grid-template-columns: 300px;
      }
    }
  `;
  return (
    <DivHome>
      <Header />
      <main id="home" className="main">
        <div className="main-content">
          <h1>
            Alcance maiores resultados com uma <span>Solução Web!</span>
          </h1>
          <p>
            Os nossos serviços possibilitam a transformação digital do seu
            negócio.
          </p>
          <a href="#" className="btn">
            Nossos serviços
          </a>
        </div>
      </main>
      <section id="servicos" className="servicos">
        <div className="container">
          <div className="servicos-content">
            <span>Nossos serviços</span>
            <h2>
              Conheça nossos principais serviços que você precisa para aumentar
              suas vendas!
            </h2>
          </div>
          <div className="servicos-cards">
            {cardServicosData.map((item, index) => (
              <CardServicos
                key={index}
                title={item.title}
                description={item.description}
              />
            ))}
          </div>
        </div>
      </section>
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
          {cardDiferenciaisData.map((item, index) => (
            <CardDiferenciais
              key={index}
              image={item.image}
              title={item.title}
              description={item.description}
            />
          ))}
        </div>
      </section>
      <Footer />
    </DivHome>
  );
}
