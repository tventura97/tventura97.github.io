import React, { Component } from 'react'
import ReactDOM from 'react-dom';
import { Menu, Segment } from 'semantic-ui-react'
import './Bio.css';
import Picture from './pic.jpg'
import { Header, Image } from 'semantic-ui-react'
import {MenuBar} from "./Menubar";

export class Bio extends Component {
    render() {
        return (

            <div>
                <div id = "Picture">
                    <Image src = { Picture } size = 'medium'> </Image>

                </div>
                <div id = "Bio">
                    <Header bold size = 'medium'> I like to make stuff.</Header>
                    <p>
                        to be added.
                    </p>

                </div>
            </div>
        );
    }
}