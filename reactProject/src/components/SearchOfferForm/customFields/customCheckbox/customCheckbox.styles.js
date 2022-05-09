import styled from "styled-components";

export const Wrapper = styled.div`
display: flex;

input {
  padding: 0;
  height: initial;
  width: initial;
  margin-bottom: 0;
  display: none;
  cursor: pointer;
}

label {
  position: relative;
  cursor: pointer;
  span{
    position: relative;
    top: 0.15rem;
  }
}

label:before {
  content:'';
  -webkit-appearance: none;
  background-color: transparent;
  border: 2px solid ${({theme})=>theme.gray};
  box-shadow: 0 1px 2px rgba(0, 0, 0, 0.05), inset 0px -15px 10px -12px rgba(0, 0, 0, 0.05);
  padding: 10px;
  display: inline-block;
  position: relative;
  vertical-align: middle;
  cursor: pointer;
  margin-right: 5px;
}

input:checked + label:after {
  content: '';
  display: block;
  position: absolute;
  top: 2px;
  left: 8px;
  width: 6px;
  height: 10px;
  border: solid ${({theme})=>theme.dullRed};
  border-width: 0 2px 2px 0;
  transform: rotate(45deg);
}
`