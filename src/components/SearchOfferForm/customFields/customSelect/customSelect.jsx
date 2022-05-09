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

        <Field name={props.name} id={fieldId} as="select" >
          {props.options}
        </Field>
    </Wrapper>
  )
}
function FieldValue(props){
  const value = useFormikContext().values[props.name];

  return <span>: <strong>{value === ""? props.notSelectedText : value}</strong></span>
}

export default customSelect