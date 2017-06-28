import React, { Component } from 'react';
import data from '../data.json';
import { TableWrapper, Table, TableCell, TableButton } from '../styled-components/Table';
import ConfigurationForm from './ConfigurationForm';

class App extends Component {
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
    return (
      <div className="App">
        {data.map(table => (
          <TableWrapper color={table.name} width={table.width}>
            <Table direction={table.direction}>
              {this.loopTableCells(table.min, table.max, table.increment).map(number => (
                <TableCell key={number} className={`table-cell ${!number && 'gray'}`}>
                  {number ? number : ''}
                </TableCell>
              ))}

            </Table>
            <TableButton>Configure</TableButton>
            <span className="right">{table.width}</span>

          </TableWrapper>
        ))}
        <ConfigurationForm color="red" name="red" />

      </div>
    );
  }
}

export default App;
