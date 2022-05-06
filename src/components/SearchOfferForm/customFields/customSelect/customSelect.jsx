import { Field } from "formik"
import { AddDynamicPaddingToSelect, Wrapper } from "./customSelect.styles"


const customSelect = props => {
  const fieldId = props.name
  return (
    <Wrapper>
        <label htmlFor={fieldId}>{props.label}</label>
        <Field {...props} id={fieldId} as="select" >
          {props.options.map(option=> 
            <option key={option}>{option}</option>
          )}
        </Field>
        <AddDynamicPaddingToSelect {...{fieldId}}/>
    </Wrapper>
  )
}

export default customSelect