import React from 'react';
import './SignUp.css';
import { useFormik } from 'formik';
import Header from '../Header/Header';
import { signUpSchema } from '../../schema/signUpSchema';
import { useNavigate } from 'react-router-dom';
import { signUpUser } from '../../redux/feature/user/userSlice';
import { useDispatch, useSelector } from 'react-redux';

const SignUp = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  
  const { loading, error, userInfo } = useSelector((state) => state.user);


  const submit = (values, actions) => {
    dispatch(signUpUser(values)); 
    actions.resetForm(); 
  };

  const { values, errors, handleChange, handleSubmit } = useFormik({
    initialValues: {
      fullname: '',
      email: '',
      username: '',
      password: '',
      repeatPassword: '',
      term: '',
    },
    validationSchema: signUpSchema,
    onSubmit: submit,
  });

 
  if (userInfo) {
    navigate('/login');
  }

  return (
    <div className="div">
      <Header />
      <section className="signupp">
        <div className="left-side1"></div>

        <div className="right-side">
          <form onSubmit={handleSubmit} className="form2">
            <h2 className="h2-text">Sign Up</h2>

            <div className="inputs">
              <div className="input-group2">
                <label className="label2" htmlFor="fullName">
                  Full Name
                </label>
                <input
                  id="fullName"
                  name="fullname"
                  className="input2"
                  type="text"
                  placeholder="Name..."
                  value={values.fullname}
                  onChange={handleChange}
                />
                {errors.fullname && <p className="input-error">{errors.fullname}</p>}
              </div>

              <div className="input-group2">
                <label className="label2" htmlFor="email">
                  Email
                </label>
                <input
                  id="email"
                  name="email"
                  className="input2"
                  type="text"
                  placeholder="Email address..."
                  value={values.email}
                  onChange={handleChange}
                />
                {errors.email && <p className="input-error">{errors.email}</p>}
              </div>

              <div className="input-group2">
                <label className="label2" htmlFor="username">
                  Username
                </label>
                <input
                  id="username"
                  name="username"
                  className="input2"
                  type="text"
                  placeholder="Username..."
                  value={values.username}
                  onChange={handleChange}
                />
                {errors.username && <p className="input-error">{errors.username}</p>}
              </div>

              <div className="input-group2">
                <label className="label2" htmlFor="password">
                  Password
                </label>
                <input
                  id="password"
                  name="password"
                  className="input2"
                  type="password"
                  placeholder="**********"
                  value={values.password}
                  onChange={handleChange}
                />
                {errors.password && <p className="input-error">{errors.password}</p>}
              </div>

              <div className="input-group2">
                <label className="label2" htmlFor="repeatpassword">
                  Repeat Password
                </label>
                <input
                  id="repeatpassword"
                  name="repeatPassword"
                  className="input2"
                  type="password"
                  placeholder="**********"
                  value={values.repeatPassword}
                  onChange={handleChange}
                />
                {errors.repeatPassword && <p className="input-error">{errors.repeatPassword}</p>}
              </div>
            </div>

            <div className="input-checkbox">
              <input
                id="term"
                type="checkbox"
                name="term"
                value={values.term}
                onChange={handleChange}
              />
              <span>
                I agree to the <a href="">Terms of User</a>{' '}
              </span>
              {errors.term && <p className="input-error">{errors.term}</p>}
            </div>

            <div className="container-login">
              <button type="submit" className="btn5" disabled={loading}>
                {loading ? 'Signing Up...' : 'Sign Up'}
              </button>
              {error && <p className="input-error">Error: {error}</p>}
              <div className="sign-in" onClick={() => navigate('/login')}>
                <a href="">Sign in </a>
              </div>
            </div>
          </form>
        </div>
      </section>
    </div>
  );
};

export default SignUp;


