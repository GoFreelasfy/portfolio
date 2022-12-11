import React, { useState } from "react";
import {
  CCarousel,
  CCarouselItem,
  CCarouselCaption,
  CImage,
} from "@coreui/react";
// import "bootstrap/dist/css/bootstrap.min.css";
import "@coreui/coreui/dist/css/coreui.min.css";
import styled from "styled-components";

const DivModalProjetos = styled.div`
  .carrousel-item {
    border-radius: 10px;
  }
  .carrousel-caption {
    text-align: left;
    margin-bottom: 2rem;
    h5,
    span,
    p {
      font-family: "Poppins", sans-serif;
    }
    h5 {
      font-size: 24px;
    }
    p {
      font-size: 14px;
    }
    span {
      background-color: var(--orange);
      border-radius: 50px;
      padding: 3px 15px;
      text-transform: uppercase;
      font-size: 12px;
    }
    span + span {
      margin-left: 1rem;
    }
    .tags {
      margin-bottom: 1.5rem;
    }
    a {
      color: var(--white);
      background: transparent;
      border: 1px solid var(--white);
      border-radius: 50px;
      padding: 8px 20px;
      font-family: "Montserrat", sans-serif;
      font-size: 20px;
      font-weight: 500;
      transition: 0.3s all ease-in-out;

      &:hover {
        background-color: var(--white);
        color: var(--black);
      }
    }
  }
`;

export default function ModalProjetos() {
  const [activeIndex, setActiveIndex] = useState(0);
  return (
    <DivModalProjetos className="container">
      <CCarousel controls indicators interval={2000} transition="crossfade">
        <CCarouselItem className="carrousel-item">
          <CImage
            className="d-block w-100"
            src="./img/carrousel-img.png"
            alt="slide 1"
          />
          <CCarouselCaption className="d-none d-md-block">
            <div className="carrousel-caption">
              <h5>Plataforma Localiza</h5>
              <p>
                Some representative placeholder content for the first slide.
              </p>
              <div className="tags">
                <span>HTML</span>
                <span>CSS</span>
                <span>Javascript</span>
              </div>
              <a href="#">Ver detalhes do projeto</a>
            </div>
          </CCarouselCaption>
        </CCarouselItem>
        <CCarouselItem>
          <CImage
            className="d-block w-100"
            src="./img/hero.png"
            alt="slide 2"
          />
          <CCarouselCaption className="d-none d-md-block">
            <div className="carrousel-caption">
              <h5>Plataforma Localiza</h5>
              <p>
                Some representative placeholder content for the first slide.
              </p>
              <div className="tags">
                <span>HTML</span>
                <span>CSS</span>
                <span>Javascript</span>
              </div>
              <a href="#">Ver detalhes do projeto</a>
            </div>
          </CCarouselCaption>
        </CCarouselItem>
        <CCarouselItem>
          <CImage
            className="d-block w-100"
            src="./img/carrousel-img.png"
            alt="slide 3"
          />
          <CCarouselCaption className="d-none d-md-block">
            <div className="carrousel-caption">
              <h5>Plataforma Localiza</h5>
              <p>
                Some representative placeholder content for the first slide.
              </p>
              <div className="tags">
                <span>HTML</span>
                <span>CSS</span>
                <span>Javascript</span>
              </div>
              <a href="#">Ver detalhes do projeto</a>
            </div>
          </CCarouselCaption>
        </CCarouselItem>
      </CCarousel>
    </DivModalProjetos>
  );
}
