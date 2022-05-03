import React, { Component } from 'react';
import { Route } from 'react-router';
import { Layout } from './components/Layout';
import { Home } from './components/Home/Home';

                          

// import { EmailComfirmed } from './components/Account/EmailComfirmed';


export default class App extends React.Component {
  static displayName = App.name;
 


  render() {
   
    return (
      <div className="wrapper">
        <Layout>
          <Route exact path='/home' element={Home} />
         
        </Layout>
      </div>
    );
  }
}
