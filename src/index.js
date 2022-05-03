import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { Route, Routes, useRoutes, } from 'react-router';
import { BrowserRouter } from 'react-router-dom';
import reportWebVitals from './reportWebVitals';
import { SignAndLog } from './components/Account/SignAndLog';
import { ForgetPassword } from './components/Account/ForgetPassword';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <Routes>
      <Route path='/signandlog' element={<SignAndLog />} />
      <Route path='/forgetpassword' element={<ForgetPassword />} />
      <Route path='*' element={<App />} />
    </Routes>

  </BrowserRouter>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
