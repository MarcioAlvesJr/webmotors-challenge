import styled from "styled-components";

export const CustomBtn = styled.button`
    cursor: pointer;
    border: 2px solid ${({theme})=>theme.yellow};
    padding: 0.5rem 1.5rem;
    height: fit-content;

    background-color: #ff000000;
    color: ${({theme})=>theme.yellow};
    font-size: 1rem;
    font-weight: bolder;

    &:hover{
        color: ${({theme})=>theme.lightGray};
        border: 2px solid ${({theme})=>theme.yellow};
        background-color: ${({theme})=>theme.yellow};

    }
`