import React, { useState } from 'react'
import { BtnWrapper, CustomBtn } from './CarBikeSwitch.styles'
import { ReactComponent as CarSvg } from './svgs/car.svg'
import { ReactComponent as MotorcycleSvg } from './svgs/motorcycle.svg'


const CAR = "CAR"
const BIKE = "BIKE"
const CarBikeSwitch = () => {
  const [activeVehicle, setActiveVehicle] = useState(CAR)

  const setToCar = ()=> setActiveVehicle(CAR)
  const setToBike = ()=> setActiveVehicle(BIKE)

  const Button = props => {
    const {vehicle, className, onClick,icon} = props
    return(
      <CustomBtn type='button' {...{className, onClick}}>
        <span className='icon'>{icon}</span>
        <span className='buy'>comprar</span>
        <span className='vehicle'>{vehicle}</span>
      </CustomBtn>
    ) 
  }
  return (
    <BtnWrapper>
      <Button icon={<CarSvg/>} vehicle="Carros" className={activeVehicle === CAR ? "active" : ""} onClick={setToCar}/>
      <Button icon={<MotorcycleSvg/>} vehicle="Motos" className={activeVehicle === BIKE ? "active" : ""} onClick={setToBike}/>
    </BtnWrapper>
  )
}

export default CarBikeSwitch