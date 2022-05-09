import { useEffect } from "react";
import styled from "styled-components";

export const Wrapper = styled.div`
position: relative;

label{
    position: absolute;
    padding: 0 0.1rem ;
    pointer-events: none;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    color: ${({theme})=>theme.darkGray};
}
select{
    border-color: ${({theme})=>theme.darkGray};
    border-radius: 0.2rem;
}

`
export const LabelSpanWrapper = styled.div`
    background-color: ${({theme})=>theme.white};
    padding: 0 0.5rem;
`
export const AdvancedSearchBtn = styled.button`

`