import React from 'react'
import { radiusOptions } from '../selectOptions/RadiusOptions'

const initialValues = () => {
  return {
      new: true,
      used: true,
      where: "São Paulo - SP",
      radius: radiusOptions[0],
      brand: "",
      model: "",
      year: "",
      priceRange: "",
      version: "",
  }
}

export default initialValues