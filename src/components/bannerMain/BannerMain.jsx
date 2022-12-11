import React from "react";
import styled from "styled-components";


export default function BannerMain() {


    const DivBanner = styled.div`
    
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
    max-width: 700px;
    text-align: center;
    h1,
    span {
      font-family: "Poppins", sans-serif;
    }
    h1 {
      margin-bottom: 1rem;
      font-weight: 600;
      color: var(--white);
      font-size: 44px;
    }
    span {
      color: var(--orange);
    }
    p {
      font-family: "Montserrat", sans-serif;
      color: var(--white);
      margin-bottom: 2rem;
      font-size: 18px;
    }
  }
    
    
    `




    return (
        <DivBanner>
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
        </DivBanner>
    )
}