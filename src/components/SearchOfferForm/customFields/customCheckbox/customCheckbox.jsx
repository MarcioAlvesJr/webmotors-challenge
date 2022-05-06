import { Field } from 'formik'
import React from 'react'
import { Wrapper } from './customCheckbox.styles'

const customCheckbox = props => {
  return (
    <Wrapper>
        <Field {...props} id={props.name} type="checkbox" />
        <label htmlFor={props.name}>
          <span>{props.label}</span>
        </label>
    </Wrapper>
  )
}

export default customCheckbox