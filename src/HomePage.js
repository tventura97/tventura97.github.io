import {Component} from "react";
import React from "react";
import  Hamster from "./pic.jpg"
import './HomePage.css'
import { Grid, Icon, Divider, Header, Button } from 'semantic-ui-react'
import { ProjectsPage } from './ProjectsPage'

export class HomePage extends Component {

    constructor(props){
        super(props);
        this.handleItemClick = this.handleItemClick.bind(this);
    }

    handleSubmit = (val)=> {
        this.props.onChange(val);
    }
    handleItemClick = (e, { name }) => {
        alert(name)
        this.setState({ activeItem: name });
        this.handleSubmit(name);
    }


    iconClicked = (name) =>
    {
        if (name == 'LinkedIn')
        {
            window.location.href = "https://www.linkedin.com/in/tristanventura"
        }
        if (name == 'Github')
        {
            window.location.href = "https://www.github.com/tventura97"
        }
        if (name == 'Maisy')
        {
            window.location.href = "https://maisyleigh.github.io/"
        }
        if (name == 'Mail'){
            window.open('mailto:tventura0297@gmail.com?subject=subject&body=body');
        }

    }

    render() {


        return (
            <div className="HomePage">
                <div  id = "MainQuote">
                    <Header size = 'huge'> I like to make stuff. </Header>
                </div>

                <div id = "Icons">
                    <Grid columns = {4} padded>
                        <Grid.Column>
                        <Icon name='github' size = 'big' onClick = {() => this.iconClicked('Github')}/>
                        </Grid.Column>
                        <Grid.Column>
                        <Icon name='linkedin' size = 'big' onClick = {() => this.iconClicked('LinkedIn')}/>
                        </Grid.Column>
                        <Grid.Column>
                        <Icon name='users' size = 'big'onClick = {() => this.iconClicked('Maisy')}/>
                        </Grid.Column>
                        <Grid.Column>
                        <Icon name='mail' size = 'big'onClick = {() => this.iconClicked('Mail')}/>
                        </Grid.Column>
                    </Grid>
                </div>
            </div>

        );
    }
}