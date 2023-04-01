import React from 'react';
import SMUChess from '../../smuChess.png';
import me from '../../Cyber.jpeg';
import prosira from '../../ProSiRaDJ.jpeg';
import smuParkingDisc from '../../smuParking.png';
import Cards from '@cloudscape-design/components/cards';
import { SpaceBetween,Button } from '@cloudscape-design/components';

import Header from '@cloudscape-design/components/header';
function Projects(){
    const style ={
        borderRadius : '25px'
    }
return <>
 <Cards
cardDefinition={{
    header: item => (
        <img style={style} src ={item.img} width= '100%'/>
      ),
      sections: [
        {
          id: "title",
          header: "Project Name",
          content: item => item.name
        },
        {
          id: "description",
          header: "Description",
          content: item => item.description
        },
        {
          id: "duration",
          header: "Duration",
          content: item => item.duration
        },
        {
            id: "tools",
            header: "Technologies Used",
            content: item => item.tools
          },
        {
            id:"source",
            content : item => <SpaceBetween direction='horizontal' size='xs'>
                <Button  href={item.codeLink}>
                Source Code  
                </Button>
                <Button  href={item.LiveSite}>
                  Live Site 
                </Button>
            </SpaceBetween>
        }
      ]
}}
items={[
    {
        img : me,
        codeLink : 'https://github.com/Foforane/Personal-Portfolio',
        LiveSite : 'https://thakgalang-foforane.netlify.app/',
        name : "My Personal Website",
        description :"This is my personal portfolio where you will a bit more about me and my skill set.",
        duration : "August 2022 - Present",
        tools : "Typescript, React and CloudScape."
        },
    {

img : SMUChess,
codeLink : 'https://github.com/Foforane/chessSMU',
LiveSite : 'https://smu-chess.netlify.app/',
name : "SMU Lichess Ranking System",
description :"A website to live rank chess players at SMU according to their rating using the Lichess API. It was initially created with PHP then got recreated with Typescript and React.",
duration : "March 2022 - Present",
tools : "Typescript, React, CloudScape and Lichess API."
},

    {
        img : prosira,
        codeLink : '',
        LiveSite : '',
        name : "ProSiRa DJ's Website",
        description :"A personal website for my friend who is an Artist and in need of a Website to show his music. This site is currently under construction and planned to go to production by end of May.",
        duration : "February 2023 - Present",
        tools : "Typescript, React, Spotify API and Material UI."
        },
        {
            img : smuParkingDisc,
            codeLink : '',
            LiveSite : '',
            name : "Sefako Makgatho Health Science University Parking Disc",
            description :"This Website helps SMU to better manage parking spaces in the Institution, all stuff members and students register their cars on the site. The source code and link of the website are not available as this is an Internal website.",
            duration : "March 2022 - December 2022",
            tools : "PHP, JavaScript,SQL and CSS."
            },
]}
header={<Header>Projects</Header>}
/>
</>
}

export default Projects;