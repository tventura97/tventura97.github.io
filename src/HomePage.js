import {Component} from "react";
import React from "react";
import  Hamster from "./pic.jpg"
import './HomePage.css'
import { Grid, Icon, Divider, Header, Button } from 'semantic-ui-react'
import Reveal from 'react-reveal/Reveal';
import Slide from 'react-reveal/Slide';
import Pulse from 'react-reveal/Pulse';
import Fade from 'react-reveal/Fade';
import { ProjectsPage } from './ProjectsPage'

export class HomePage extends Component {

    state = {
        clicked: false
    }

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
        if (name == 'Mail'){
            window.open('mailto:tventura0297@gmail.com?subject=subject&body=body');
        }

    }

    skillsButtonClicked = () =>
    {
        this.setState({
            clicked: true
        });
    }

    backButtonClicked = () =>
    {
        this.setState({
            clicked: false
        });
    }


    render() {


        return (
            <div className="HomePage">
                {this.state.clicked ? (
                            <div>
                                <Reveal effect="fadeInUp">
                                    <div id="pageTwo_wrapper">
                                        <div id="aboutStats">
                                            <div id="edu">
                                                <h3>Education</h3>
                                                <div className="subheaderText">Bachelor's in Electrical and Computer Engineering</div>
                                                <div className="descriptionText">Rutgers University - Class of 2019</div>
                                            </div>
                                            <div id="exp">
                                                <h3>Experience</h3>
                                                <div className="subheaderText">Electrical Engineering Intern</div>
                                                <div className="descriptionText">AdhereTech - June 2018 - Sept. 2018</div>
                                            </div>
                                        </div>
                                        <div id="aboutDevSkills">
                                            <div id="dev">
                                                <h3>Languages</h3>
                                                <div className="subheaderText">javascript</div>
                                                <div className="subheaderText">react.js</div>
                                                <div className="subheaderText">html/css</div>
                                                <div className="subheaderText">swift</div>
                                                <div className="subheaderText">SQL</div>
                                            </div>
                                        </div>
                                        <div id="aboutDesignSkills">
                                            <div id="design">
                                                <h3>Tools & Softwares</h3>
                                                <div className="subheaderText">ux/ui design</div>
                                                <div className="subheaderText">problem solving</div>
                                                <div className="subheaderText">creative thinking</div>
                                                <div className="subheaderText">prototyping & wireframing</div>
                                            </div>
                                        </div>
                                    </div>
                                </Reveal>
                                <div id="backButtonWrapper">
                                    <Button id="backButton" onClick = {() => this.backButtonClicked()}> BACK <Icon name='angle down' size='small'/></Button>
                                </div>
                            </div>
                    ) : (
                <div  id = "MainQuote">
                    <Header size = 'huge'> I like to make stuff. </Header>
                    <div id = "skillsButtonWrapper">
                        <Button id="skillsButton" onClick = {() => this.skillsButtonClicked()}> My skills <Icon name='angle right' size='small'/></Button>
                    </div>

                </div>
                )}

                <div id = "Icons">
                    <Grid columns = {4} padded>
                        <Grid.Column>
                        <Icon name='github' size = 'big' onClick = {() => this.iconClicked('Github')}/>
                        </Grid.Column>
                        <Grid.Column>
                        <Icon name='linkedin' size = 'big' onClick = {() => this.iconClicked('LinkedIn')}/>
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