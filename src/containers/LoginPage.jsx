import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Joi from 'joi-browser';
import signupAction from '../actions/signupAction';
import signUpInputSchema from '../schemas/signup';
import inputErrorMessages from '../helpers/InputErrorMessages';
import Form from '../components/common/Form';
import Input from '../components/common/Input';
import Button from '../components/common/Button';


export class SignupForm extends Component {
  state= {
    inputData: {
      email: '',
      password: ''
    },
    validationErrors: {},
    loginError: ''
  };


  validateInputs = () => {
    const { state: { inputData } } = this;
    const { error } = Joi.validate(inputData, signUpInputSchema, { abortEarly: false });
    if (!error) return null;
    return inputErrorMessages(error);
  };

  handleChange = (event) => {
    const { target: { name, value } } = event;
    const { state: { inputData } } = this;
    this.setState({ inputData: { ...inputData, [name]: value } });
  }

  handleFocus = ({ target: { name } }) => {
    const { state: { validationErrors } } = this;
    this.setState({ validationErrors: { ...validationErrors, [`${name}`]: '' }, loginError: '' });
  }

  handleSubmit = async (event) => {
    event.preventDefault();
    const validationErrors = this.validateInputs() || '';
    this.setState({ validationErrors });
    if (!validationErrors) {
      const { props: { signup }, state: { inputData } } = this;
      await signup(inputData);
      const { props: { success, error } } = this;
      this.setState({ signUpError: error });
      if (success) console.log(this.props);
    }
  }

  render() {
    const {
      state: {
        signUpError,
        inputData: {
          email, password
        },
        validationErrors
      },
      props: { loading }, handleSubmit, handleChange, handleFocus
    } = this;

    return (
      <div className="inner-container">
        <div className="form-box reg__box">
          <h2>Login</h2>
          <Form formTitle="Create Account" handleSubmit={handleSubmit}>
            <Input
              onChange={handleChange}
              type="text"
              placeholder="Email Address"
              name="email"
              value={email}
              error={validationErrors.email}
              onFocus={handleFocus}
            />
            <Input
              onChange={handleChange}
              type="password"
              placeholder="Password"
              name="password"
              value={password}
              error={validationErrors.password}
              onFocus={handleFocus}
            />
            {signUpError && <p className="input-validation-error">{signUpError}</p>}
            <Button isBtnLoading={loading}>
              {'Login'}
            </Button>
          </Form>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => state.login;

const mapDispatchToProps = {
  login: signupAction
};

export default connect(mapStateToProps, mapDispatchToProps)(SignupForm);

SignupForm.propTypes = {
  loading: PropTypes.bool.isRequired,
  signup: PropTypes.func.isRequired,
  error: PropTypes.string
};

SignupForm.defaultProps = {
  error: ''
};
