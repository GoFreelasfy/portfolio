import React from "react";
import styled from "styled-components";
import { ErrorMessage, Formik, Field, Form } from 'formik';
import TextArea from "../form/textarea/TextArea";
import * as Yup from 'yup';

const phoneRegExp = /^(\+?\d{0,4})?\s?-?\s?(\(?\d{3}\)?)\s?-?\s?(\(?\d{3}\)?)\s?-?\s?(\(?\d{4}\)?)?$/;

const schema = Yup.object().shape({
    nome: Yup.string().required('Campo obrigatório!'),
    email: Yup.string().email().required('Campo obrigatório!'),
    telefone: Yup.string().min(11, 'Telefone inválido, minimo 11 caracteres!').max(14, "Numero de telefone inválido! Máximo 14 caracteres").required('Campo obrigatório!').matches(phoneRegExp).typeError("Formato de numero inválido"),
    assunto: Yup.string().max(999).required('Campo obrigatório!'),
    mensagem: Yup.string().required('Campo obrigatório!')

})



export default function NewForm() {


    const DivForm = styled.div`


    .form_control .form-error {
        color: red;
        margin-bottom: 1rem;
        position: relative;
        top: 0;
        
    }
     .form_control label {
      font-size: 18px;
      font-weight: 500;
      font-family: "Poppins", sans-serif;
      min-width: 100%;
      /* display: block; */
    }

    .form_control input {
      border-radius: 10px;
      border: none;
      margin: 10px auto 2rem auto;
    }

    .form_control .input::placeholder {
      color: var(--gray);
      font-family: "Montserrat", sans-serif;
      font-size: 14px;
    }

    /*Input text*/
    .form_control .input[type="text"],
    .form_control .input[type="email"],
    .form_control .input[type="tel"],
    .form_control [type="password"],
    .form_control [type="number"] {
      background-color: var(--white);
      border: none;
      border-radius: 10px;
      filter: drop-shadow(10px 10px 30px rgba(0, 0, 0, 0.07));
      padding: 1.2rem 0;
      width: 100%;
    }

    .form_control .input[type="text"],
    .form_control .input[type="email"],
    .form_control .input[type="tel"],
    .form_control [type="password"],
    .form_control [type="number"] {
      padding-left: 1rem;
      color: var(--black);
      font-family: "Montserrat", sans-serif;
      font-size: 14px;
    }

    /*Input date*/
    .form_control .input[type="date"] {
      background-color: var(--white);
      border: none;
      border-radius: 10px;
      filter: drop-shadow(10px 10px 30px rgba(0, 0, 0, 0.07));
      padding: 1.2rem 0;
      width: 100%;
    }
    `
    return (
        <DivForm>

            <Formik
                validationSchema={schema}
                initialValues={{

                    nome: '',
                    email: '',
                    telefone: '',
                    assunto: '',
                    mensagem: ''
                }}
                onSubmit={async (values) => {
                    await new Promise((r) => setTimeout(r, 500));
                    alert(JSON.stringify(values, null, 2));
                }}
            >

                <Form className="form">
                    <div className="form_control">
                        <div className="form_control_label_input">

                            <div className="field">
                                <label htmlFor="nome">Nome</label>
                                <Field className='input' type='text' id='nome' name='nome' placeholder='Digite o seu nome' />
                                <ErrorMessage className="form-error" component="span" name='nome' />

                                <br />
                                <br />

                                <label htmlFor="email">E-mail</label>
                                <Field className='input' id='email' type='email' name='email' placeholder='Digite o seu E-mail' />
                                <ErrorMessage className="form-error" component="span" name='email' />
                                <br />
                                <br />
                            </div>



                            <div className="field">
                                <label htmlFor="nome">Telefone</label>
                                <Field className='input' id='telefone' type='tel' name='telefone' placeholder='Digite o seu Telefone' />
                                <ErrorMessage className="form-error" component="span" name='telefone' />
                                <br />
                                <br />


                                <label htmlFor="nome">Assunto</label>
                                <Field className='input' id='assunto' type='text' name='assunto' placeholder='Digite o assunto da mensagem' />
                                <ErrorMessage className="form-error" component="span" name='assunto' />
                                <br />
                                <br />
                            </div>


                            <div className="field">
                                <label htmlFor="nome">Mensagem</label>
                                <TextArea id='mensagem' name='mensagem' placeholder='Digite a mensagem' />
                                <ErrorMessage className="form-error" component="span" name='mensagem' />
                                <br />

                            </div>

                            <button className="btn" type="enviar">ENVIAR</button>
                        </div>
                    </div>
                </Form>

            </Formik>
        </DivForm>




    )
}