import {Component} from "react";
import React from "react";
import  Hamster from "./pic.jpg"
export class HomePage extends Component {
    render() {
        return (
            <div className="Pictures">
                <img src = { Hamster } alt = "Hamster throwing up a banana"></img>
            </div>
        );
    }
}