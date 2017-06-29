import * as events from '../events';

const tables = [
  {
    name: 'red',
    min: 8,
    max: 29,
    width: '20%',
    increment: 1,
    direction: 'ltr-up'
  },
  {
    name: 'green',
    min: 231,
    max: 247,
    width: '30%',
    increment: 1,
    direction: 'ltr-up'
  },
  {
    name: 'blue',
    min: 47,
    max: 81,
    width: '40%',
    increment: 2,
    direction: 'rtl-up'
  }
];

export default (state = tables, action) => {
  switch (action.type) {
    case events.FETCH_TABLES:
      return action.allTables;
    case events.UPDATE_TABLES:
      return action.allTables;
    default:
      return state;
  }
};
