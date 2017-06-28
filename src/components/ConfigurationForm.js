import React, { Component } from 'react';
import { FormWrapper } from '../styled-components/Configuration';

class ConfigurationForm extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <FormWrapper color={this.props.color} name={this.props.name}>
        Table: <span>{this.props.name}</span>
        <form>
          <input type="text" />
        </form>
      </FormWrapper>
    );
  }
}

export default ConfigurationForm;
