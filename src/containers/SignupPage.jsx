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
      firstName: '',
      lastName: '',
      password: '',
      confirmPassword: ''
    },
    validationErrors: {},
    signUpError: ''
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
    this.setState({ validationErrors: { ...validationErrors, [`${name}`]: '' }, signUpError: '' });
  }

  handleSubmit = async (event) => {
    event.preventDefault();
    const validationErrors = this.validateInputs() || '';
    this.setState({ validationErrors });
    if (!validationErrors) {
      const { props: { signup, history: { push } }, state: { inputData } } = this;
      await signup(inputData);
      const { props: { success, error } } = this;
      this.setState({ signUpError: error });
      if (success) push('/');
    }
  }

  render() {
    const {
      state: {
        signUpError,
        inputData: {
          email, firstName, lastName, password, confirmPassword
        },
        validationErrors
      },
      props: { loading }, handleSubmit, handleChange, handleFocus
    } = this;

    return (
      <div className="inner-container">
        <div className="form-box reg__box">
          <h2>Create Account</h2>
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
              type="text"
              placeholder="First Name"
              name="firstName"
              value={firstName}
              error={validationErrors.firstName}
              onFocus={handleFocus}
            />
            <Input
              onChange={handleChange}
              type="text"
              placeholder="Last Name"
              name="lastName"
              value={lastName}
              error={validationErrors.lastName}
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
            <Input
              onChange={handleChange}
              type="password"
              placeholder="Confirm Password"
              name="confirmPassword"
              value={confirmPassword}
              error={validationErrors.confirmPassword}
              onFocus={handleFocus}
            />
            {signUpError && <p className="input-validation-error">{signUpError}</p>}
            <Button isBtnLoading={loading}>
              {'Sign Up'}
            </Button>
          </Form>
        </div>
      </div>

    );
  }
}

const mapStateToProps = (state) => state.signup;

const mapDispatchToProps = {
  signup: signupAction
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
