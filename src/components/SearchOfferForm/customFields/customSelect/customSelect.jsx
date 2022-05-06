import { Field } from "formik"
import { AddDynamicPaddingToSelect, LabelSpanWrapper, Wrapper } from "./customSelect.styles"


const customSelect = props => {
  const fieldId = props.name
  return (
    <Wrapper id={fieldId + '-wrapper'}>
        <label htmlFor={fieldId}>
          <LabelSpanWrapper>
            <span>{props.label}:</span> 
            <strong> Todas</strong> 
          </LabelSpanWrapper>
        </label>
        <Field {...props} id={fieldId} as="select" >
          {props.options.map(option=> 
            <option key={option}>{option}</option>
          )}
        </Field>
    </Wrapper>
  )
}

export default customSelect