import * as events from '../events';

const form = {};

export default (state = { editing: false }, action) => {
  switch (action.type) {
    case events.SHOW_FORM:
      return {
        ...state,
        editing: true
      };

    case events.UPDATE_FORM:
      return {
        ...state,
        editing: true,
        [action.name]: action.value
      };
    case events.CLEAR_FORM:
      return {
        ...state,
        editing: false
      };
    case events.SUBMIT_FORM:
      return {
        ...state,
        editing: false
      };

    default:
      return state;
  }
};
