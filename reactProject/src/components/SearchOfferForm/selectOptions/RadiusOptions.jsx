import React from 'react'

export const radiusOptions = ["100km", "200km", "300km","400km", "500km", "600km", "700km", "800km", "900km"]
const RadiusOptions = () => {
  return radiusOptions.map( option =>
    <option key={option} value={option} >{option}</option>
  )
}

export default RadiusOptions