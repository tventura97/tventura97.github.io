import {Component} from "react";
import React from "react";
import './Projects.css'
import { Projects } from './Projects'
import {Image, Icon, Header, Card, Button} from 'semantic-ui-react'
import './ProjectsPage.css'
import * as contentful from 'contentful'
import ScrollToTop from 'react-scroll-up'
import * as Markdown from 'react-markdown'


export class ProjectsPage extends Component {

    state = {
        Vinny: false,
        circles:false,

    }

    client  = contentful.createClient({
        space: '75z2171sm1m9',
        accessToken: 'e105aad71c1abf93c00ca718814bfd0c1f22e3c397fef55a629272faa10159d7' })

    componentDidMount() {
        this.fetchVinny().then(this.setPosts);
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
                </div>

                <ScrollToTop showUnder={160}>
                    <span>UP</span>
                </ScrollToTop>
                <div  className = 'ReturnToMenu'>

                </div>
                <div>
                <Markdown source = {this.state.Vinny.description}/>
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
                        <Image src='https://react.semantic-ui.com/images/avatar/large/matthew.png' />
                        <Card.Content>
                            <Card.Header>Audio "Vinylizer"</Card.Header>
                            <Card.Description>Makes audio sound retro.</Card.Description>
                        </Card.Content>
                    </Card>
                    <Card name = "Project-Two" onClick = {this.handleItemClick}>
                        <Image src='https://react.semantic-ui.com/images/avatar/large/matthew.png' />
                        <Card.Content>
                            <Card.Header>Facial Recognition Vending Machine</Card.Header>
                            <Card.Description>It knows what your favorite candy is.</Card.Description>
                        </Card.Content>
                    </Card>
                    <Card name = "Project-Three" onClick = {this.handleItemClick}>
                        <Image src='https://react.semantic-ui.com/images/avatar/large/matthew.png' />
                        <Card.Content>
                            <Card.Header>FreelyEntry</Card.Header>
                            <Card.Description>Take the hassle out of journaling.</Card.Description>
                        </Card.Content>
                    </Card>
                    <Card name = "Project-Four" onClick = {this.handleItemClick}>
                        <Image src='https://react.semantic-ui.com/images/avatar/large/matthew.png' />
                        <Card.Content>
                            <Card.Header>Circles</Card.Header>
                            <Card.Description>Make hanging out with your friends much easier.</Card.Description>
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
        if(state.toString().includes('Vinny')){

            content = <Vinny></Vinny>

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