import { useFormikContext } from 'formik'
import { useEffect, useRef } from 'react'


const resetConfig =[
    {fieldToListen: "brand", fieldToReset:"model"},
    {fieldToListen: "model", fieldToReset:"version"}
]

const resetFields = props =>{
    const {initialValues, currentValues, setFieldValue} = props
    const previousValues = props.previousValues.current

    resetConfig.map(({fieldToListen, fieldToReset})=>{

        if(previousValues[fieldToListen] !== currentValues[fieldToListen]){
            setFieldValue(fieldToReset, initialValues[fieldToReset])
        }
    })
}
//This hook has to be called over the <Formik/> component in the component tree
const useResetOnValueChange = ({initialValues}) => {
    const previousValues = useRef(initialValues)

    //This componet has to be under the <Formik/> component in the component tree
    const ResetOnValueChange = ()=>{
        const {setFieldValue, values: currentValues} = useFormikContext()
        
        useEffect(()=>{
            resetFields({initialValues, previousValues, currentValues, setFieldValue})
            previousValues.current = currentValues

        },[currentValues])

    }

    return ResetOnValueChange
}

export default useResetOnValueChange