import { Field, Form, Formik } from 'formik';
import { useContext, useRef } from 'react';
import { GlobalFiltersContext, GlobalQueriesContext, MediaQueryContext } from '../PageWrapper/PageWrapper';
import BrandOptions from './selectOptions/BrandOptions';
import checkbox from './customFields/customCheckbox/customCheckbox';
import select from './customFields/customSelect/customSelect';

import { AdvancedSearchBtn, CheckboxWrapper, InputsGrid, MapPinIcon, ResetSubmitDiv, WhereRadiusDiv, Wrapper } from './SearchOfferForm.styles';
import ModelOptions from './selectOptions/ModelOptions';
import VersionOptions from './selectOptions/VersionOptions';
import initialValues from './formikProps/initialValues';
import useResetOnValueChange from './useResetOnValueChange/useResetOnValueChange';
import RadiusOptions from './selectOptions/RadiusOptions';
import YearOptions from './selectOptions/YearOptions';
import PriceRangeOptions from './selectOptions/PriceRangeOptions';
import WhereOptions from './selectOptions/WhereOptions';

const SearchOfferForm = () => {
  const mobile = useContext(MediaQueryContext)
  const {setFilters} = useContext(GlobalFiltersContext)
  const formikProps = {
    initialValues: initialValues(),
    onSubmit: values=> setFilters(values)
  }
  const ResetOnValueChange = useResetOnValueChange(formikProps)
  const fields = [
    <>
      {checkbox({name:"new", label:"Novos"})}
      {checkbox({name:"used", label:"Usados"})}
    </>,
    <>
      {select({name: "where", label:<><MapPinIcon/> Onde</>, options: <WhereOptions/>})}
      {select({name: "radius", label: "Raio", options: <RadiusOptions/>})}
    </>,
    <>
      {select({name: "brand", label: "Marca", options: <BrandOptions/>, notSelectedText: "Todas"})}
      {select({name: "model", label: "Modelo", options: <ModelOptions/>, notSelectedText: "Todos"})}
      {select({name: "year", label: "Ano desejado", options: <YearOptions/>, simple:true})}
      {select({name: "priceRange", label: "Faixa de Preço", options: <PriceRangeOptions/>, simple:true})}
      {select({name: "version", label: "Versão", options: <VersionOptions/>,  notSelectedText: "Todas"})}
    </>,
    <></>,
  ]
  const form = <>
        <Form>
        <CheckboxWrapper>{fields[0]}</CheckboxWrapper>
        <InputsGrid className={mobile}>
          {mobile && <>
            {fields[1]}
            {fields[2]}
          </>}
          {!mobile && <>
          <WhereRadiusDiv>{fields[1]}</WhereRadiusDiv>
          {fields[2]}
          </>}
          <AdvancedSearchBtn type='button'>Busca Avançada</AdvancedSearchBtn>
          <ResetSubmitDiv>
            <Field type="reset" value="Limpar Filtros"/>
            <Field type="submit" value="Ver Ofertas"/>
          </ResetSubmitDiv>
        </InputsGrid>
      </Form>
  </>
  return (
    <Wrapper className={mobile}>
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