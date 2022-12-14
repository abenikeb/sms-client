import React, { Component } from "react";
import Input from "../UI/Input/Input";
import Button from "../UI/Button/Button";
import Select from "../UI/Select/Select";
import Joi from "joi-browser";
import TextArea from "../UI/TextArea/TextArea";

class Form extends Component {
  validateInput = (target) => {
    // key value pares
    let err = Joi.validate(
      { [target.name]: target.value },
      { [target.name]: this.schema[target.name] }
    );
    return err;
  };

  handleChange = ({ target }) => {
    let inputErr = this.validateInput(target);
    let errors = { ...this.props.error };
    inputErr.error !== null
      ? (errors[target.name] = inputErr.error.details[0].message)
      : delete errors[target.name];
    const data = { ...this.props.data };
    data[target.name] = target.value;

    this.props.onHandleInputChange(data, errors);
  };

  validate = () => {
    const options = { abortEarly: false };
    const { error } = Joi.validate(this.props.data, this.schema, options);
    return error != null ? error : {};
  };

  handleSubmit = (e) => {
    e.preventDefault();

    let errors = {};
    const error = this.validate();
    const errCount = Object.keys(error).length;

    if (errCount > 0) {
      for (let err of error.details) {
        errors[err.path[0]] = err.message;
      }
    }

    this.props.onHandleSubmitError(errors);

    if (errCount > 0) return;

    this.doSubmit();
  };

  renderInput = (label, name) => {
    const { data, error } = this.props;
    return (
      <Input
        label={label}
        name={name}
        value={data[name]}
        onChange={this.handleChange}
        error={error[name]}
      />
    );
  };

  renderTextArea = (label, name) => {
    const { data, error } = this.props;
    return (
      <TextArea
        label={label}
        name={name}
        value={data[name]}
        onChange={this.handleChange}
        error={error[name]}
      />
    );
  };

  renderSelect = (label, name, categories) => {
    const { data, error } = this.props;
    return (
      <Select
        label={label}
        name={name}
        options={categories}
        value={data[name]}
        onChange={this.handleChange}
        error={error[name]}
      />
    );
  };

  renderButton = (label, btn_class) => {
    return (
      <div>
        <Button label={label} btn_class={btn_class} />
      </div>
    );
  };
}

export default Form;
