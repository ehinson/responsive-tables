import React, { Component } from 'react';
import data from '../data.json';
import { TableWrapper, Table, TableCell, TableButton } from '../styled-components/Table';
import ConfigurationForm from './ConfigurationForm';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { editTable } from '../actions/tableActions';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      editing: false,
      currentTable: {},
      allTables: [...data],
      form: {}
    };
  }
  handleConfigure = (table, index) => {
    this.setState({
      editing: true,
      currentTable: { index: [index], ...table }
    });
  };
  handleSubmit = () => {
    let index = this.state.currentTable.index[0];
    console.log(this.state.form);
    let allTables = this.state.allTables;
    allTables[index] = this.state.form;
    this.setState({
      ...this.state,
      allTables
    });
  };
  handleInputChange = name => e => {
    e.preventDefault();
    this.setState({
      ...this.state,
      form: {
        ...this.state.form,
        [e.target.name]: e.target.value,
        name
      }
    });
  };
  loopTableCells = (min, max, iterator) => {
    let table = [];
    let i = min;
    while (i <= max) {
      table.push(i);
      i = i + iterator;
    }
    if (table.length % 5 !== 0) {
      let gray = Array(5 - table.length % 5);
      table.push(...gray);
    }
    return table;
  };

  render() {
    console.log('Props', this.props);
    return (
      <div className="App">
        {this.props.allTables.map((table, index) => (
          <TableWrapper
            className={`${table.name === 'blue' ? 'hidden-md-down' : null}`}
            color={table.name}
            width={table.width}
            key={index}
          >
            <Table direction={table.direction}>
              {this.loopTableCells(table.min, table.max, table.increment).map(number => (
                <TableCell key={number} className={`table-cell ${!number && 'gray'}`}>
                  {number ? number : ''}
                </TableCell>
              ))}

            </Table>
            <TableButton onClick={() => this.handleConfigure(table, index)}>Configure</TableButton>
            <span className="right">{table.width}</span>

          </TableWrapper>
        ))}
        {this.state.editing &&
          <ConfigurationForm
            color={this.state.currentTable.name}
            name={this.state.currentTable.name}
            onSubmit={this.handleSubmit}
            onChange={this.handleInputChange(this.state.currentTable.name)}
          />}

      </div>
    );
  }
}

const mapState = state => ({
  currentTable: state.table,
  allTables: state.tables,
  form: state.form
});
const mapDispatch = dispatch => ({
  actions: bindActionCreators(
    {
      editTable
    },
    dispatch
  )
});
export default connect(mapState, mapDispatch)(App);
