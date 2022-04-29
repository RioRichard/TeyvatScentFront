import React, { Component } from 'react';
import { Route } from 'react-router';
import { Layout } from './components/Layout';
import { Home } from './components/Home';
import { FetchData } from './components/FetchData';
import { Counter } from './components/Counter';
import { SignAndLog } from './components/Account/SignAndLog';

// import { EmailComfirmed } from './components/Account/EmailComfirmed';


export default class App extends React.Component {
  static displayName = App.name;

  render () {
    return (
        <div className="wrapper">
        <Layout>
        <Route exact path='/home' element={Home} />
        <Route path='/counter' component={Counter} />
        <Route path='/fetch-data' component={FetchData} />
        <Route path='/signandlog' component={SignAndLog} />
       
       
    </Layout>
</div>
    );
  }
}
