import { Field, Form, Formik } from 'formik';
import { useContext, useRef } from 'react';
import { GlobalFiltersContext, GlobalQueriesContext } from '../PageWrapper/PageWrapper';
import BrandOptions from './selectOptions/BrandOptions';
import checkbox from './customFields/customCheckbox/customCheckbox';
import select from './customFields/customSelect/customSelect';

import { AdvancedSearchBtn, CheckboxWrapper, InputsGrid, ResetSubmitDiv, WhereRadiusDiv, Wrapper } from './SearchOfferForm.styles';
import ModelOptions from './selectOptions/ModelOptions';
import VersionOptions from './selectOptions/VersionOptions';
import initialValues from './formikProps/initialValues';
import useResetOnValueChange from './useResetOnValueChange/useResetOnValueChange';
import RadiusOptions from './selectOptions/RadiusOptions';
import YearOptions from './selectOptions/YearOptions';
import PriceRangeOptions from './selectOptions/PriceRangeOptions';
import WhereOptions from './selectOptions/WhereOptions';

const SearchOfferForm = () => {
  const {setFilters} = useContext(GlobalFiltersContext)
  const formikProps = {
    initialValues: initialValues(),
    onSubmit: values=> setFilters(values)
  }
  const ResetOnValueChange = useResetOnValueChange(formikProps)
  const form = <>
        <Form>
        <CheckboxWrapper>
          {checkbox({name:"new", label:"Novos"})}
          {checkbox({name:"used", label:"Usados"})}
        </CheckboxWrapper>
        <InputsGrid>
          <WhereRadiusDiv>
            {select({name: "where", label: "Onde", options: <WhereOptions/>})}
            {select({name: "radius", label: "Raio", options: <RadiusOptions/>})}
          </WhereRadiusDiv>
          {select({name: "brand", label: "Marca", options: <BrandOptions/>, notSelectedText: "Todas"})}
          {select({name: "model", label: "Modelo", options: <ModelOptions/>, notSelectedText: "Todos"})}
          {select({name: "year", label: "Ano desejado", options: <YearOptions/>, simple:true})}
          {select({name: "priceRange", label: "Faixa de Preço", options: <PriceRangeOptions/>, simple:true})}
          {select({name: "version", label: "Versão", options: <VersionOptions/>,  notSelectedText: "Todas"})}
          
          <AdvancedSearchBtn type='button'>Busca Avançada</AdvancedSearchBtn>
          <ResetSubmitDiv>
            <Field type="reset" value="Limpar Filtros"/>
            <Field type="submit" value="Ver Ofertas"/>
          </ResetSubmitDiv>
        </InputsGrid>
      </Form>
  </>
  return (
    <Wrapper>
    <Formik {...formikProps}>
      <>
      {form}
      <ResetOnValueChange/>
      </>
    </Formik>
    </Wrapper>
  )
}

export default SearchOfferForm