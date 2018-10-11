import {Component} from "react";
import React from "react";
import './Projects.css'
import { Grid, Icon, Image, Header, Card} from 'semantic-ui-react'

export class Projects extends Component {

    constructor(props){
        super(props);
        this.handleItemClick = this.handleItemClick.bind(this);
    }

    state = { activeItem: 'menu' }


    handleItemClick = (e, { name }) => {
        alert(name)
    }

    render() {

        return (
            <div className="Projects">
                <Card.Group itemsPerRow={4}>
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


            </div>

        );
    }
}