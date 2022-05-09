import styled from "styled-components";

export const BtnWrapper = styled.div`
display: flex;
`
export const CustomBtn = styled.button`
&:hover{
    cursor: pointer;
}
border: none;
border-bottom: 4px solid #ff000000;
background-color: #ff000000;

display: grid;
column-gap: 1rem;
grid-template-columns: 3.5rem 8rem;


.icon{
    grid-row: span 2;
    svg{
        fill: ${({theme})=>theme.gray};
    }


}
.buy{
    text-align: left;
    text-transform: uppercase;
    color: ${({theme})=>theme.gray};
    
}
.vehicle{
    text-align: left;
    text-transform: uppercase;
    font-size: 1.5rem;
    color: ${({theme})=>theme.gray};

}

&.active{
    .vehicle{
        color: ${({theme})=>theme.dullRed};
    }
    .icon svg{
        fill: ${({theme})=>theme.dullRed};
    }
    
    border-bottom: 4px solid ${({theme})=>theme.dullRed};
}
`