import styled from "styled-components";
import GameStart from "./Components/GameStart";
import { useState } from "react";
import GamePlay from "./Components/GamePlay";

function App() {
  const [hasGameStarted, sethasGameStarted] = useState(false);
  const toggleGamePlay = () =>{
    sethasGameStarted(prevState =>!prevState);
  }
  return (
    <>
    {
      hasGameStarted? <GamePlay toggle={toggleGamePlay}/> : <GameStart toggle={toggleGamePlay}/>
    }
      
    </>
  );
}

export default App;
