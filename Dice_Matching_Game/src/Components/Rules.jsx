import React from 'react'
import styled from 'styled-components'

const Rules = () => {
  return (
    <ContainerForRules>
           
        <h2>How to play dice game?</h2>
        <div className="text">
            <p>1. Select any number.</p>
            <p>2. Click on the dice image to roll it.</p>
            <p>3. After clicking on dice, if the number you selected is equal to the dice number, then you will get same point as the dice number.</p>
            <p>4. But, if you get wrong guess then 2 points will be dedcuted.</p>
            <p>5. You will win the game if your score reaches 3 and will lose if it reaches -10.</p>
        </div>
    </ContainerForRules>
  )
}

export default Rules

const ContainerForRules = styled.div`
    background-color: #f4c3eb;
    padding: 20px;
    max-width: 800px;
    margin:  auto;
    margin-top: 20px;
    border-radius: 10px;
    h2{
        font-size: 20px;
        font-weight: bold;

    }
    .text{
        margin: 24px;
    }
    @media screen and (max-width:830px){
        h2{
            font-size: 27px;
        }
        .text{
            font-size: 23px;
        }
    }
`