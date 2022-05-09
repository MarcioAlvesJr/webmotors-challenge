import { Field, Form, Formik } from 'formik';
import { useContext } from 'react';
import { GlobalQueriesContext } from '../PageWrapper/PageWrapper';
import BrandOptions from './selectOptions/BrandOptions';
import checkbox from './customFields/customCheckbox/customCheckbox';
import select from './customFields/customSelect/customSelect';
import initialValues from './initialValues';
import { AdvancedSearchBtn, CheckboxWrapper, InputsGrid, ResetSubmitDiv, WhereRadiusDiv, Wrapper } from './SearchOfferForm.styles';
import ModelOptions from './selectOptions/ModelOptions';
import VersionOptions from './selectOptions/VersionOptions';

const SearchOfferForm = () => {

  const formikProps = {
    initialValues: initialValues()
  }
  const test = useContext(GlobalQueriesContext)
  console.log(test)
  return (
    <Wrapper>
    <Formik {...formikProps}>
      <Form>
        <CheckboxWrapper>
          {checkbox({name:"new", label:"Novos"})}
          {checkbox({name:"used", label:"Usados"})}
        </CheckboxWrapper>
        <InputsGrid>
          <WhereRadiusDiv>
            <Field name="where" type="text" />
            {select({name: "radius", label: "Raio", options: "100km"})}
          </WhereRadiusDiv>
          {select({name: "brand", label: "Marca", options: <BrandOptions/>})}
          {select({name: "model", label: "Modelo", options: <ModelOptions/>})}
          {select({name: "year", label: "Ano desejado", options: [], simple:true})}
          {select({name: "priceRange", label: "Faixa de Preço", options: [], simple:true})}
          {select({name: "version", label: "Versão", options: <VersionOptions/>})}
          
          <AdvancedSearchBtn type='button'>Busca Avançada</AdvancedSearchBtn>
          <ResetSubmitDiv>
            <Field type="reset" value="Limpar Filtros"/>
            <Field type="submit" value="Ver Ofertas"/>
          </ResetSubmitDiv>
        </InputsGrid>
      </Form>
    </Formik>
    </Wrapper>
  )
}

export default SearchOfferForm