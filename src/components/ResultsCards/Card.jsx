import React from 'react'
import { Wrapper } from './Card.styles'

const Card = props => {
    debugger

  return (
    <Wrapper>
        <ul>
            <li>{props.ID}</li>
            <li>{props.Color}</li>
            <img src={props.Image}/>
            <li>{props.Make}</li>
            <li>{props.Model}</li>
            <li>Preço: {props.Price}</li>
            <li>{props.Version}</li>
            <li>Ano Fabricação:{props.YearFab}</li>
            <li>Ano Modelo:{props.YearModel}</li>
        </ul>
    </Wrapper>
  )
}

export default Card