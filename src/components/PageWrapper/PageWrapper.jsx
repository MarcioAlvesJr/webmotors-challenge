import React from 'react'
import CarBikeSwitch from '../CarBikeSwitch/CarBikeSwitch'
import SearchOfferForm from '../SearchOfferForm/SearchOfferForm'
import SellMyCarBtn from '../SellMyCarBtn/SellMyCarBtn'

const PageWrapper = () => {
  return (
    <div>
        <header>Logo</header>
        <CarBikeSwitch/>
        <SellMyCarBtn/>
        <SearchOfferForm/>
    </div>
  )
}

export default PageWrapper