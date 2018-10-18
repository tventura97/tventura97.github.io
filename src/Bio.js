import React, { Component } from 'react'
import ReactDOM from 'react-dom';
import { Menu, Segment } from 'semantic-ui-react'
import './Bio.css';
import Picture from './mehackru.jpg'
import AcePic from './MeAndAce.jpg'
import AceSunglasses from './acesunglasses.JPG'
import { Header, Image, Tab } from 'semantic-ui-react'
import {MenuBar} from "./Menubar";

export class Bio extends Component {

    render() {
        const Story = () => (
            <div id = "Bio">
                <Header bold size = 'tiny'> We called it RFInD.
                </Header>
                <p>
                    I started my first year at Rutgers University and quickly found myself surrounded by people with the same interests as me: creating things and technology. It didn’t take us long to come up with an idea that we were passionate about.

                    We learned about the chaos and disorganization that plagued triage stations and emergency rooms during disasters and decided to try and do something about it. RFInD is an RFID based real-time location tracking system designed to allow doctors to track patients and their status so that those who needed treatment sooner would get it sooner. We pitched the idea everywhere we could, raised over $10,000 in funding, and even got invited to present our work at the Clinton Global Initiative - University (CGI-U) annual conference. RFInD was very technically challenging. It wasn’t easy (or cheap) to come up with an implementation of the idea that was both economical and effective. But, I was passionate about the idea. I spent more time learning about RFIDs than any average college student should.  But, it was a wonderful experience and taught me an extremely valuable lesson:                     </p>
                <Header bold size = 'tiny'> I learned that there will be times where the things that you know and the skills that you have might not be enough. You should always be ready to learn whatever it takes.
                </Header>
                <p>
                    RFInD wasn’t the first time that I would be faced with this situation. I landed a job as an undergrad EE researcher for the National Science Foundation. Because of my background, I was initially assigned to a project focused on investigating different ways of implementing indoor tracking systems. However, since I was the only intern who had some form of programming experience, they reassigned me to a different project - developing a mobile application that would assist students in learning physics. I had taken classes in C++ for my major, but I never learned anything about developing mobile apps. I ended up learning the fundamentals of app development and even some game design basics. I worked closely with the physics professors that would be adopting my application and used Unity to create a mobile application that provided a more interactive learning experience. My dedication paid off and my work ended up getting published and presented at the ASEE annual conference in 2018. It also expanded my interests from designing hardware to developing software.
                </p>
                <Header bold size = 'tiny'> This would come in handy for my next internship, which ended up being the most challenging but fulfilling role I’ve ever held.
                </Header>
                <p>
                    In the Summer of 2018, I interned for a company, AdhereTech, in New York City. AdhereTech makes smart pill bottles that help patients take their medications on time. I had two responsibilities as their sole electrical engineering intern: create automated testing equipment for their bottle and design a new sensor for their next generation products. It sounded simple enough. But as my work progressed, I found myself taking charge of a lot more things. The initial plan for the testing equipment was pretty basic: a few physical buttons to set some parameters and a basic display. This proved problematic, as the setup didn’t give the equipment much functionality.
                </p>
                <Header bold size = 'tiny'> I knew that there was a better way to approach this problem.
                </Header>
                <p>
                    I suggested developing a high level software interface as well. The application would talk to an Arduino or other microcontroller platform, which was responsible for handling the hardware rather than the Arduino and a few physical buttons serving as the sole method of communicating with the test equipment. While it would require developing two pieces of software (one to handle the hardware and one that handled the UI/communicating with the Arduino), I firmly believed that this was a better route.

                </p>
                <Header bold size = 'tiny'> They gave my idea the green light.
                </Header>
                <p>
                    I was essentially responsible for the development of the testing equipment from the ground up. So, I spent the first 6 weeks of my internship designing the hardware for the testing equipment, writing the code responsible for controlling the hardware, and developing a desktop application that would communicate with both the Arduino and the bottle’s sensors to gather data. It was capable of testing a bottle, producing thousands of data points, and analyzing that data to provide the user with information about the performance of different sensors. After the equipment was operating reliably, I was then tasked with improving one of the sensors in the bottle. I wasn’t exposed to anything related to electromagnetic sensor design in school, so this was an entirely new realm for me. I learned everything I could about electromagnetic sensor design and its use in the industry, and applied that knowledge in my internship. I created several different sensor patterns and, using the equipment I built earlier, acquired and analyzed thousands of data points to determine which patterns had the best performance. I iterated on my designs and determined the relationships between the effectiveness of the sensors and the different parameters taken into account when designing the pattern. Using this knowledge, I developed a new sensor design that showed greatly improved performance compared to the sensor currently in use.
                </p>
                <p>
                    That internship gave me the opportunity to take my creative passion and apply it in the industry. It gave me the experience of creating every aspect of a product, software and hardware, and pointed me in the direction that I want to take my career.
                </p>
                <Header bold size = 'tiny'>
                    I want to expand my skills in a position that pushes my creativity to the limits.
                </Header>
             </div>

        )

        const About = () => (
            <div>
                <Image id = 'HackRUImage' src= { Picture } size='medium'/>
                <Header bold size = 'large'> I like to make stuff.</Header>
                <p>
                    For as long as I can remember, I was always taking things apart; trying to discover what made them tick. Whether it was TV remotes, video game controllers, the family landline, and, at one point, even my mother’s tube of lipstick (I got into quite a bit of trouble for that one).
                </p>
                <Header bold size = 'tiny'> This strange inclination to constantly take things apart in an attempt to figure out how they worked quickly evolved into a new passion: making things. </Header>

                <p>
                    I started with small things, like paper pencil cases or weird cardboard contraptions. There wasn’t much of a purpose or direction to my habit. I kind of just made anything that came to mind. That is, until I found my dad working on the family computer. He walked me through how everything fit together and, even though I couldn’t understand what he was talking about at the time, I was intrigued. I knew at that moment that my passion was technology. I started building my own computers, then building them for my friends, then finding any excuse to build them in general. But, I wasn’t satisfied with just building computers. I wanted to take my desire to create things and apply it on a wider spectrum. So, going into college, I decided to major in electrical and computer engineering. I knew that it would give me the skills that I needed to be able to pursue my interests as a career.
                </p>


            </div>
        )






        const panes = [
            { menuItem: 'Who I am', render: () => <Tab.Pane><About></About></Tab.Pane> },
            { menuItem: 'My Story', render: () => <Tab.Pane><Story></Story></Tab.Pane> },
            { menuItem: 'My Dog', render: () => <Tab.Pane>
                    <div>
                    <Header id = 'AceCaption' size = 'medium'> I also have a dog. His name is Ace Ventura (like the pet detective). </Header>
                    <div  >
                        <Image id = 'acepic' src = {AcePic} size ='huge'/>
                    </div>
                    </div>
                </Tab.Pane> },
        ]

        const BioTabs = () => (
            <Tab menu={{ fluid: true, vertical: true, tabular: false }} panes={panes} />
        )


        return (

            <div>
                <div id = "Tabs">
                    <BioTabs></BioTabs>
                </div>

            </div>
        );
    }
}