import React, { Component } from 'react'
import ReactDOM from 'react-dom';
import { Menu, Segment } from 'semantic-ui-react'
import './Menubar.css';
import { Header } from 'semantic-ui-react'


export  class MenuBar extends Component {
    state = { activeItem: 'closest' }

    handleItemClick = (e, { name }) => this.setState({ activeItem: name })

    render() {
        const { activeItem } = this.state

        return (
            <div className = 'Menubar-MainMenu'>
                <div className = 'Menubar-Name'>
                    <Header size = 'huge'>
                        Tristan Ventura
                    </Header>
                </div>

                <div className = 'Menubar-MenuOptions'>
                    <Menu secondary >
                        <Menu.Item
                            name='About'
                            active={activeItem === 'About'}
                            onClick={this.handleItemClick}
                        >
                            About
                        </Menu.Item>

                        <Menu.Item
                            name='Resume'
                            active={activeItem === 'Resume'}
                            onClick={this.handleItemClick}
                        >
                            Resume
                        </Menu.Item>

                        <Menu.Item
                            name='Projects'
                            active={activeItem === 'Projects'}
                            onClick={this.handleItemClick}
                        >
                            Projects
                        </Menu.Item>
                    </Menu>
                </div>
        </div>
        )
    }
}