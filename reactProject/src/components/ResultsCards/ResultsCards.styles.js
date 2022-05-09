import styled from "styled-components";

export const CardsWrapper = styled.div`
    margin-top: 1rem;
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 1rem;
    &.mobile{
        grid-template-columns: 1fr;
    }

`