import react from "react";
import styled from "styled-components";
import facebook from "../../assets/icons/facebook.svg"
import instagram from "../../assets/icons/instagram.svg"
import linkedin from "../../assets/icons/linkedin.svg"

export default function Footer() {

    const DivFooter = styled.div`

    *{
        background-color: var(--blue);
        color: white;
        list-style: none;
        text-decoration: none;
    }
    @media (max-width: 1920px) {
        #container{
            padding: 2rem 7.5rem;

        }
        #caixa1{
            gap: 16.5rem;
        }
        #caixa2{
            gap: 16.5rem;
        }

    }

    @media (max-width: 1200px) {
        #caixa1{
            gap: 10rem;
        }
        #caixa2{
            gap: 10rem;
        }
    }

    @media (max-width: 1050px){
        #logo{
            text-align: center;
        }
        #container{
            padding: 2rem 2.5rem;
            /* flex-direction: column; */
            
        }
        #caixa1{
            display: flex;
            gap: 3.25rem;
        }
        #caixa2{
            display: flex;
            gap: 3.25rem;
        }
        li a{
           
        }
     


    }
    @media (max-width: 733px) {
        #container{
            flex-direction: column;
        }
    }
    @media (max-width: 450px){
        #caixa2{
            flex-wrap: wrap;
        }
    }
    @media (max-width: 430px){
        #caixa2{
            gap: 2.3rem;
        }
    }




    h1{
    /* font-familly: Poppins  */
    font-size: 1.25rem;
    margin-bottom: 1rem;
    }
    li{
        margin-bottom: 1rem;
    }
    li a {
        /* font-familly: montserra  */
        font-size: 15px;
    }

    #container {
        justify-content: space-around;
        margin: 0;
        gap: 0;
        width: 100%;
        display: flex;
    }
    hr{
        border-bottom: 1px solid var(--gray);
        

    }
    #logo{
        font-size: 1.5rem;
        margin-bottom: 1rem;
        
    }
    #contatos{
        display: flex;
        flex-direction: column;   
    }
    #caixa1{
        display: flex;
        flex-direction: row;
    }
    #caixa2{
        display: flex;
    }
    #social{
        display: flex;
        flex-direction: column;

        img {
            margin-bottom: 1rem;
        }
    }
    #direitos {
        margin: 0 auto;
        text-align: center;
        padding-top: 2rem;
        padding-bottom: 4rem;

        p{
             /* font-familly: montserra  */
            font-size: 1rem;
            color: var(--bg-white);
        }
    }

    `


    return (
        <DivFooter>

            <div id="container">
                <div id="contato">
                    <div id="logo">
                        <h1>LOGO</h1>
                    </div>
                    <div id="contatos">
                        <li><a href="" id="email">jhonatas2004@gmail.com</a></li>
                        <li><a href="" id="telefone">+55 11 957818539</a></li>
                    </div>
                </div>
                <div id="caixa2">

                    <div id="caixa1">
                        <div id="empresa">
                            <h1>Empresa</h1>
                            <ul id="menu-empresa">
                                <li><a href="">Home</a></li>
                                <li><a href="">Serviços</a></li>
                                <li><a href="">Projetos</a></li>
                                <li><a href="">Sobre nós</a></li>
                                <li><a href="">Contato</a></li>
                            </ul>
                        </div>
                        <div id="ajuda">
                            <h1>Ajuda</h1>
                            <ul>
                                <li><a href="">Termos e condições</a></li>
                                <li><a href="">Mapa do site</a></li>
                                <li><a href="">FAQ</a></li>
                            </ul>
                        </div>
                    </div>
                    <div id="social">
                        <h1>Social</h1>
                        <a href=""><img src={linkedin} alt='linkedin' /></a>
                        <a href=""><img src={instagram} alt='instagram' /></a>
                        <a href=""><img src={facebook} alt='facebook' /></a>
                    </div>
                </div>
            </div>
            <hr />
            <div id="direitos">
                <p>©2022 Todos os direitos reservados XXXXXXX.</p>
            </div>
        </DivFooter>
    )
}