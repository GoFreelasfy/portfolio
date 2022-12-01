import React from "react";
import CardServicos from "../../components/cardServicos/CardServicos";
import Footer from "../../components/footer/Footer";
import Header from "../../components/header/Header";
import imagem1 from "../../assets/img/imagem-1.png"
import imagem2 from "../../assets/img/imagem-2.png"


import html from "../../assets/img/html.svg"
import css from "../../assets/img/css.svg"
import js from "../../assets/img/js.svg"
import react from "../../assets/img/react.svg"
import java from "../../assets/img/java.svg"
import spring from "../../assets/img/spring.svg"

import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';

import styled from "styled-components";
import CardDiferenciais from "../../components/cardDiferenciais/CardDiferenciais";
import Faq from "../../components/sanfonaFaq/Faq";
import { Data } from "../../components/sanfonaFaq/Data";
export default function Home() {


  const handleDragStart = (e) => e.preventDefault();
  const responsive = {
    0: {items: 2},
    640: { items: 3 },
    1024: { items: 3 },
    1400: { items: 6 }
  };

  const items = [
    <img src={html} onDragStart={handleDragStart} role="presentation" />,
    <img src={css} onDragStart={handleDragStart} role="presentation" />,
    <img src={js} onDragStart={handleDragStart} role="presentation" />,
    <img src={react} onDragStart={handleDragStart} role="presentation" />,
    <img src={java} onDragStart={handleDragStart} role="presentation" />,
    <img src={spring} onDragStart={handleDragStart} role="presentation" />,
  ];



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
.tecnologias {
  .carrosel{
    align-items: center;
    margin: 0 auto;
    justify-content: center;
    display: flex;

  }
}

.alice-carousel{
  align-items: center;
  justify-content: center;
  margin: 0 auto;




}
.alice-carousel__stage{

}
.alice-carousel__stage-item{
}

.alice-carousel__prev-btn  {
  font-size: 3rem;

}
.alice-carousel__next-btn  {
  font-size: 3rem;



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
    .titulo{
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

      .caixa{
        display: flex;
        gap: 6.688rem;
      }
      .conteudo-texto{
        width: 35.75rem;
        margin-top: 3rem;
      }
      h1{
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
      img{
          border-radius: 1rem;
          max-width: 33.125rem;
          max-height: 46.688rem;
        }




      #ideia{
        color: var(--orange);
        font-family: "Montserrat", sans-serif;
        font-weight: 600;
        font-size: 2.25rem;
        }
      #preocupada{
        color: var(--blue-light);
        font-family: "Montserrat", sans-serif;
        font-weight: 600;
        font-size: 2.25rem;
        }



    }

  .tecnologias {
    .carrosel{
      display: flex;
      align-items: center;
    }
  }
  .faq{
    background-color: var(--bg-white);
    .container {
      min-width: 100%;
      display: flex;
      flex-direction: column;
      align-items: center;

      .titulo {
        span{
          font-family: "Poppins", sans-serif;
          margin-top: 4.0rem;
          color: var(--orange-dark);
          font-size: 1.5rem;
          font-weight: 500;
        }
      }

    }
    .texto{
      padding: 0;
      margin: 0 ;
      text-align: center;
      margin-bottom: 3rem;
      h1{
        font-family: "Poppins", sans-serif;
        font-size: 3rem;
        font-weight: 500;
      }
      p{

        font-size: 1.25rem;
        font-family: "Poppins", sans-serif;
        color: var(--gray);
        font-weight: 500;

      }
      span{
        font-size: 1.25rem;
        font-weight: 500;

      }
      a{
        color: var(--orange-dark);
        font-family: "Poppins", sans-serif;
      }
    }
    .botao{
      display: flex;
      margin: 0 auto;
      justify-content: center;

      button{
        background: transparent;

        background-color: none;
        font-weight: 500;
        border-radius: .2rem;
        margin-top: 5.62rem;
        margin-bottom: 5rem;
        font-size: 1.25rem;
        padding: .5rem 1rem;
        font-family: "Poppins", sans-serif;
        border: solid 2px var(--blue);
        color: var(--blue);

      }
    }


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
    @media (max-width: 1920px) {

.imagem2{
  margin-top: -10rem;
}


}

@media (max-width: 1336px) {

.titulo{
  margin-bottom: 2rem;
}

.caixa {
  align-items: center;
  flex-direction: column;
}
.caixa.final {
  flex-direction: column-reverse;
}
.imagem2{
  margin-top: 0rem;
}
.conteudo-texto{
  width: 85%;
}
}
@media (max-width: 600px) {

.conteudo-texto{
max-width: 20rem;
}

h1{
text-align: left;

}
p{
text-align: left;
}

.faq {
  width: 100%;
  margin: 0 auto;
  padding: 0;
  .texto{
    h1{
      text-align: center;
    }
    p{
      text-align: center;
    }
  }
}

}
@media (max-width: 544px) {


h1 {
font-size: 1.5rem;
}
#ideia{
font-size: 1.5rem;
}
#preocupada{
font-size: 1.5rem;
}
.conteudo-texto{
width: 23rem;
}
img{
width: 23rem;
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
      <section className="sobre">
        <div className="container">
          <span className="titulo">SOBRE NÓS</span>
          <div className="caixa">
            <div className="conteudo-texto">
              <h1>Nascemos como uma empresa <span id="preocupada">preocupada</span> com a dor de muitos clientes.</h1>
              <p>Muitos clientes, acabam sofrendo golpe, não recebem aquilo que queriam e se sentem frustrados, enxergamos essa dor e então resolvemos entrar no mercado para mudar isso!</p>
            </div>
            <div className="imagem">
              <img src={imagem1} alt="imagem sobre nós" />
            </div>
          </div>
          <div className="caixa final">
            <div className="imagem imagem2">

              <img src={imagem2} alt="imagem sobre nós" />
            </div>
            <div className="conteudo-texto">
              <h1>Transformando <span id="ideia">ideias</span> em soluções no mercado!</h1>
              <p>Somos um time de alta performance preparado para transformar seu projeto em uma solução web! Descubra já como ajudamos outras empresas a decolarem!</p>
            </div>
          </div>
        </div>
      </section>
      <section className="tecnologias">
        <div className="container">
          <span className="titulo">TECNOLOGIAS</span>
          <div className="carrosel">
            <AliceCarousel

              mouseTracking
              items={items}
              responsive={responsive}
              innerWidth={responsive}
              autoPlay={true}
              autoPlayInterval={4000}
              infinite={true}
            />
          </div>
        </div>
      </section>
      <section className="faq">
        <div className="container">
          <div className="titulo">

          <span>FAQ</span>
          </div>
          <div className="texto">
            <h1>Perguntas frequentes</h1>
            <p>Caso não encontre o que procura,<span> <a href="">vem conversar conosco!</a> </span></p>
          </div>
          <Faq
            data={Data} />

          <div className="botao">
            <button>Mais Dúvidas</button>
          </div>
        </div>
      </section>
      <Footer />
    </DivHome>
  );
}
