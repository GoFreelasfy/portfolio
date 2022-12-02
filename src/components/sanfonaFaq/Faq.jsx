import React, { useState } from 'react'
import { IconContext } from 'react-icons'
import { FiPlus, FiMinus } from 'react-icons/fi'
import styled from 'styled-components'


const DivFaq = styled.div`
margin: 0;

.caixa{
    
    margin: 0 auto;
    width: 100%;
    border-bottom: solid 2px var(--gray);
    align-items: center;
    justify-content: center;

    h1{

        display: flex;
        width: 100%;
        font-family: "Poppins", sans-serif;
        font-size:1.5rem;
        font-weight: 500;
        padding: 1rem 0;
      }
      p{
        font-size: 1.25rem;
        padding: 2rem 0;
        font-family: "Poppins", sans-serif;
        color: var(--gray);
        font-weight: 500;


      }
}



`
const Wrap = styled.div`

    gap: 20rem;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    width: 100%;
    display: flex;
    position: relative;
    margin-bottom: 1rem;

    span {
        align-items: center;
        justify-content: center;
        padding-left: 10rem;
        right: 3rem;
        top: 1rem;
        position: relative;
        font-size: 2rem;
        width: 1rem;

    }

    @media (max-width: 770px) {
        gap: 10rem;
}
    @media (max-width: 598px) {
        justify-content: space-between;
        gap: 4rem;
}
    @media (max-width: 488px) {
        gap: 0rem;
}


`



const Faq = ({ data }) => {

    const [show, setShow] = useState(false)

    const [clicked, setClicked] = useState(false)

    const visible = data => {
        if (data[index].visivel == true) {
            setBtnClicked(false)
        } else {
            setBtnClicked(true)
        }
    }



    const toggle = index => {
        if (clicked === index) {

            return setClicked(null)
        }

        setClicked(index)
    }


    return (
        <IconContext.Provider value={{ color: 'var(--orange-dark)' }}>

            <DivFaq>
                {data.map((item, index) => {
                    return (
                        <div className="global">
                     
                            {index >= 6 ?
                                <div className="controle">
                                    <div className="caixa">
                                        <Wrap onClick={() => toggle(index)} key={index}>
                                            <h1>{item.pergunta}</h1>
                                            <span>{clicked === index ? <FiMinus /> : <FiPlus />}</span>
                                        </Wrap>

                                    </div>
                                    {clicked === index ? (

                                        <div className="resposta">
                                            <p>{item.resposta}</p>
                                        </div>

                                    ) : null}

                                </div>
                                : null}
                        </div>



                    )

                })}

                <div className="botao">
                    <button onClick={() => setShow(true)} ></button>
                </div>
            </DivFaq>
        </IconContext.Provider>
    )
}

export default Faq