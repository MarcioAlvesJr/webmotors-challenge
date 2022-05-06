import { Field, Form, Formik } from 'formik';
import checkbox from './customFields/customCheckbox/customCheckbox';
import select from './customFields/customSelect/customSelect';
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
          {checkbox({name:"new", label:"Novos"})}
          {checkbox({name:"used", label:"Usados"})}
        </CheckboxWrapper>
        <InputsGrid>
          <WhereRadiusDiv>
            <Field name="where" type="text" />
            {select({name: "radius", label: "Raio", options: ["100km"]})}
          </WhereRadiusDiv>
          {select({name: "brand", label: "Marca", options: ["Todas"]})}
          {select({name: "model", label: "Modelo", options: ["Todos"]})}
          {select({name: "year", label: "Ano desejado", options: ["Todos"], simple:true})}
          {select({name: "priceRange", label: "Faixa de Preço", options: ["Todas"], simple:true})}
          {select({name: "version", label: "Versão", options: ["Todas"]})}
          
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