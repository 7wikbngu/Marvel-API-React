import React, { Component } from 'react';
import marvellogo from './assets/marvellogo.jpg';
import './App.css';

import { Provider } from 'react-redux';
import store from './store/store';

import Cards from './components/Cards';

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <nav className="navbar navbar-dark bg-dark justify-content-center py-0">
          <span className="navbar-brand p-0"><img className="logo-size" src={marvellogo} alt="Marvel Logo"></img></span>
        </nav>
        <Cards />
      </Provider>  
    );
  }
}

export default App;
