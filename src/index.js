import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { Route, Routes, useRoutes, } from 'react-router';
import { BrowserRouter } from 'react-router-dom';
import reportWebVitals from './reportWebVitals';
import { SignAndLog } from './components/Account/SignAndLog';
import { LayoutAdmin } from './components/Admin/LayoutAdmin';
import { Layout } from './components/Layout';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <Routes>
      <Route path='/signandlog' element={<SignAndLog />} />
      <Route path='*' element={<Layout />} />
      <Route path='/admin/*' element={<LayoutAdmin />} />
    </Routes>

  </BrowserRouter>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
