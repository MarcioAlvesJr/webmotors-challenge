import React from 'react'
import noOptionSelected from './optionsPatterns/noOptionSelected'


export const priceRangeOptions = [
    {max: 10},
    {min: 10, max: 20},
    {min: 20, max: 30},
    {min: 30, max: 40},
    {min: 40, max: 50},
    {min: 50, max: 60},
    {min: 60, max: 70},
    {min: 70, max: 80},
    {min: 80, max: 90},
    {min: 90, max: 100},
    {min: 100},

].map(option =>{
  return {...option, label: 
    !option.max? `A partir de ${option.min}k`:
    !option.min? `Até ${option.max}k`:
    `${option.min}k até ${option.max}k`
  }
})
const PriceRangeOptions = () => {
  return <>
      {noOptionSelected("Faixa de Preço")}
      {priceRangeOptions.map( option =>
        <option key={option.label} value={option.label} >{option.label}</option>
      )}
</>
}

export default PriceRangeOptions