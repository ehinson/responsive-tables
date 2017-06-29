import * as events from '../events';

export const updateTables = allTable => {
  return {
    type: events.UPDATE_TABLES,
    allTables
  };
};
