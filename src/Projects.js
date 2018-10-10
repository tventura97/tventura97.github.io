import {Component} from "react";
import React from "react";
import './Projects.css'
import { Grid, Icon, Divider, Header, Card} from 'semantic-ui-react'

export class Projects extends Component {

    render() {
        const src = '/images/wireframe/white-image.png'

        return (
            <div className="Projects">
                <div id = "Projects-Header">
                    <Header size = 'huge'>
                        Projects

                    </Header>

                </div>

                const CardExampleColored = () => (
                <Card.Group itemsPerRow={4}>
                    <Card color='red' image={src} />
                    <Card color='orange' image={src} />
                    <Card color='yellow' image={src} />
                    <Card color='olive' image={src} />
                    <Card color='green' image={src} />
                    <Card color='teal' image={src} />
                    <Card color='blue' image={src} />
                    <Card color='violet' image={src} />
                    <Card color='purple' image={src} />
                    <Card color='pink' image={src} />
                    <Card color='brown' image={src} />
                    <Card color='grey' image={src} />
                </Card.Group>


            </div>

        );
    }
}