import { Formik } from "formik";
import styled from "styled-components";
import {ReactComponent as MapPinSVG} from '../../imgs/svgs/mapPin.svg'

export const Wrapper = styled.div`
    background-color: ${({theme})=>theme.white};
    padding: 2rem 3rem;
`
export const CheckboxWrapper = styled.div`
    margin-top: 1rem;
    display: flex;
    gap: 2rem;
` 
export const InputsGrid = styled.div`
    margin-top: 1rem;
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    grid-template-rows: repeat(2, 3.4rem);
    gap: 1.5rem;

    &.mobile{
        grid-template-columns: 1fr;
        grid-template-rows: repeat(7, 3.4rem);
        
        & > *, #version-wrapper{
            grid-column: span 1;
            
        }
    }

    font-size: 1rem;

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
    grid-template-columns: 2fr 1fr;
`

export const AdvancedSearchBtn = styled.button`
    ::before{
        content: ">";
        display: inline-block;
        margin-right: 0.2rem;
    }
    font-size: 1.2rem;
    grid-column: span 2;
    width: fit-content;
    background-color: #ff000000;
    border: none;
    font-weight: bold;
    color: ${({theme})=>theme.dullRed};
`
export const ResetSubmitDiv= styled.div`
    margin-top: 0.48rem;
    grid-column: span 2;
    display: grid;
    gap: 1.5rem;
    grid-template-columns: 1fr 4fr;

    input[type="reset"]{
        background-color: #ff000000;
        border: none;
        color: ${({theme})=>theme.gray};
        font-size: 1rem;
        padding: 0;
    }
    
    input[type="submit"]{
        background-color: ${({theme})=>theme.brightRed};
        color: ${({theme})=>theme.white};
        border: none;
        font-weight: bolder;
        text-transform: uppercase;
        height: 4.5rem;
        font-size: 1.5rem;
        border-radius: 0.2rem;
    }

`
export const MapPinIcon = styled(MapPinSVG)`
height: 1rem;
transform: scale(1.5);
margin-right: 0.5rem;
`