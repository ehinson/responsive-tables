import * as events from '../events';

export const updateTables = allTables => {
  return {
    type: events.UPDATE_TABLES,
    allTables
  };
};

export const fetchTables = allTables => {
  return {
    type: events.FETCH_TABLES,
    allTables
  };
};
