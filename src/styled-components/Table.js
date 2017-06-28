import styled from 'styled-components';

export const TableWrapper = styled.div`
  width: ${props => props.width};
  float: left;
  margin: 20px;
  box-sizing: border-box;
  border: 1px solid ${props => (props.color ? props.color : '#000000')};
  .right{
    float: right;
    padding: 10px;
  }
`;

export const Table = styled.div`
  display: flex;
  width: 100%;
  border: 1px solid #eeeeee;
  flex-direction: row;
  flex-wrap: ${props => (props.direction === 'ltr-up' ? 'wrap-reverse' : 'wrap')};
  box-sizing: border-box;
`;

export const TableCell = styled.div`
  width: 20%;
  border-right: 1px solid gray;
  border-bottom: 1px solid gray;
  box-sizing: border-box;
  padding: 10px;
  display: flex;
  align-items: center;
  text-align: center;
  padding: 10px;
  font-size: 16px;
  &:nth-child(5n+ 5){
    border-right: 1px solid gray;
    border-left: none;
  }
  &:nth-child(5n+ 1){
    border-left: 1px solid gray;
  }
  &.gray{
    background-color: #666666;
  }
`;

export const TableButton = styled.button`
  padding: 10px;
  font-size: 16px;
  background:
`;
