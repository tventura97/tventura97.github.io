import {Component} from "react";
import React from "react";
import  Hamster from "./pic.jpg"
import './HomePage.css'
import { Grid, Icon, Divider, Header } from 'semantic-ui-react'
export class HomePage extends Component {
    render() {
        return (
            <div className="HomePage">
                <div  id = "MainQuote">
                    <Header size = 'huge'> I like to make stuff. </Header>
                </div>
                <div id = "Icons">
                    <Grid columns = {4} padded>
                        <Grid.Column>
                        <Icon name='github' size = 'big'/>
                        </Grid.Column>
                        <Grid.Column>
                        <Icon name='linkedin' size = 'big'/>
                        </Grid.Column>
                        <Grid.Column>
                        <Icon name='users' size = 'big'/>
                        </Grid.Column>
                        <Grid.Column>
                        <Icon name='mail' size = 'big'/>
                        </Grid.Column>
                    </Grid>
                </div>



            </div>

        );
    }
}