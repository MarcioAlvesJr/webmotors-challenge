import styled from "styled-components";

export const Wrapper = styled.div`
background-color: ${({theme})=>theme.white};
display: grid;
gap: 1rem;
grid-template-columns: 2fr 2fr;
&.mobile{
    grid-template-columns: 1fr 2fr;
}
padding: 1rem;

.title{
    font-size: 1.5rem;
}
.price{
    font-size: 1.25rem;
    font-weight: bolder;
}
img{
    grid-row: 1 / 6;
    max-width: 100%;
}
`