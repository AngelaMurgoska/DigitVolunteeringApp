import React, {Component} from 'react';
import Header from './components/Header';
import Content from './components/Content'
import './App.css';
import Footer from "./components/Footer";
import Menu from "./components/Menu/Menu";
import VolnterStory from "./components/VolnterStory";
import Sections from "./components/Sections/Sections";
class App extends Component {

  render(){
    return (
        <div className="App">
             <Menu/>
             <VolnterStory/>
             <Footer/>
        </div>
    );
  }
}

export default App;
