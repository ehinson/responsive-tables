import * as events from '../events';

export const showForm = configurationForm => {
  return {
    type: events.SHOW_FORM,
    configurationForm
  };
};

export const updateForm = configurationForm => {
  return {
    type: events.UPDATE_FORM,
    configurationForm
  };
};

export const clearForm = () => {
  return {
    type: events.CLEAR_FORM
  };
};
