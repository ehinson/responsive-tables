import * as events from '../events';

export const editTable = currentTable => {
  return {
    type: events.EDIT_TABLE,
    currentTable
  };
};
