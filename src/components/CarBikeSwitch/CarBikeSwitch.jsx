import React from 'react'

const CarBikeSwitch = () => {
  const Button = props => {
    const {vehicle} = props
    return(
      <button type='button'>
        icon
        <span>comprar</span>
        <span>{vehicle}</span>
      </button>
    ) 
  }
  return (
    <div>
      <Button vehicle="Carros"/>
      <Button vehicle="Motos"/>
    </div>
  )
}

export default CarBikeSwitch