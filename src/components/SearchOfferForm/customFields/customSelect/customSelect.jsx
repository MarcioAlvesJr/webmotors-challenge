import { Field, useFormikContext } from "formik"
import { AddDynamicPaddingToSelect, LabelSpanWrapper, Wrapper } from "./customSelect.styles"


const customSelect = props => {
  const fieldId = props.name
  return (
    <Wrapper id={fieldId + '-wrapper'}>
        {!props.simple &&
        <label htmlFor={fieldId}>
          <LabelSpanWrapper>
            <span>{props.simple ?? props.label}</span> 
            <FieldValue {...props}/>
          </LabelSpanWrapper>
        </label>}

        <Field {...props} id={fieldId} as="select" >
          {props.simple && <option value="">{props.label}</option> }
          {props.options.map(option=> 
            <option key={option}>{option}</option>
          )}
        </Field>
    </Wrapper>
  )
}
function FieldValue(props){
  const value = useFormikContext().values[props.name];

  return <span>: <strong>{value}</strong></span>
}

export default customSelect