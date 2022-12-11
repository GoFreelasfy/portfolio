import React from "react";
import styled from "styled-components";

import imagem1 from "../../assets/img/imagem-1.png";
import imagem2 from "../../assets/img/imagem-2.png";


export default function Sobre() {

    const DivSobre = styled.div`
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
    
    
    `



    return (
        <DivSobre>

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
        </DivSobre>


    )
}