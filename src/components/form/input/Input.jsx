import React from "react";
import styled from "styled-components";
export default function Input({
  type,
  text,
  name,
  id,
  placeholder,
  onChange,
  value,
}) {
  const DivInput = styled.div`
    /*Input no geral*/
    .form_control label {
      font-size: 16px;
      font-weight: 500;
      font-family: "Poppins", sans-serif;
      /* display: block; */
    }

    .form_control input {
      border-radius: 10px;
      border: none;
      margin: 10px auto 2rem auto;
      background-color: red;
    }

    .form_control input::placeholder {
      color: var(--gray);
      font-family: "Montserrat", sans-serif;
      font-size: 14px;
    }

    /*Input text*/
    .form_control input[type="text"],
    .form_control input[type="email"],
    .form_control input[type="tel"],
    .form_control [type="password"],
    .form_control [type="number"] {
      background-color: var(--white);
      border: none;
      border-radius: 10px;
      filter: drop-shadow(10px 10px 30px rgba(0, 0, 0, 0.07));
      padding: 1.2rem 0;
      width: 100%;
    }

    .form_control input[type="text"],
    .form_control input[type="email"],
    .form_control input[type="tel"],
    .form_control [type="password"],
    .form_control [type="number"] {
      padding-left: 1rem;
      color: var(--black);
      font-family: "Montserrat", sans-serif;
      font-size: 14px;
    }

    /*Input date*/
    .form_control input[type="date"] {
      background-color: var(--white);
      border: none;
      border-radius: 10px;
      filter: drop-shadow(10px 10px 30px rgba(0, 0, 0, 0.07));
      padding: 1.2rem 0;
      width: 100%;
    }
  `;
  return (
    <DivInput>
      <div className="form_control">
        <div className="form_control_label_input">
          <label htmlFor={id}>{text}</label>
          <input
            type={type}
            name={name}
            id={id}
            placeholder={placeholder}
            onChange={onChange}
            value={value}
          />
        </div>
      </div>
    </DivInput>
  );
}
