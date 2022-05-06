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