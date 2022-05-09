import React, { useContext } from 'react'
import { GlobalQueriesContext } from '../../PageWrapper/PageWrapper'
import loadingOption from './optionsPatterns/loadingOption'
import noOptionSelected from './optionsPatterns/noOptionSelected'

const BrandOptions = () => {
    const {manufacturerQuery} = useContext(GlobalQueriesContext)
  return <>
        {manufacturerQuery.IsLoading && loadingOption("marcas")}
        {manufacturerQuery.data && <>
            {noOptionSelected("Todas as marcas")}
            {manufacturerQuery.data.map(brand =>
                <option key={`${brand.ID}-${brand.Name}`} value={brand.Name} >{brand.Name}</option>    
            )}
            </>
        }
    
    </>
}

export default BrandOptions