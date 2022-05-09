import React, { useContext, useState } from 'react'
import { Wrapper } from './Card.styles'
import ErrorSvg from '../../imgs/svgs/error.svg';
import { MediaQueryContext } from '../PageWrapper/PageWrapper';

const {format} = new Intl.NumberFormat('pt-BR', {
  style: 'currency',
  currency: 'BRL',
});
const Card = props => {
  const mobile = useContext(MediaQueryContext)
  const [imageSrc, setImageSrc] = useState(props.Image)
  const onError = ()=> setImageSrc(ErrorSvg)
    
  
    

  return (
    <Wrapper className={mobile}>
            <img src={imageSrc} {...{onError}}/>
            <div className='title'>{props.Make} {props.Model} - {props.Color}</div>
            <div className='price'>{format(parseFloat(props.Price))}</div>
            <div className='version'>{props.Version}</div>
            <div className='yearFab'>Fabricação:{props.YearFab}</div>
            <div className='yearModel'>Modelo:{props.YearModel}</div>
    </Wrapper>
  )
}

export default Card