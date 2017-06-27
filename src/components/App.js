import React, { Component } from 'react';
import data from '../data.json';
import { TableWrapper, Table, TableCell, TableButton } from '../styled-components/Table';

class App extends Component {
  loopTableCells = (min, max, iterator) => {
    var table = [];
    for (var i = min; i <= max; i++) {
      table.push(i);
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
        <div className="App-header">
          <h2>Welcome to React</h2>
        </div>
        <TableWrapper color={data.red.name} width={data.red.width}>
          <Table>
            {this.loopTableCells(data.red.min, data.red.max, data.red.increment).map(number => (
              <TableCell key={number} className={`table-cell ${!number && 'gray'}`}>
                {number ? number : ''}
              </TableCell>
            ))}

          </Table>
          <TableButton>Configure</TableButton>
          <span className="right">{data.red.width}</span>

        </TableWrapper>

      </div>
    );
  }
}

export default App;
