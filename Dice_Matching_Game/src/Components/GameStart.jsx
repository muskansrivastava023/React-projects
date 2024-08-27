import React from 'react'
import styled from 'styled-components'
import { Button } from '../styled/ButtonStyling';

const GameStart = ({toggle}) => {
  return (
    <Container>
        <div>
            <img src="/images/diceImage.png" alt="" />
        </div>
       <div className='playText'>
        <h1>Dice Game</h1>
        <Button onClick={toggle}> Play Now</Button>
       </div>
    </Container>
  )
}

export default GameStart;

const Container = styled.div`
    max-width: 100%;
    height: 85vh;
    display: flex;
    margin: 0 auto;
    align-items: center;

    .playText h1{
        font-size: 80px;
        white-space: nowrap;
    }
`;