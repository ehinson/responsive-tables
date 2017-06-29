import * as events from '../events';

const table = {};

export default (state = table, action) => {
  switch (action.type) {
    case events.EDIT_TABLE:
      return action.currentTable;
    default:
      return state;
  }
};
