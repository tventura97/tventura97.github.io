import React, { Component } from 'react';
import { Document, Page } from 'react-pdf/dist/entry.noworker';
import ResumePDF from './TVResume.pdf'
import { Button, Loader } from 'semantic-ui-react'
import './Resume.css'


export class Resume extends Component {

    state = {
        pageNumber: 1,
        loading: true
    }

    componentDidMount() {
        setTimeout(() => this.setState({ loading: false }), 2000); // simulates an async action, and hides the spinner
    }

    DownloadResume = () => {
        window.location = ResumePDF;


    }
    render() {
        const { pageNumber } = this.state;
        const { loading } = this.state;


        if(loading) { // if your component doesn't have to wait for an async action, remove this block
            return (<div id="Loader"><Loader active inline='centered'></Loader></div>)
        }



        return (
                <div id = "Resume">
                    <Document
                        file={ResumePDF}
                    >
                        <Page pageNumber={pageNumber} />

                    </Document>
                    <div id = "DownloadButton">
                      <Button onClick = {this.DownloadResume} color = 'green'>Download</Button>
                    </div>
                </div>
        );
    }
}