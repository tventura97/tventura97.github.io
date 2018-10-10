import React, { Component } from 'react';
import './App.css';
import './semantic/dist/semantic.min.css';
import { MenuBar } from './Menubar';
import { Bio }  from './Bio';



class App extends Component {
  render() {
    return (
      <div className="App">
          <MenuBar id = "topMenuBar"> </MenuBar>
      </div>
    );
  }
}

export default App;
