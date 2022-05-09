import React, { createContext, useState } from 'react'
import { useMutation, useQuery } from 'react-query'
import fetchManufacturer from '../../HTTP/fetchManufacturer'
import fetchModel from '../../HTTP/fetchModel'
import fetchVehicle from '../../HTTP/fetchVehicle'
import fethcVersion from '../../HTTP/fetchVersion'
import CarBikeSwitch from '../CarBikeSwitch/CarBikeSwitch'
import ResultsCards from '../ResultsCards/ResultsCards'
import SearchOfferForm from '../SearchOfferForm/SearchOfferForm'
import SellMyCarBtn from '../SellMyCarBtn/SellMyCarBtn'
import { CarBike_SellCarDiv, WebMotorsLogo, Wrapper } from './PageWrapper.styles'

export const GlobalQueriesContext = createContext()
export const GlobalFiltersContext = createContext()

const useGlobalQueries = ()=>{
  const manufacturerQuery = useQuery("manufacturer",fetchManufacturer)
  const modelMutation = useMutation('model', fetchModel)

  const versionMutation = useMutation('vehicle', fethcVersion)

  return {manufacturerQuery, modelMutation, versionMutation}
}
const useGlobalFilters = ()=>{
  const [filters, setFilters] =  useState()
  return {filters, setFilters}
}
const PageWrapper = () => {
  const GlobalQueries = useGlobalQueries()
  const GlobalFilters = useGlobalFilters()


  return (
    <GlobalQueriesContext.Provider value={GlobalQueries}>
    <GlobalFiltersContext.Provider value={GlobalFilters}>
      <Wrapper>
          <WebMotorsLogo/>
          <CarBike_SellCarDiv>
            <CarBikeSwitch/>
            <SellMyCarBtn/>
          </CarBike_SellCarDiv>
          <SearchOfferForm/>
          <ResultsCards/>
      </Wrapper>
    </GlobalFiltersContext.Provider>
    </GlobalQueriesContext.Provider>
    
  )
}

export default PageWrapper