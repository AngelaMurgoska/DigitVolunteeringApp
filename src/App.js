import React, {Component} from 'react';
import Header from './components/Header';
import Content from './components/Content'
import './App.css';
import Footer from "./components/Footer";

class App extends Component {

  render(){
    return (
        <div className="App">
             <Header/>
             <Content/>
             <Footer/>
             <div>lemme see</div>
        </div>
    );
  }
}

export default App;
