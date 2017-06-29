import * as events from '../events';

const form = {};

export default (state = { editing: false, form }, action) => {
  switch (action.type) {
    case events.SHOW_FORM:
      return {
        ...state,
        editing: true,
        form: { ...action.configurationForm }
      };

    case events.UPDATE_FORM:
      return {
        ...state,
        editing: true,
        form: { ...action.configurationForm }
      };
    case events.CLEAR_FORM:
      return {
        ...state,
        editing: false
      };

    default:
      return state;
  }
};
