import { useEffect } from "react";
import styled from "styled-components";

export const Wrapper = styled.div`
position: relative;

label{
    position: absolute;
    padding: 0 0.5rem ;
    user-select: none;
}
`
export const AddDynamicPaddingToSelect = props =>{
    const {fieldId} = props
    useEffect(()=>{
        const field = document.getElementById(fieldId)
        const label = document.querySelector(`label[for=${fieldId}]`)
        
        field.style.paddingLeft = label.clientWidth + "px"
    },[props])
}