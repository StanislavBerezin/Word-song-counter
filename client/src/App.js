import React, { Component } from "react";
import "./App.css";
import { Route } from "react-router-dom";
import Main from "./containers/mainBasic/Main";
import DisplayNAVandModals from './containers/modalContainers/navANDmodals'
import Faq from './containers/FAQ/faq'
import Footer from "./components/footer/Footer";
class App extends Component {

  render() {
    
    return (
      <div className="App">
        <DisplayNAVandModals/>
       
        <Route exact path="/" component={Main} />
        <Route exact path="/faq" component={Faq} />
        <Footer />
      </div>
    );
  }
}

export default App;
