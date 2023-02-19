import React from 'react';
import Link from '@cloudscape-design/components/link';
import Cards from '@cloudscape-design/components/cards';
import Header from '@cloudscape-design/components/header';
function Ex(){
return <div id='Experience'>
<Cards
cardDefinition={{
    header: item => (
        <Link href={item.link} target= "_blank" fontSize="heading-m">{item.Company}</Link>
      ),
      sections: [
        {
          id: "title",
          header: "Title",
          content: item => item.title
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
          }
      ]
}}
items={[{
Company : "Amazon Web Service",
link : 'https://aws.amazon.com/',
title : "Software Engineer Intern",
description :"Developing tools and APIs to assist front-end teams in delighting our customers.",
duration : "December 2022 - March 2023",
tools : "Typescript, React and Git"
},
{
Company : "Sefako Makgatho Health Sciences University",
link : 'https://www.smu.ac.za/',
title : "Student Assistance (System Developer)",
description :"Developing Systems for the University to help improve the experience of students.",
duration : "March 2022 - December 2022",
tools : "PHP, Sql and Git"
}
]}
header={<Header>Work Experience</Header>}
/>

</div>
}

export default Ex;