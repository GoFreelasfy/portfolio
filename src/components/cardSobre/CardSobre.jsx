import React from "react";
import styled from "styled-components";

export default function CardSobre({ titulo, conteudo, imagem }) {
    const DivCardSobre = styled.div`
    .caixa1 .conteudo-texto {
        h1{
            font-family: "Poppins", sans-serif;
            font-style: 2.25rem;
            font-weight: 500;
            color: black;

        }
        p {
            font-family: "Montserrat", sans-serif;
            font-weight: 500;
            font-size: 1.5rem;
            color: #787878;
        }
    }
    
    `

    return(

        
        <DivCardSobre>
        <div className="caixa1">
            <div className="conteudo-texto">
                <h1>{titulo}</h1>
                <p>{conteudo}</p>
            </div>
            <div className="imagem">
                <img src={imagem} alt="" />
            </div>
        </div>
    </DivCardSobre>

)
}