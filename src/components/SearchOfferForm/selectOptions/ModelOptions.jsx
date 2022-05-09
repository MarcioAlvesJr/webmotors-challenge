import { useFormikContext } from 'formik'
import React, { useContext, useEffect } from 'react'
import { GlobalQueriesContext } from '../../PageWrapper/PageWrapper'
import loadingOption from './optionsPatterns/loadingOption'
import noOptionSelected from './optionsPatterns/noOptionSelected'
import warningOption from './optionsPatterns/warningOption'


const useGetSelectedBrand = ()=>{
  return useFormikContext().values.brand
}
const getSelectedBrandId = (selectedBrand, manufacturerQuery)=>{
  const brands = manufacturerQuery.data
  const selectedBrandId = brands.find(brand => brand.Name === selectedBrand).ID

  return selectedBrandId
}
const useFetchModelsOnBrandChange = (selectedBrand)=>{
  const {modelMutation,manufacturerQuery} = useContext(GlobalQueriesContext)
  useEffect(()=>{
    if(selectedBrand !== ""){
      const selecteBrandId = getSelectedBrandId(selectedBrand, manufacturerQuery)
      modelMutation.mutate(selecteBrandId)
    }
  },[selectedBrand])
}

const ModelOptions = () => {
  const {modelMutation} = useContext(GlobalQueriesContext)
  const selectedBrand = useGetSelectedBrand()
  useFetchModelsOnBrandChange(selectedBrand)


  const noBrandIsSelected = selectedBrand === ""
  
  return <>
    { noBrandIsSelected && warningOption("Selecione uma marca")}
    {!noBrandIsSelected && modelMutation.isLoading && loadingOption("modelos")}
    {!noBrandIsSelected && modelMutation.data &&<>
      {noOptionSelected("Todos os modelos")}
      {modelMutation.data.map(model =>
        <option key={`${model.ID}-${model.Name}`} value={model.Name} >{model.Name}</option>    
      )}
      </>
    }
    </>
}

export default ModelOptions