import React, { Component } from 'react';
import './index.css';
import Header from './components/header';
import Main from './components/main';
import Footer from './components/footer';

class App extends Component {
  render() {
  return (
      <section>
        <Header />
        <Main />
        <Footer />
      </section>
    );
  }
}

export default App;