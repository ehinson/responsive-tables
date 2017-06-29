import styled from 'styled-components';

export const TableWrapper = styled.div`
  width: ${props => props.width};
  float: left;
  margin: 20px;
  padding: 10px;
  box-sizing: border-box;
  border: 1px solid ${props => (props.color ? props.color : '#000000')};
  .right{
    float: right;
    padding: 10px;
  }
  &.hidden-md-down{
    @media(max-width: 992px){
      display: none;
    }
  }
  @media(max-width: 768px){
    clear: both;
    width: 90%;
  }
`;

export const Table = styled.div`
  display: flex;
  width: 100%;
  border-top: 1px solid #666666;
  border-left: 1px solid #666666;
  flex-direction: ${props => (props.direction === 'rtl-up' ? 'row-reverse' : 'row')};;
  flex-wrap: wrap-reverse;
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

  &.gray{
    background-color: #666666;
  }
`;

export const TableButton = styled.button`
  margin: 10px 0;
  padding: 10px;
  font-size: 16px;
  background:
`;
