import React from 'react'
import noOptionSelected from './optionsPatterns/noOptionSelected'


const getThelastXYears = amountOfYears =>{
    const newArray = []
    const thisYear = new Date().getFullYear()

    for(let i=0; i < amountOfYears; i++){
        newArray.push(thisYear - i)
    }

    return newArray

}
export const yearOptions = getThelastXYears(100)

const YearOptions = () => {
    return <>
    {noOptionSelected("Ano Desejado")}
    {yearOptions.map( option =>
        <option key={option} value={option} >{option}</option>
      )}
    </> }

export default YearOptions