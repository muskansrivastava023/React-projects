import React, { useEffect, useState } from 'react'
import ScoreCapture from './ScoreCapture'
import SelectNumber from './SelectNumber'
import styled from 'styled-components'
import DiceRolling from './DiceRolling'
import { Button } from '../styled/ButtonStyling'
import Rules from './Rules'


const GamePlay = ({ toggle }) => {
  const [score, setscore] = useState(0)
  const [selectedNumber, setselectedNumber] = useState();
  const [currDiceNumber, setcurrDiceNumber] = useState(1);
  const [error, seterror] = useState("");
  const [showRules, setshowRules] = useState(false);
  const [gameOver, setgameOver] = useState(false)

  const RandomDiceNumber = (min, max) => {
    return (Math.floor(Math.random() * (max - min) + min));
  }

  const onDiceRoll = () => {
    if (!selectedNumber) {
      seterror("Please select a number first");
      return;
    };

    const randomDice = RandomDiceNumber(1, 7);
    setcurrDiceNumber((i) => randomDice);

    if (selectedNumber === randomDice) {
      setscore((curr) => curr + randomDice)
    }
    else {
      setscore((curr) => curr - 2);
    }
    setselectedNumber(undefined)
  }

  const resetGame = () => {
    setscore(0);
  }

  useEffect(() => {
    // SCORE CONDITIONS CAN BE CHANGED ACCORDINGLY
    if (score >= 3 || score<=-10) {
      setgameOver(true)
    }
  }, [score])

  const playAgain = () => {
    resetGame();
    setgameOver(false)
  }
  return (
    <MainContainer>
      <div className='topSection'>
        <ScoreCapture score={score} />
        <SelectNumber selectedNumber={selectedNumber} setselectedNumber={setselectedNumber} error={error} seterror={seterror} />

      </div>
      <DiceRolling currDiceNumber={currDiceNumber} onDiceRoll={onDiceRoll} />
      <div className="buttons">
        <Button className='btns' onClick={resetGame}>Reset Score</Button>
        <Button className='btns' onClick={toggle}>Exit Game</Button>
        <Button className='btns'
          onClick={() => setshowRules((curr) => (!curr))}>
          {showRules ? "Hide " : "Show "}
          rules</Button>
      </div>
      {showRules && <Rules />}
      {gameOver && (
        <PopupContainer>
          <PopupText>
            <p>{score>=3?"Congratulations":"Oops"}! You {score>=3?"won":"lost"} the game. Do you want to play again?</p>
            <Button className='popupButton' onClick={playAgain}>Yes</Button>
            <Button className='popupButton' onClick={toggle}>No,exit game</Button>
          </PopupText>
        </PopupContainer>
      )}
    </MainContainer>
  )
}

export default GamePlay;
const MainContainer = styled.main`
background-image: url('/images/gameBg2.jpg');
background-repeat: no-repeat;
  background-attachment: fixed;
  background-size: 100% 100%;
  padding: 10px;
.topSection{
  display: flex;
  justify-content: space-between;
  align-items: end;
}
.buttons{
  margin-top: 15px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 10px;
}
`;

const PopupContainer = styled.div`
  background-image: url('/images/dices.jpg');
  background-repeat: no-repeat;
  background-attachment: fixed;
  background-size: 100% 100%;
  top:0;
  left: 0;
  bottom: 0;
  right: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  position: fixed;
`

const PopupText = styled.div`
  
  p{
    margin: 10px;
  }
  .popupButton{
    margin: 10px;
  }
  
`