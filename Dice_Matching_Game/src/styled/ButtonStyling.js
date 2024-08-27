import styled from "styled-components";
export const Button = styled.button`
    padding: 10px 18px;
    color: white;
    font-family: "Playwrite DK Loopet", cursive;
    background: #000000;
    border-radius: 5px;
    min-width: 220px;
    border: none;
    font-size: 16px;
    transition: 0.2s background ease-in;
    cursor: pointer;


    &:hover{
        background-color: #383838;
        transition: 0.2s background ease-in;
    }
`;