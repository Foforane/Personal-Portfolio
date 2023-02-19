import React from "react";
import Cards  from "@cloudscape-design/components/cards";
import Header  from "@cloudscape-design/components/header";
import Link  from "@cloudscape-design/components/link";
function Education(){
    return <div>
    <Cards
    cardDefinition={{
        header: item => (
            <Link href={item.link} target= "_blank" fontSize="heading-m">{item.School}</Link>
          ),
          sections: [
            {
              id: "degree",
              header: "Degree",
              content: item => item.degree
            },
            {
              id: "modules",
              header: "Modules",
              content: item => item.modules
            },
            {
              id: "duration",
              header: "Duration",
              content: item => item.duration
            },
            {
                id: "average",
                header: "Final Average",
                content: item => item.average
              }
          ]
    }}
    items={[
        {
    School : "Sefako Makgatho Health Sciences University",
    link : 'https://www.smu.ac.za/',
    degree : "BSc (Hons) Computer Sciences",
    modules :'Research, Mobile Development, Artificial Intelligence, Advanced Database Management Systems and Health Informatics.',
    duration : "March 2022 - December 2022",
    average : "71%"
    },
    {
        School : "Sefako Makgatho Health Sciences University",
        link : 'https://www.smu.ac.za/',
        degree : "BSc Mathematical Sciences, Computer Sciences",
        modules :'Data Structures, Computer Networks, Artificial Intelligence, Computing Concepts and algorithms and Database Systems',
        duration : "February 2019 - December 2021",
        average : "66%"
        },
    
    ]}
    header={<Header>Education</Header>}
    />
    
    </div>
}

export default Education;