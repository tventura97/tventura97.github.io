import {Component} from "react";
import React from "react";
import  Hamster from "./pic.jpg"
import { MenuBar } from './Menubar';
import './HomePage.css';
import { Header, Button } from 'semantic-ui-react';
import {Menu} from "semantic-ui-react/dist/commonjs/collections/Menu/Menu";



export class Project extends Component {

    constructor(props){
        super(props);
        this.handleItemClick = this.handleItemClick.bind(this);
    }

    state = { activeItem: 'menu' }

    handleSubmit = (val)=> {
        this.props.onChange(val);
    }
    handleItemClick = (e, { name }) => {
        this.setState({ activeItem: name });
        this.handleSubmit(name);
    }

    render() {
        return (
            <div className="Project">
                <Button name = 'Project'  onClick={this.handleItemClick}>

                </Button>
            </div>

        );
    }
}