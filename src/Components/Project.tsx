import React from 'react';
import SMUChess from '../../smuChess.png'
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
                <Button target='_Blank' href={item.codeLink}>
                  View Source Code  
                </Button>
                <Button target='_Blank' href={item.LiveSite}>
                  Live Site 
                </Button>
            </SpaceBetween>
        }
      ]
}}
items={[{
img : SMUChess,
codeLink : 'https://github.com/Foforane/chessSMU',
LiveSite : 'https://smu-chess.netlify.app/',
name : "SMU Lichess Ranking System",
description :"A website to live rank chess players at SMU according to their rating using the Lichess API. It was initially created with PHP then got recreated with Typescript and React.",
duration : "March 2022 - Present",
tools : "Typescript, React, CloudScape and Lichess API"
},

]}
header={<Header>Projects</Header>}
/>
</>
}

export default Projects;