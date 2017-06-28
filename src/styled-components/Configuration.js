import styled from 'styled-components';

export const FormWrapper = styled.div`
  width: 500px;
  float: left;
  clear: both;
  background-color: #f0f0f0;
  padding: 10px;
  margin-bottom: 20px;
  span{
    color: ${props => props.color};
    text-transform: uppercase;
  }
`;
