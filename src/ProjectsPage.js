import {Component} from "react";
import React from "react";
import './Projects.css'
import { Projects } from './Projects'
import { Project } from './Project'
import { Image, Icon, Header, Card} from 'semantic-ui-react'
import './ProjectsPage.css'

export class ProjectsPage extends Component {

    //Gonna just do this a really janky way bc I don't have the time to do it any differently.

    constructor(props){
        super(props);
        this.state = { activeItem: 'ProjectsGrid' };
        this.handleChange = this.handleChange.bind(this);
    }


    handleChange = activeItem => {
        this.setState({activeItem});
    }

    render() {

    //Grid of Projects
        const ProjectsGrid = () => (
            <Card.Group itemsPerRow={4} className = "CardGroup" name = 'ProjectsGrid'>
                <Card name = "Project" onClick = {this.handleItemClick}>
                    <Image src='https://react.semantic-ui.com/images/avatar/large/matthew.png' />
                    <Card.Content>
                        <Card.Header>Matthew</Card.Header>
                        <Card.Meta>
                            <span className='date'>Joined in 2015</span>
                        </Card.Meta>
                        <Card.Description>Matthew is a musician living in Nashville.</Card.Description>
                    </Card.Content>
                    <Card.Content extra>
                        <a>
                            <Icon name='user' />
                            22 Friends
                        </a>
                    </Card.Content>
                </Card>
                <Card name = "Project" onClick = {this.handleItemClick}>
                    <Image src='https://react.semantic-ui.com/images/avatar/large/matthew.png' />
                    <Card.Content>
                        <Card.Header>Matthew</Card.Header>
                        <Card.Meta>
                            <span className='date'>Joined in 2015</span>
                        </Card.Meta>
                        <Card.Description>Matthew is a musician living in Nashville.</Card.Description>
                    </Card.Content>
                    <Card.Content extra>
                        <a>
                            <Icon name='user' />
                            22 Friends
                        </a>
                    </Card.Content>
                </Card>
                <Card name = "Project" onClick = {this.handleItemClick}>
                    <Image src='https://react.semantic-ui.com/images/avatar/large/matthew.png' />
                    <Card.Content>
                        <Card.Header>Matthew</Card.Header>
                        <Card.Meta>
                            <span className='date'>Joined in 2015</span>
                        </Card.Meta>
                        <Card.Description>Matthew is a musician living in Nashville.</Card.Description>
                    </Card.Content>
                    <Card.Content extra>
                        <a>
                            <Icon name='user' />
                            22 Friends
                        </a>
                    </Card.Content>
                </Card>
                <Card name = "Project" onClick = {this.handleItemClick}>
                    <Image src='https://react.semantic-ui.com/images/avatar/large/matthew.png' />
                    <Card.Content>
                        <Card.Header>Matthew</Card.Header>
                        <Card.Meta>
                            <span className='date'>Joined in 2015</span>
                        </Card.Meta>
                        <Card.Description>Matthew is a musician living in Nashville.</Card.Description>
                    </Card.Content>
                    <Card.Content extra>
                        <a>
                            <Icon name='user' />
                            22 Friends
                        </a>
                    </Card.Content>
                </Card>
            </Card.Group>
        )


            let content = <ProjectsGrid/>;

        return (
            <div className="Projects">
                <div id = "Projects-Header">
                    <Header size = 'huge'>
                        Projects
                    </Header>

                </div>
                <div>
                    { content }
                </div>

            </div>

        );
    }
}