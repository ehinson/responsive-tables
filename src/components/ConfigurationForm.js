import React, { Component } from 'react';
import { FormWrapper } from '../styled-components/Configuration';
import { TableButton } from '../styled-components/Table';

class ConfigurationForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      form: {}
    };
  }
  handleInputChange = e => {
    this.props.onChange(e);
  };
  handleSubmit = e => {
    e.preventDefault();
    this.props.onSubmit();
  };
  render() {
    return (
      <FormWrapper {...this.props}>
        Table: <span>{this.props.name}</span>
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
          <TableButton>Cancel</TableButton>
        </form>
      </FormWrapper>
    );
  }
}

export default ConfigurationForm;
