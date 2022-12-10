import React from "react";
import Carousel from "react-elastic-carousel";
import styled from "styled-components";
import Card from "./Card";

import html from "../../../public/img/html.png";
import css from "../../../public/img/css.png";
import java from "../../../public/img/java.png";
import js from "../../../public/img/js.png";
import react from "../../../public/img/react.png";
import spring from "../../../public/img/spring.png";

import wordpress from "../../../public/img/wordpress.png";
import styledc from "../../../public/img/styled.png";
import shopify from "../../../public/img/shopify.png";
import next from "../../../public/img/next.png";
import sass from "../../../public/img/sass.png";

export default function Carrossel() {
  const DivCarrosel = styled.div`
    .App {
      display: flex;
      margin: 0 auto;
      cursor: pointer;
    }

    .card {
      width: 10.37rem;
      height: 10.37rem;
      border-radius: 100%;
      color: #000000;
      font-size: 30px;
      margin-left: 2rem;
      margin-top: .5rem;

      box-shadow: 10px 5px 20px #7878784b;
      display: flex;
      justify-content: center;
      align-items: center;
      margin-bottom: 2rem;
      transition: 0.2s ease-in-out;

      &:hover {
        transform: scale(1.1);
      }
    }
    .rec-arrow {
      display: none;
    }
    .rec-dot_active {
      background-color: var(--blue-dark);
      color: var(--blue-dark);
      box-shadow: none;
    }
    .rec-dot {
      box-shadow: solid 1px;
    }
  `;

  const Formatos = [
    { width: 1, itemsToShow: 1 },
    { width: 500, itemsToShow: 2 },
    { width: 750, itemsToShow: 3 },
    { width: 970, itemsToShow: 4 },

    { width: 1395, itemsToShow: 6 },
  ];

  return (
    <DivCarrosel>
      <div className="App">
        <Carousel
          breakPoints={Formatos}
          enableAutoPlay={true}
          preventDefaultTouchmoveEvent={true}
        >
          <Card icone={<img src={html}></img>} />
          <Card icone={<img src={css}></img>} />
          <Card icone={<img src={js}></img>} />
          <Card icone={<img src={react}></img>} />
          <Card icone={<img src={java}></img>} />
          <Card icone={<img src={spring} alt="Linguagem spring-boot"></img>} />

          <Card icone={<img src={shopify} alt="Linguagem spring-boot"></img>} />
          <Card
            icone={<img src={wordpress} alt="Linguagem spring-boot"></img>}
          />
          <Card icone={<img src={next} alt="Linguagem spring-boot"></img>} />
          <Card icone={<img src={sass} alt="Linguagem spring-boot"></img>} />
          <Card icone={<img src={styledc} alt="Linguagem spring-boot"></img>} />
        </Carousel>
      </div>
    </DivCarrosel>
  );
}
