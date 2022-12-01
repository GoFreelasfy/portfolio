import React from "react";
import styled from "styled-components";

const DivContato = styled.div`
  margin: 0;
`;
const Contato = () => {
  return (
    <DivContato>
      <div className="textos">
        <div className="titulo">
          <h1>hellow</h1>
        </div>
        <div className="sub-titulo">
          <p>
            Está com alguma dúvida? Preencha os campos abaixo com os seguintes
            dados que em breve entraremos em contato{" "}
          </p>
        </div>
      </div>
      <div className="form">
        <form action="post">
          <div className="nome">
            <h3>Nome</h3>
            <input type="text" placeholder="Digite o seu nome" />
          </div>
          <div className="email">
            <h3>Email</h3>
            <input type="text" placeholder="Digite o seu E-mail" />
          </div>
          <div className="tel">
            <h3>Telefone</h3>
            <input type="tel" placeholder="(XX) XXXXX-XXXX" />
          </div>
          <div className="Assunto">
            <h3>Assunto</h3>
            <input type="text" placeholder="Digite o assunto do E-mail" />
          </div>
          <div className="mensagem">
            <h3>Mensagem</h3>
            <input type="text" name="" id="" />
          </div>
          <div className="enviar">
            <button>Enviar</button>
          </div>
        </form>
      </div>
    </DivContato>
  );
};

export default Contato;
