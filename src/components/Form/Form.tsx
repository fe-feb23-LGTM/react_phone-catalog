/* eslint-disable no-alert */
/* eslint-disable no-console */
import { useState } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import { register, login } from '../../api/auth';

interface Props {
  formType?: string;
}

export const Form: React.FC<Props> = ({ formType }) => {
  // const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [repeatPassword, setRepeatPassword] = useState('');
  const [emailError, setEmailError] = useState('');
  const [passwordError, setPasswordError] = useState('');
  const [repeatPasswordError, setRepeatPasswordError] = useState('');

  const navigate = useNavigate();

  const validateEmail = (value: string) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!value) {
      setEmailError('Email is required');
    } else if (!emailRegex.test(value)) {
      setEmailError('Invalid email');
    } else {
      setEmailError('');
    }
  };

  const validatePassword = (value: string) => {
    if (!value) {
      setPasswordError('Password is required');
    } else if (value.length < 6) {
      setPasswordError('Password must be at least 6 characters');
    } else {
      setPasswordError('');
    }
  };

  const validateRepeatPassword = (value: string) => {
    if (value !== password) {
      setRepeatPasswordError('Passwords do not match');
    } else {
      setRepeatPasswordError('');
    }
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    // Validate fields before submission
    validateEmail(email);
    validatePassword(password);
    if (formType !== 'login') {
      validateRepeatPassword(repeatPassword);
    }

    // Perform form submission if all fields are valid
    if (!emailError && !passwordError && !repeatPasswordError) {
      if (formType !== 'login') {
        console.log('register');
        register(email, password)
          .then(regedUser => {
            if (regedUser.email === email) {
              alert('your account was created');

              localStorage.setItem('log', 'true');
              localStorage.setItem('userEmail', email);

              navigate('/');
              // console.log('Registration successful:', regedUser);
            } else {
              setEmailError('failed to create account');
            }
          });
      } else {
        login(email, password)
          .then(resp => {
            if (resp === 'correct password') {
              alert('loged in');

              localStorage.setItem('log', 'true');
              localStorage.setItem('userEmail', email);

              navigate('/');
            } else {
              alert('login or password is incorrect');
            }
          });
      }
    }
  };

  return (
    <div className="form">
      <form onSubmit={handleSubmit}>
        {/* {formType !== 'login' && (
          <div className="field">
            <label className="label">
              Name
              <div className="control">
                <input
                  className="input"
                  type="text"
                  placeholder="Name"
                  value={name}
                  onChange={(event) => {
                    setName(event.target.value);
                  }}
                />
              </div>
            </label>
          </div>
        )} */}

        <div className="field">
          <label className="label">
            Email
            <div className="control  has-icons-right">
              <input
                className={`input ${emailError ? 'is-danger' : ''}`}
                type="email"
                placeholder="Email input"
                value={email}
                onChange={(event) => {
                  setEmail(event.target.value);
                  validateEmail(event.target.value);
                }}
              />
              <span className="icon is-small is-left">
                <i className="fas fa-envelope" />
              </span>
              {emailError && (
                <span className="icon is-small is-right">
                  <i className="fas fa-exclamation-triangle" />
                </span>
              )}
            </div>
          </label>
          {emailError && <p className="help is-danger">{emailError}</p>}
        </div>

        <div className="field">
          <label className="label">
            Password
            <div className="control  has-icons-right">
              <input
                className={`input ${passwordError ? 'is-danger' : ''}`}
                type="password"
                placeholder="Password input"
                value={password}
                onChange={(event) => {
                  setPassword(event.target.value);
                  validatePassword(event.target.value);
                }}
              />
              <span className="icon is-small is-left">
                <i className="fas fa-user" />
              </span>
              {passwordError && (
                <span className="icon is-small is-right">
                  <i className="fas fa-exclamation-triangle" />
                </span>
              )}
            </div>
          </label>
          {passwordError && <p className="help is-danger">{passwordError}</p>}
        </div>

        {formType !== 'login' && (
          <div className="field">
            <label className="label">
              Repeat Password
              <div className="control  has-icons-right">
                <input
                  className={`input ${repeatPasswordError ? 'is-danger' : ''}`}
                  type="password"
                  placeholder="Repeat Password"
                  value={repeatPassword}
                  onChange={(event) => {
                    setRepeatPassword(event.target.value);
                    validateRepeatPassword(event.target.value);
                  }}
                />
                <span className="icon is-small is-left">
                  <i className="fas fa-user" />
                </span>
                {repeatPasswordError && (
                  <span className="icon is-small is-right">
                    <i className="fas fa-exclamation-triangle" />
                  </span>
                )}
              </div>
            </label>
            {repeatPasswordError && (
              <p className="help is-danger">{repeatPasswordError}</p>
            )}
          </div>
        )}

        <div className="field is-grouped">
          <div className="control">
            <button type="submit" className="button is-link">
              Submit
            </button>
          </div>
          <div className="control">
            <button type="button" className="button is-link is-light">
              <NavLink to="/">
                Cancel
              </NavLink>
            </button>
          </div>
          { formType === 'login' && (
            <div className="control">
              <button type="button" className="button is-link is-light">
                <NavLink
                  to="/authorization/signup"
                  className="authorization"
                >
                  <img
                    className="authorization_icon"
                    src="icons/signup-icon.svg"
                    alt="signupicon"
                  />
                </NavLink>
              </button>
            </div>
          ) }
        </div>
      </form>
    </div>
  );
};
