import React, { Component } from 'react';
import './App.css';
import './semantic/dist/semantic.min.css';
import { MenuBar } from './Menubar';
import { HomePage } from './HomePage';
import { Projects } from './Projects';
import { Header } from 'semantic-ui-react';
import { Bio }  from './Bio';



class App extends Component {
  render() {
    return (
      <div className="App">
          <div id = "Header">
              <h1 id = "Name"> Tristan Ventura </h1>
              <MenuBar></MenuBar>
          </div>
          <Projects></Projects>
      </div>
    );
  }
}

export default App;
