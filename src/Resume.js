import React, { Component } from 'react';
import { Document, Page } from 'react-pdf/dist/entry.noworker';
import ResumePDF from './TVResume.pdf'
import './Resume.css'
export class Resume extends Component {

    state = {
        pageNumber: 1,
    }

    render() {
        const { pageNumber } = this.state;

        return (
                <div id = "Resume">
                    <Document
                        file={ResumePDF}
                    >
                        <Page pageNumber={pageNumber} />

                    </Document>
                </div>
        );
    }
}