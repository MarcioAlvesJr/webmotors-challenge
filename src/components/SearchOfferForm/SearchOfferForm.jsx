import { Field, Form, Formik } from 'formik';
import customCheckbox from './customFields/customCheckbox/customCheckbox';
import customSelect from './customFields/customSelect/customSelect';
import initialValues from './initialValues';
import { AdvancedSearchBtn, CheckboxWrapper, InputsGrid, ResetSubmitDiv, WhereRadiusDiv, Wrapper } from './SearchOfferForm.styles';

const SearchOfferForm = () => {

  const formikProps = {
    initialValues: initialValues()
  }
  return (
    <Wrapper>
    <Formik {...formikProps}>
      <Form>
        <CheckboxWrapper>
          {customCheckbox({name:"new", label:"Novos"})}
          {customCheckbox({name:"used", label:"Usados"})}
        </CheckboxWrapper>
        <InputsGrid>
          <WhereRadiusDiv>
            <Field name="where" type="text" />
            {customSelect({name: "radius", label: "Raio", options: ["100km"]})}
          </WhereRadiusDiv>
          {customSelect({name: "brand", label: "Marca", options: ["Todas"]})}
          {customSelect({name: "model", label: "Modelo", options: ["Todos"]})}
          {customSelect({name: "year", label: "Ano desejado", options: ["Todos"]})}
          {customSelect({name: "priceRange", label: "Faixa de Preço", options: ["Todas"]})}
          {customSelect({name: "version", label: "Versão", options: ["Todas"]})}
          
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