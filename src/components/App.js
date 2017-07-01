import React, { Component } from 'react';
import data from '../data.json';
import { TableWrapper, Table, TableCell, TableButton } from '../styled-components/Table';
import ConfigurationForm from './ConfigurationForm';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { editTable } from '../actions/tableActions';
import { showForm, updateForm, clearForm } from '../actions/formActions';

class App extends Component {
  constructor(props) {
    super(props);
  }
  handleConfigure = (mappedTable, index) => {
    let currentTable = { index, ...mappedTable };
    this.props.actions.showForm();
    this.props.actions.editTable(currentTable);
  };
  popNumbers = (array, width, direction = 1, newArray = []) => {
    if (array.length === 0) {
      return newArray.sort((a, b) => a - b);
    }
    let j = 0;
    let poppedNumber;
    let holder = [];
    direction = -direction;

    while (j < width) {
      poppedNumber = array.pop();
      j++;
      holder.push(poppedNumber);
    }

    if (direction === -1) {
      holder.reverse();
    }
    newArray = Array.prototype.concat(newArray, holder);
    let undefinedArray = [];
    undefinedArray = newArray.filter(elem => {
      elem !== undefined;
    });
    newArray = undefinedArray.concat(newArray);

    return this.popNumbers(array, width, direction, newArray);
  };

  loopTableCells = (min, max, iterator, direction) => {
    let foo = [];
    let i = parseInt(min);
    while (i <= max) {
      foo.push(i);
      i = i + parseInt(iterator);
    }

    return this.popNumbers(foo, 5);

    return foo;
  };

  render() {
    return (
      <div className="App">
        {this.props.allTables.map((t, index) => (
          <TableWrapper
            className={`TableWrapper ${t.name === 'blue' ? 'hidden-md-down' : null}`}
            color={t.name}
            width={`${t.width}%`}
            key={index}
          >
            <Table direction={t.direction}>
              {this.loopTableCells(t.min, t.max, t.increment, t.direction).map(number => (
                <TableCell key={number} className={`table-cell ${!number && 'gray'}`}>
                  {number ? number : ''}
                </TableCell>
              ))}

            </Table>
            <TableButton onClick={() => this.handleConfigure(t, index)}>Configure</TableButton>
            <span className="right">{t.width + '%'}</span>

          </TableWrapper>
        ))}
        {this.props.form.editing && <ConfigurationForm color={this.props.currentTable.name} />}

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
      editTable,
      showForm,
      updateForm
    },
    dispatch
  )
});
export default connect(mapState, mapDispatch)(App);
