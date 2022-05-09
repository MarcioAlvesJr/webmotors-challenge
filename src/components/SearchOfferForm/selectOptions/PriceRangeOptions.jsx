import React from 'react'
import noOptionSelected from './optionsPatterns/noOptionSelected'


const priceRangeOptions = [
    "até 10k",
    "10k até 20k",
    "20k até 30k",
    "30k até 40k",
    "50k até 60k",
    "70k até 80k",
    "80k até 90k",
    "90k até 100k"
]
const PriceRangeOptions = () => {
  return <>
      {noOptionSelected("Faixa de Preço")}
      {priceRangeOptions.map( option =>
        <option key={option} value={option} >{option}</option>
      )}
</>
}

export default PriceRangeOptions