import { combineReducers } from 'redux';
import tables from './tablesReducer';
import table from './tableReducer';
import form from './formReducer';

export default combineReducers({
  tables,
  table,
  form

  // More reducers if there are
  // can go here
});
