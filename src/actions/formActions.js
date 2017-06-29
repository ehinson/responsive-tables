import * as events from '../events';

export const showForm = () => {
  return {
    type: events.SHOW_FORM
  };
};

export const submitForm = configurationForm => {
  return {
    type: events.SUBMIT_FORM,
    configurationForm
  };
};

export const updateForm = (name, value) => {
  return {
    type: events.UPDATE_FORM,
    name,
    value
  };
};

export const clearForm = () => {
  return {
    type: events.CLEAR_FORM
  };
};
