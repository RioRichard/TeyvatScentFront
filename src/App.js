import React, { Component } from 'react';
import { Route } from 'react-router';
import { Layout } from './layout';
import { Home } from './home';


export default class App extends React.Component {
  static displayName = App.name;

  render () {
    return (
        <div className="wrapper">
            <Layout>
                <Route exact path='/home' element={Home} />
            </Layout>
        </div>
    );
  }
}
