import React, { createContext } from 'react'
import { useMutation, useQuery } from 'react-query'
import fetchManufacturer from '../../HTTP/fetchManufacturer'
import fetchModel from '../../HTTP/fetchModel'
import fetchVehicle from '../../HTTP/fetchVehicle'
import fethcVersion from '../../HTTP/fetchVersion'
import CarBikeSwitch from '../CarBikeSwitch/CarBikeSwitch'
import SearchOfferForm from '../SearchOfferForm/SearchOfferForm'
import SellMyCarBtn from '../SellMyCarBtn/SellMyCarBtn'
import { Wrapper } from './PageWrapper.styles'

export const GlobalQueriesContext = createContext()

const useGlobalQueries = ()=>{
  const manufacturerQuery = useQuery("manufacturer",fetchManufacturer)
  const modelMutation = useMutation('model', fetchModel)
  const vehicleMutation = useMutation('vehicle', fetchVehicle)
  const versionMutation = useMutation('vehicle', fethcVersion)

  return {manufacturerQuery, modelMutation, vehicleMutation, versionMutation}
}
const PageWrapper = () => {
  const GlobalQueries = useGlobalQueries()


  return (
    <GlobalQueriesContext.Provider value={GlobalQueries}>
      <Wrapper>
          <header>Logo</header>
          <CarBikeSwitch/>
          <SellMyCarBtn/>
          <SearchOfferForm/>
      </Wrapper>
    </GlobalQueriesContext.Provider>
  )
}

export default PageWrapper