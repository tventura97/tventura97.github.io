import React, { Component } from 'react';
import './App.css';
import './semantic/dist/semantic.min.css';
import { MenuBar } from './Menu';
import { Portfolio } from './Portfolio';
import { Resume } from './Resume';
import { About } from './About';
import { Image } from 'semantic-ui-react'
import maisyImg from './files/maisy_name.png'

class App extends React.Component {

    constructor(props){
        super(props);
        this.state = { activeItem: 'portfolio' };
        this.handleChange = this.handleChange.bind(this);
    }


    handleChange = activeItem => {
        this.setState({activeItem});
    }

    render() {

        const menuState = this.state.activeItem;
        let resume;
        if(menuState === 'about'){
            resume = <About></About>
        }
        if(menuState === 'resume'){
            resume = <Resume></Resume>
        }
        if(menuState === 'portfolio'){
            resume = <Portfolio></Portfolio>
        }


        return (

            <div className="App">
                <div className="App-header">
                    <div id="MaisyName">
                        <Image src={maisyImg} size='medium' circular />
                    </div>
                    <MenuBar id="menubar" onChange={this.handleChange}></MenuBar>
                </div>
                <div className="App-body">
                    {resume}






                </div>
            </div>
        );
    }
}

export default App;