import React from 'react'
import styled from 'styled-components'

const ScoreCapture = ({score}) => {
    return (
        <TotalScoreContainer>
            <h1>{score}</h1>
            <p>Total Score</p>
        </TotalScoreContainer>
    )
}

export default ScoreCapture;

const TotalScoreContainer = styled.div`
    max-width: 200px;
    text-align: center;
    margin-left: 30px;
    h1{
        font-size: 70px;
    }
    p{
        font-size: 22px;
        font-weight: 500px;
    }
`