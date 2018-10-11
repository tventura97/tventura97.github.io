import {Component} from "react";
import React from "react";
import './Projects.css'
import Project from './Project'
import { Image, Icon, Header, Card} from 'semantic-ui-react'
import {HomePage} from "./HomePage";
import {Bio} from "./Bio";
import {Resume} from "./Resume";

export class Projects extends Component {



    render() {

        let content = <Projects></Projects>;

        return (
            <div className="Projects">
                <div id = "Projects-Header">
                    <Header size = 'huge'>
                        Projects
                    </Header>

                </div>
                <div>
                    {content}
                </div>

            </div>

        );
    }
}