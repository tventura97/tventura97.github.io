import React, { Component } from 'react';
import './App.css';
import './semantic/dist/semantic.min.css';
import { MenuBar } from './Menubar';
import { HomePage } from './HomePage'
import { Bio }  from './Bio';



class App extends Component {
  render() {
    return (
      <div className="App">
          <div className = "App-topMenuBar">
          <MenuBar></MenuBar>
          </div>
          <div className = "App-pageBody">
              <HomePage></HomePage>
          </div>
      </div>
    );
  }
}

export default App;
