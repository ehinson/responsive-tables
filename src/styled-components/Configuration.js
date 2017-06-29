import styled from 'styled-components';

export const FormWrapper = styled.div`
  width: 50%;
  min-width: 300px;
  float: left;
  clear: both;
  background-color: #f0f0f0;
  padding: 10px;
  margin-bottom: 20px;
  span{
    color: ${props => props.color};
    text-transform: uppercase;
    font-weight: bold;
  }
  form > input, button, select{
    margin: 10px;
    padding: 10px;
    font-size: 16px;
  }

`;
