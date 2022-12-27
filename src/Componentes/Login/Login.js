import React from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import LoginForm from './LoginForm';
import LoginCreate from './LoginCreate';

import LoginPasswordReset from './LoginPasswordReset';
import { UserContext } from '../../UserContext';
import style from './Login.module.css';
import Notfound from '../Notfound';
import LoginPasswordLost from './LoginPasswordLost';

const Login = () => {
  const { login } = React.useContext(UserContext);
  if (login === true) return <Navigate to="/conta" />;

  return (
    <section className={style.login}>
      <div className={style.forms}>
        <Routes>
          <Route path="/" element={<LoginForm />} />
          <Route path="criar" element={<LoginCreate />} />
          <Route path="perdeu" element={<LoginPasswordLost />} />
          <Route path="resetar" element={<LoginPasswordReset />} />
          <Route path="*" element={<Notfound />} />
        </Routes>
      </div>
    </section>
  );
};

export default Login;
