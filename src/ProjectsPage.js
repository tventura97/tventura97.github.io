import {Component} from "react";
import React from "react";
import './Projects.css'
import { Projects } from './Projects'
import {Image, Icon, Header, Card, Button} from 'semantic-ui-react'
import './ProjectsPage.css'
import * as contentful from 'contentful'
import ScrollToTop from 'react-scroll-up'
import ComingSoonImage from './comingsoon.png'
import CirclesImage from './circles.jpg'
import VinnyPic from './vinny.jpg'
import RfindLogo from './rfindlogo.jpg'
import * as Markdown from 'react-markdown'


export class ProjectsPage extends Component {

    state = {
        Vinny: false,
        Circles:false,

    }

    client  = contentful.createClient({
        space: '75z2171sm1m9',
        accessToken: 'e105aad71c1abf93c00ca718814bfd0c1f22e3c397fef55a629272faa10159d7' })

    componentDidMount() {
        this.fetchVinny().then(this.setPosts);
        this.fetchCircles().then(this.setPosts);
    }
    //Gonna just do this a really janky way bc I don't have the time to do it any differently.

    fetchVinny = () => this.client.getEntry('2L9vt2HTjqK2OGEuaMqGm8')
        .then(entry => {
            if(entry.fields){
                console.log(entry.fields)
                this.setState({
                    Vinny: entry.fields,
                })
            }
        })
    fetchCircles = () => this.client.getEntry('4Z12b83jF6koKEOOG8scqs')
        .then(entry => {
            if(entry.fields){
                console.log(entry.fields)
                this.setState({
                    Circles: entry.fields,
                })
            }
        })


    constructor(props){
        super(props);
        this.state = { activeItem: 'ProjectsGrid' };
    }


    handleItemClick = (e, { name }) => {
        this.setState({ activeItem: name });

    }

    render() {

        const Vinny = () => (
            <div className="Project-Vinny">
                <p>
                </p>
                <div className = "BackButton">
                    <Button name = 'ProjectsGrid'  onClick={this.handleItemClick}>
                        <Icon name = 'arrow left' size ='large'>
                        </Icon>
                    </Button>
                </div>

                <div className = "ProjectHeader">
                    <Header size = 'huge'>{this.state.Vinny.title} </Header>
                    <Header size = 'medium'>Skills & Techs:</Header>
                    <Markdown source = {this.state.Vinny.technologies}/>
                </div>
                <ScrollToTop showUnder={160}>
                    <span>UP</span>
                </ScrollToTop>
                <div className = "motivation">
                    <Header size = 'medium'> Motivation </Header>
                <Markdown source = {this.state.Vinny.motivation}/>
                </div>
                <div className = "process">
                    <Header size = 'medium'> Process (in progress) </Header>
                    <Markdown source = {this.state.Vinny.process}/>
                </div>
                <div className = "results">
                    <Header size = 'medium'> Results </Header>

                    <Markdown source = {this.state.Vinny.results}/>
                </div>


            </div>
        )

        const Circles = () => (
            <div className="Project-Circles">
                <p>
                </p>
                <div className = "BackButton">
                    <Button name = 'ProjectsGrid'  onClick={this.handleItemClick}>
                        <Icon name = 'arrow left' size ='large'>
                        </Icon>
                    </Button>
                </div>

                <div className = "ProjectHeader">
                    <Header size = 'huge'>{this.state.Circles.title} </Header>
                    <Header size = 'medium'>Skills & Techs:</Header>
                    <Markdown source = {this.state.Circles.technologies}/>
                </div>
                <ScrollToTop showUnder={160}>
                    <span>UP</span>
                </ScrollToTop>
                <div className = "motivation">
                    <Header size = 'medium'> Motivation </Header>
                    <Markdown source = {this.state.Circles.motivation}/>
                </div>
                <div className = "process">
                    <Header size = 'medium'> Process</Header>
                    <Markdown source = {this.state.Circles.process}/>
                </div>
                <div className = "results">
                    <Header size = 'medium'> Results </Header>

                    <Markdown source = {this.state.Circles.results}/>

                </div>
                <div>

                    <Header size = 'medium'> The application is currently being developed.</Header>
                </div>


            </div>
        )

        const ProjectsGrid = () => (
            <div>
                <div id = "Projects-Header">
                    <Header size = 'huge'>
                        Projects
                    </Header>
                </div>

                <Card.Group itemsPerRow={4} className = "CardGroup" name = 'ProjectsGrid'>
                    <Card name = "Project-Vinny" onClick = {this.handleItemClick}>
                        <Image src = { VinnyPic } />
                        <Card.Content>
                            <Card.Header>Audio "Vinylizer"</Card.Header>
                            <Card.Description>Makes audio sound retro. (content being updated)</Card.Description>
                        </Card.Content>
                    </Card>

                    <Card name = "Project-RFInD" onClick = {this.handleItemClick}>
                        <Image src={ RfindLogo } />
                        <Card.Content>
                            <Card.Header>RFInD (coming soon)</Card.Header>
                            <Card.Description>RFID based location tracking startup.</Card.Description>
                        </Card.Content>
                    </Card>

                    <Card name = "Project-Optics" onClick = {this.handleItemClick}>
                        <Image src={ComingSoonImage} />
                        <Card.Content>
                            <Card.Header>Learn Optics (github link)</Card.Header>
                            <Card.Description>Learn optics.</Card.Description>
                        </Card.Content>
                    </Card>

                    <Card name = "Project-Face" onClick = {this.handleItemClick}>
                        <Image src={ComingSoonImage} />
                        <Card.Content>
                            <Card.Header>Facial Recognition Vending Machine (coming soon)</Card.Header>
                            <Card.Description>It knows what your favorite candy is.</Card.Description>
                        </Card.Content>
                    </Card>


                    <Card name = "Project-Entry" onClick = {this.handleItemClick}>
                        <Image src={ComingSoonImage} />
                        <Card.Content>
                            <Card.Header>FreelyEntry</Card.Header>
                            <Card.Description>Take the hassle out of journaling.</Card.Description>
                        </Card.Content>
                    </Card>

                    <Card name = "Project-Circles" onClick = {this.handleItemClick}>
                        <Image src={CirclesImage} />
                        <Card.Content>
                            <Card.Header>Circles</Card.Header>
                            <Card.Description>Make hanging out with your friends much easier.</Card.Description>
                        </Card.Content>
                    </Card>

                    <Card name = "Project-LoRa" onClick = {this.handleItemClick}>
                        <Image src={ComingSoonImage} />
                        <Card.Content>
                            <Card.Header>LoRa Notifier</Card.Header>
                            <Card.Description>Use the LoRa network to let someone know you're thinking about them.</Card.Description>
                        </Card.Content>
                    </Card>

                    <Card name = "Project-Equalizer" onClick = {this.handleItemClick}>
                        <Image src={ComingSoonImage} />
                        <Card.Content>
                            <Card.Header>Graphical Equalizer (github link)</Card.Header>
                            <Card.Description>Simple, graphical equalizer implemented in MATLAB.</Card.Description>
                        </Card.Content>
                    </Card>

                    <Card name = "Project-DressMe" onClick = {this.handleItemClick}>
                        <Image src={ComingSoonImage} />
                        <Card.Content>
                            <Card.Header>DressMe</Card.Header>
                            <Card.Description>Don't feel like keeping up with the latest fashion trends? Let our ML Algorithms do it for you.</Card.Description>
                        </Card.Content>
                    </Card>

                    <Card name = "Project-Banking" onClick = {this.handleItemClick}>
                        <Image src={ComingSoonImage} />
                        <Card.Content>
                            <Card.Header>Simple Banking Application (github link)</Card.Header>
                            <Card.Description>Simple banking console application.</Card.Description>
                        </Card.Content>
                    </Card>

                    <Card name = "Project-Account" onClick = {this.handleItemClick}>
                        <Image src={ComingSoonImage} />
                        <Card.Content>
                            <Card.Header>Simple Account Management Application (github link)</Card.Header>
                            <Card.Description>Simple account management console application.</Card.Description>
                        </Card.Content>
                    </Card>
                </Card.Group>
            </div>
        )




        const state = this.state.activeItem;
        let content = <ProjectsGrid/>

        if(state === 'ProjectsGrid'){
            content = <ProjectsGrid/>;
        }
        else if(state.toString().includes('Vinny')){

            content = <Vinny></Vinny>

        }
        else if(state.toString().includes('Circles')){

            content = <Circles></Circles>

        }
        else if(state.toString().includes('Optics')){

            window.location.href = "https://github.com/tventura97/Learn-Optics---Unity/tree/develop"

        }
        else if(state.toString().includes('Banking')){

            window.location.href = "https://github.com/tventura97/Bank-Account-Console-App"

        }
        else if(state.toString().includes('Account')){

            window.location.href = "https://github.com/tventura97/AccMgmt-Console-App"

        }
        else if(state.toString().includes('Equalizer')){

            window.location.href = "https://github.com/tventura97/Equalizer"

        }




        //Grid of Projects

        return (
            <div className="Projects">
                <div>
                    { content }
                </div>

            </div>

        );
    }
}