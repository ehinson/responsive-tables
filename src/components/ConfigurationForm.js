import React, { Component } from 'react';
import { FormWrapper } from '../styled-components/Configuration';
import { TableButton } from '../styled-components/Table';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { showForm, updateForm, clearForm } from '../actions/formActions';
import { updateTables, fetchTables } from '../actions/tablesActions';

class ConfigurationForm extends Component {
  constructor(props) {
    super(props);
  }
  handleInputChange = e => {
    e.preventDefault();
    this.props.actions.updateForm(e.target.name, e.target.value);
  };
  handleSubmit = e => {
    e.preventDefault();
    let index = this.props.currentTable.index;
    let allTables = this.props.allTables;
    let indexTable = allTables[index];
    let form = this.props.form;
    Object.keys(indexTable).map(key => this.keyFind(key, form, indexTable));
    this.props.actions.updateTables(allTables);
    this.props.actions.clearForm();
  };
  keyFind = (key, newObject, oldObject) => {
    if (key in newObject) {
      oldObject[key] = newObject[key];
    }
    return oldObject;
  };
  render() {
    return (
      <FormWrapper {...this.props}>
        Table: <span>{this.props.currentTable.name}</span>
        <form>
          <label for="N">N=</label>
          <input type="number" name="min" id="N" min="0" onChange={this.handleInputChange} /><br />
          <label for="X">X=</label>
          <input type="number" name="increment" id="X" min="0" onChange={this.handleInputChange} /><br />
          <label for="M">M=</label>
          <input type="number" name="max" id="M" min="0" onChange={this.handleInputChange} /><br />
          <label for="W">W=</label>
          <input type="number" name="width" id="W" min="0" max="100" onChange={this.handleInputChange} /><br />
          <label for="direction">D=</label>
          <select name="direction" id="direction" onChange={this.handleInputChange}>
            <option value="ltr-up">ltr-up</option>
            <option value="rtl-up">rtl-up</option>
          </select>
          <br />
          <TableButton onClick={this.handleSubmit}>OK</TableButton>
          <TableButton onClick={this.props.actions.clearForm}>Cancel</TableButton>
        </form>
      </FormWrapper>
    );
  }
}

const mapState = state => ({
  currentTable: state.table,
  allTables: state.tables,
  form: state.form
});
const mapDispatch = dispatch => ({
  actions: bindActionCreators(
    {
      updateTables,
      fetchTables,
      showForm,
      updateForm,
      clearForm
    },
    dispatch
  )
});
export default connect(mapState, mapDispatch)(ConfigurationForm);
