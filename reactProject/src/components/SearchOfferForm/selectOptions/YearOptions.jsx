import React from 'react'
import noOptionSelected from './optionsPatterns/noOptionSelected'
import warningOption from './optionsPatterns/warningOption'


const getThelastXYears = amountOfYears =>{
    const newArray = []
    const thisYear = new Date().getFullYear()

    for(let i=0; i < amountOfYears; i++){
        const year = thisYear - i
        newArray.push({fab: year, model: year})
        newArray.push({fab: year -1, model: year})
        newArray.push({fab: year, model: year-1})
    }

    return newArray.map(item=>{
        return {...item,
        label: `${item.fab}/${item.model}`
        }
    })

}
export const yearOptions = getThelastXYears(100)

const YearOptions = () => {
    return <>
    {warningOption("Fabricação/Modelo")}
    {noOptionSelected("Ano Desejado")}
    {yearOptions.map( option =>
        <option key={option.label} value={option.label} >{option.label}</option>
      )}
    </> }

export default YearOptions