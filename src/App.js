import React, { Component } from "react";
import Header from "./components/Header";
import Contato from "./components/Contato";
import Footer from "./components/Footer";
import "./assets/App.css";
import './assets/index.css';

class App extends Component {
  render() {
  return (
      <section className="conteudo">
        <Header />
        <Contato />
        <Footer />
      </section>
    );
  }
}

export default App;