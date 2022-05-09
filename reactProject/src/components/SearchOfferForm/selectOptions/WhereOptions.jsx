import React from 'react'
import cities from './Cidades.json'
import states from './Estados.json'


const whereOptions = cities.map(city=>{
    const findState = {...city,
        Estado: states.find(state => state.ID === city.Estado).Sigla
    }
    return {...findState,
        label: `${findState.Nome} - ${findState.Estado}` 

    }
})

const WhereOptions = () => {
  return <>
        {whereOptions.map( option =>
        <option key={option.ID} value={option.label} >{option.label}</option>
      )}
  </>
}

export default WhereOptions