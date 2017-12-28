import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { Helmet } from "react-helmet";

class App extends Component {
  render() {
    return (
      <div className="App">
	<Helmet>
          <html lang="en" />
          <meta charSet="utf-8" />
          <title>A11y React Demo</title>
        </Helmet>

        <header className="App-header">
          <h1 tabindex="-1" className="App-title">Welcome to my A11y React Demo</h1>
        </header>

      </div>
    );
  }
}

export default App;
