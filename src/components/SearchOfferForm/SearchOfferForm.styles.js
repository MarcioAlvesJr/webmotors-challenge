import { Formik } from "formik";
import styled from "styled-components";

export const Wrapper = styled.div`
form{
    height: 312px;
    width: 933px;
    background-color: ${({theme})=>theme.white};
    padding: 2rem 3rem;
}
`
export const CheckboxWrapper = styled.div`
    display: flex;
    gap: 2rem;
` 
export const InputsGrid = styled.div`
    margin-top: 1rem;
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    grid-template-rows: repeat(2, 2.3rem);
    gap: 1rem;
    select{
        width: 100%;
        height: 100%;
    }
    #version-wrapper{
        grid-column: span 2;
    }
`
export const  WhereRadiusDiv = styled.div`
    grid-column: span 2;
    display: grid;
    grid-template-columns: 4fr 1fr;
`

export const AdvancedSearchBtn = styled.button`
    ::before{
        content: ">";
        display: inline-block;
        margin-right: 0.2rem;
    }
    grid-column: span 2;
    width: fit-content;
    background-color: #ff000000;
    border: none;
    font-weight: bold;
    color: ${({theme})=>theme.dullRed};
`
export const ResetSubmitDiv= styled.div`
    grid-column: span 2;
    display: grid;
    gap: 1.5rem;
    grid-template-columns: 1fr 4fr;

    input[type="reset"]{
        background-color: #ff000000;
        border: none;
        color: ${({theme})=>theme.gray};
    }
    
    input[type="submit"]{
        background-color: ${({theme})=>theme.brightRed};
        color: ${({theme})=>theme.white};
        border: none;
        font-weight: bolder;
        text-transform: uppercase;
        height: 2.8rem;
        border-radius: 0.2rem;
    }

`