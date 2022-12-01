import React from "react";
import styled from "styled-components";
export default function TextArea({ name, id, text, placeholder }) {
  const DivTextArea = styled.div`
    .form_control label {
      font-size: 16px;
      font-weight: 500;
      font-family: "Poppins", sans-serif;
      /* display: block; */
    }

    .form_control textarea::placeholder {
      color: var(--gray);
      font-family: "Montserrat", sans-serif;
      font-size: 14px;
    }

    .form_control textarea {
      background-color: var(--white);
      border: none;
      border-radius: 10px;
      filter: drop-shadow(10px 10px 30px rgba(0, 0, 0, 0.07));
      padding-top: 30px;
      padding-left: 20px;

      margin-top: 10px;
      margin-bottom: 2rem;
      display: block;
      width: 99%;
      padding-left: 1rem;
      color: var(--black);
      font-family: "Montserrat", sans-serif;
      font-size: 14px;
    }

    @media (max-width: 1200px) {
      .form_control textarea {
        width: 90%;
      }
    }
  `;
  return (
    <>
      <DivTextArea>
        <div className="form_control">
          <label htmlFor={id}>{text}</label>
          <textarea
            name={name}
            id={id}
            rows="10"
            placeholder={placeholder}
          ></textarea>
        </div>
      </DivTextArea>
    </>
  );
}
