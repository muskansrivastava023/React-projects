import React, { useState } from 'react'
import styled from 'styled-components';

// PASSING currDiceNumber,onDiceRoll AS PROPS HERE, AS WE HAVE DECLARED KIND OF GLOBALLY IN GamePlay.jsx AS WE WANTED TO COMPARE SELECTED NUMBER AND DICE NUMBER
const DiceRolling = ({currDiceNumber,onDiceRoll}) => {
    
    
  return (
    <DiceContainer>
        <div className='dice'
        onClick={onDiceRoll}>
            <img src={`/images/dice/dice-${currDiceNumber}.png`}  alt="dice 1" className='diceNumber' />
        </div>
        <p>Click on dice to roll!</p>
    </DiceContainer>
  )
}

export default DiceRolling;
const DiceContainer = styled.div`
    margin-top: 25px;
    display: flex;
    flex-direction: column;
    align-items: center;
    .dice{
        cursor: pointer;
    }
    .diceNumber{
        width: 200px;
    }
    p{
        font-size: 18px;
        color: #590a0a;
    }
`