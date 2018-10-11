import React, { Component } from 'react'
import ReactDOM from 'react-dom';
import { Menu, Segment } from 'semantic-ui-react'
import './Menubar.css';
import { Header } from 'semantic-ui-react'


export class MenuBar extends Component {
    state = { activeItem: 'closest' }

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
        const { activeItem } = this.state

        return (
            <div id = 'Menubar-MainMenu'>
                <Menu secondary >
                    <Menu.Item
                        name='Home'
                        onClick={this.handleItemClick}
                    >
                        Home
                    </Menu.Item>
                    <Menu.Item
                        name='About'
                        onClick={this.handleItemClick}
                    >
                        About
                    </Menu.Item>

                    <Menu.Item
                        name='Resume'
                        onClick={this.handleItemClick}
                    >
                        Resume
                    </Menu.Item>

                    <Menu.Item
                        name='Projects'
                        onClick={this.handleItemClick}
                    >
                        Projects
                    </Menu.Item>
                </Menu>
        </div>
        )
    }
}