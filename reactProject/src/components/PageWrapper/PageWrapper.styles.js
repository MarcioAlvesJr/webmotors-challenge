import styled from "styled-components";
import { ReactComponent as LogoSvg } from '../../imgs/svgs/webmotors.svg'

export const Wrapper = styled.div`
    height: 312px;
    width: 933px;
    margin: auto;

    &.mobile{
        height: unset;
        width: unset;
    }
`
export const CarBike_SellCarDiv = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;

    &.mobile{
        flex-direction: column-reverse;
        gap: 1rem;
        justify-content: center;
        align-items: center;
    }
    
`

export const WebMotorsLogo = styled(LogoSvg)`

margin-top: 1rem;
margin-bottom: 2.5rem;

`