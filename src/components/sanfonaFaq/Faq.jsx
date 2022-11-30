import React, { useState } from 'react'
import { IconContext } from 'react-icons'
import { FiPlus, FiMinus } from 'react-icons/fi'
import styled from 'styled-components'


const DivFaq = styled.div`
margin: 0;

.caixa{
    margin: 0 auto;
    width: 100%;

    h1{
        display: flex;
        width: 100%;
        font-family: "Poppins", sans-serif;
        font-size:1.5rem;
        font-weight: 500;
        padding: 1rem 0;
        border-bottom: solid 2px var(--gray);
        flex-wrap: wrap;
      }
      p{
        font-size: 1.25rem;
        padding: 2rem 0;
        font-family: "Poppins", sans-serif;
        color: var(--gray);
        font-weight: 500;


      }
}
.resposta{

}

`
const Wrap = styled.div`
    justify-content: center;
    align-items: center;
    cursor: pointer;
    width: 100%;
    display: flex;
    position: relative;
    margin-bottom: 1rem;

    span {
        padding-left: 2rem;
        padding-right: 2rem;
        right: 5rem;
        position: relative;
        font-size: 2rem;
        width: 1rem;

    }
`


const Faq = ({ data }) => {

    const [clicked, setClicked] = useState(false)

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

                        <div className="caixa">
                            <Wrap onClick={() => toggle(index)} key={index}>
                                <h1>{item.pergunta}</h1>
                                <span>{clicked === index ? <FiMinus /> : <FiPlus />}</span>
                            </Wrap>
                            {clicked === index ? (

                                <div className="resposta">
                                    <p>{item.resposta}</p>
                                </div>

                            ): null}

                        </div>

                    )
                })}
            </DivFaq>
        </IconContext.Provider>
    )
}

export default Faq