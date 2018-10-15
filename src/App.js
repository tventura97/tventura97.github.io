import React, { Component } from 'react';
import './App.css';
import './semantic/dist/semantic.min.css';
import { MenuBar } from './Menubar';
import { HomePage } from './HomePage';
import { Projects } from './Projects';
import { Header } from 'semantic-ui-react';
import { Resume } from './Resume'
import { Bio }  from './Bio';
import { ProjectsPage } from './ProjectsPage'




class App extends Component {

    constructor(props){
        super(props);
        this.state = { activeItem: 'Home' };
        this.handleChange = this.handleChange.bind(this);
    }


    handleChange = activeItem => {
        this.setState({activeItem});
    }


    render() {

        const state = this.state.activeItem;
        let activeContent;
        if(state === 'Home'){
            activeContent = <HomePage></HomePage>
        }
        if(state === 'About'){
            activeContent = <Bio></Bio>
        }
        if(state === 'Resume'){
            activeContent = <Resume></Resume>
        }
        if(state === 'Projects'){
            activeContent = <ProjectsPage></ProjectsPage>
        }

    return (
      <div className="App">
          <div id = "Header">
              <h1 id = "Name"> Tristan Ventura </h1>
              <MenuBar onChange={this.handleChange}></MenuBar>
          </div>
          <div className = "Body">
              {activeContent}
          </div>

      </div>
    );
  }
}

export default App;
