import React from 'react'
import styled from 'styled-components'


const SelectNumber = ({selectedNumber,setselectedNumber,error,seterror}) => {

    const arrayNumber = [1, 2, 3, 4, 5, 6];

    const NumberHandler = (value)=>{
        setselectedNumber(value);
        seterror("");
        
    }
    
    return (
        <SelectedNumberContainer>
            <p className='error'>{error}</p>
            <div className='flex'>
                {
                    arrayNumber.map((value, i) => (
                        <NumberBox key={i}
                            isSelected={
                                value === selectedNumber
                            }
                            onClick={()=>NumberHandler (value)}
                           
                        >{value}</NumberBox>

                    ))
                }

            </div>
            <p>Select a Number</p>
        </SelectedNumberContainer>
    )
}

export default SelectNumber;
const SelectedNumberContainer = styled.div`
display: flex;
flex-direction: column;
align-items: end;
margin-right: 20px;
    .error{
        color: red;
    }
    .flex{
        display: flex;
        gap: 15px;

    }
    p{
        font-size: 18px;
        font-weight: 24px;
    }
`
const NumberBox = styled.div`
    height: 70px;
    width: 70px;
    border: 1px solid black;
    border-radius: 5px;
    display: grid;
    place-items: center;
    font-size: 24px;
    font-weight: 700;
    cursor: pointer;
    background-color: ${(props) => props.isSelected ? "black" : "white"};
    color: ${(props) => props.isSelected ? "white" : "black"};

`