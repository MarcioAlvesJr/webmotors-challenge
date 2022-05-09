import { useFormikContext } from 'formik'
import React, { useContext, useEffect } from 'react'
import { GlobalQueriesContext } from '../../PageWrapper/PageWrapper'
import loadingOption from './loadingOption'
import noOptionSelected from './noOptionSelected'
import warningOption from './warningOption'


const useGetSelectedBrand = ()=>{
  return useFormikContext().values.model
}
const getSelectedModelId = (selectedModel, modelMutation)=>{
  const models = modelMutation.data
  const selectedModelId = models.find(model => model.Name === selectedModel).ID

  return selectedModelId
}
const useFetchModelsOnBrandChange = (selectedModel)=>{
  const {versionMutation,modelMutation} = useContext(GlobalQueriesContext)
  useEffect(()=>{
    if(selectedModel !== ""){
      debugger
      const selecteBrandId = getSelectedModelId(selectedModel, modelMutation)
      versionMutation.mutate(selecteBrandId)
    }
  },[selectedModel])
}

const VersionOptions = () => {
  const {versionMutation} = useContext(GlobalQueriesContext)
  
  const selectedModel = useGetSelectedBrand()
  useFetchModelsOnBrandChange(selectedModel)


  const noModelIsSelected = selectedModel === ""
  
  return <>
    { noModelIsSelected && warningOption("Selecione um modelo")}
    {!noModelIsSelected && versionMutation.isLoading && loadingOption("versões")}
    {!noModelIsSelected && versionMutation.data &&<>
      {noOptionSelected("Todos as versões")} 
      {versionMutation.data.map(model =>
        <option key={`${model.ID}-${model.Name}`} value={model.Name} >{model.Name}</option>    
      )}
      </>
    }
    </>
}

export default VersionOptions