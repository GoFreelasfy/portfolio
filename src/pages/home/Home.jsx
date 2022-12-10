import React from "react";
import CardServicos from "../../components/cardServicos/CardServicos";
import Footer from "../../components/footer/Footer";
import Header from "../../components/header/Header";
import imagem1 from "../../assets/img/imagem-1.png";
import imagem2 from "../../assets/img/imagem-2.png";
import { DivHome } from "../../styles/styles";

import "react-alice-carousel/lib/alice-carousel.css";

import CardDiferenciais from "../../components/cardDiferenciais/CardDiferenciais";
import { cardServicosData } from "../../components/cardServicos/CardServicosData";
import Faq from "../../components/sanfonaFaq/Faq";
import { Data } from "../../components/sanfonaFaq/Data";

import Carrossel from "../../components/carosselTechs/Carrossel";
import NewForm from "../../components/newFormContato/NewForm";
import ModalProjetos from "../../components/modalProjetos/ModalProjetos";
import { BsWhatsapp } from "react-icons/bs";

export default function Home() {
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
      <section className="sobre">
        <div className="container">
          <span className="titulo">SOBRE NÓS</span>
          <div className="caixa">
            <div className="conteudo-texto">
              <h1>
                Nascemos como uma empresa{" "}
                <span id="preocupada">preocupada</span> com a dor de muitos
                clientes.
              </h1>
              <p>
                Muitos clientes, acabam sofrendo golpe, não recebem aquilo que
                queriam e se sentem frustrados, enxergamos essa dor e então
                resolvemos entrar no mercado para mudar isso!
              </p>
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
              <h1>
                Transformando <span id="ideia">ideias</span> em soluções no
                mercado!
              </h1>
              <p>
                Somos um time de alta performance preparado para transformar seu
                projeto em uma solução web! Descubra já como ajudamos outras
                empresas a decolarem!
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="container">
        <ModalProjetos />
      </section>

      <section className="tecnologias">
        <div className="techs-content">
          <span className="titulo">TECNOLOGIAS</span>
          <h2>Confira abaixo as tecnologias que trabalhamos!</h2>
        </div>
        <div className="container-carrossel">
          <Carrossel />
        </div>
      </section>

      <section className="faq">
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
      </section>

      <section className="fale-conosco">
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
      </section>

      <button id="whatsapp-bottom-button">
        <a href="https://wa.me/+5511972266510" target="_blank">
          <BsWhatsapp size={"2rem"} color="#ffffff" />
        </a>
      </button>

      <Footer />
    </DivHome>
  );
}
