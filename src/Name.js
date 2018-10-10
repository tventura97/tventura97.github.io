import React, { Component } from 'react';
import { Header } from 'semantic-ui-react'
import './Name.css'


export class Name extends Component {
    render() {
        return (
            <div className="Name">
                <Header size='huge'>Tristan Ventura</Header>
            </div>
        );
    }
}