import {Component} from "react";
import React from "react";
import  Hamster from "./pic.jpg"
import { MenuBar } from './Menubar';
import './HomePage.css';
import { Header } from 'semantic-ui-react';



export class Project extends Component {

    render() {
        return (
            <div className="Project">
                <div id = "Header">
                    <h1 id = "Name"> Tristan Ventura </h1>
                    <MenuBar onChange={this.handleChange}></MenuBar>
                </div>
                <div>
                    <Header size = 'huge'>
                        Project
                    </Header>
                </div>
                <div id = "Image">
                    <img src = { Hamster } alt = "Hamster throwing up a banana" style={{width: 900, height: 600}}></img>
                </div>
            </div>

        );
    }
}