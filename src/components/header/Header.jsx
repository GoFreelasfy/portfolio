import React, { useState } from "react";
import styled from "styled-components";
import whatsApp from "../../assets/icons/whatsapp.svg";

const DivHeader = styled.div`
  .header {
    display: flex;
    justify-content: space-around;
    align-items: center;
    padding: 1rem;
  }
  hr {
    height: 2px;
    background: linear-gradient(90deg, #02485a 0%, #4e96aa 100%);
  }
  .nav {
    display: flex;
    align-items: center;
    gap: 4rem;
  }
  .menu {
    display: flex;
    align-items: center;
    gap: 2rem;

    a {
      color: var(--black);
      font-size: 16px;
      font-family: "Poppins", sans-serif;

      &::after {
        content: "";
        display: block;
        width: 0;
        height: 2px;
        background: var(--orange);
        transition: 0.2s all ease-in-out;
      }
      &:hover {
        color: var(--orange);
      }
      &:hover::after {
        width: 100%;
      }
    }
  }
  .btn-whats {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 10px;
    background-color: var(--orange);
    padding: 10px 20px;
    border-radius: 5px;
    color: var(--white);
    font-size: 16px;
    font-weight: 500;
    transition: 0.2s all ease-in;

    &:hover {
      background: var(--orange-dark);
    }
  }

  .nav-toggle {
    display: none;
  }

  @media (max-width: 768px) {
    .header {
      .menu {
        display: flex;
        flex-direction: column;
      }
      & > .nav {
        position: absolute;
        top: 5.2rem;
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
        left: 0;
        width: 100%;
        height: 100%;
        background-color: var(--blue);

        transform: translateX(-100%);
        transition: all 0.45s;

        & > a::before {
          background: transparent;
        }
        &.open {
          transform: translateX(0);
        }
      }

      .nav-toggle {
        display: flex;
        width: 50px;
        height: 50px;
        justify-content: center;
        align-items: center;
        cursor: pointer;

        & > .bar {
          position: relative;
          width: 22px;
          height: 2px;
          background: var(--black);
          transition: all 0.45s ease-in-out;
          &::before,
          &::after {
            content: "";
            position: absolute;
            height: 2px;
            background: var(--black);
            width: 100%;
            transition: all 0.45s ease-in-out;
          }
          &::before {
            width: 32px;
            transform: translateY(-8px);
            right: -10px;
          }
          &::after {
            width: 32px;
            transform: translateY(8px);
          }
        }
      }
    }
    .nav-toggle {
      &.open > .bar {
        transform: translateX(-40px);
        background: transparent;

        &::before {
          width: 32px;
          transform: rotate(45deg) translate(26px, -26px);
        }
        &::after {
          width: 32px;
          transform: rotate(-45deg) translate(26px, 26px);
        }
      }
    }
    .btn-whats {
      display: none;
    }
  }
`;

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <DivHeader>
      <header className="header container">
        <div>
          {/* <img src="" alt="" /> */}
          <h1>Logo</h1>
        </div>
        <div className={`nav ${isOpen && "open"}`}>
          <nav>
            <ul className="menu">
              <li>
                <a href="#">Home</a>
              </li>
              <li>
                <a href="#">Sobre nós</a>
              </li>
              <li>
                <a href="#">Serviços</a>
              </li>
              <li>
                <a href="#">Contato</a>
              </li>
            </ul>
          </nav>
          <a className="btn-whats" href="#">
            <img src={whatsApp} alt="Icone WhatsApp" />
            (11) 97226-6510
          </a>
        </div>
        <div
          className={`nav-toggle ${isOpen && "open"}`}
          onClick={() => setIsOpen(!isOpen)}
        >
          <div className="bar"></div>
        </div>
      </header>

      <hr />
    </DivHeader>
  );
}
