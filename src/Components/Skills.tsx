import React from 'react';
import Link from '@cloudscape-design/components/link';
import Cards from '@cloudscape-design/components/cards';
import Header from '@cloudscape-design/components/header';
import Rating from '@mui/material/Rating';
import { StarBorder } from '@mui/icons-material';

function Skills(){
return <Cards
cardDefinition={{
    header: item => (
    <Link href= {item.link} target= "_blank" fontSize="heading-m">{item.Language}</Link>
      ),
      sections: [
        {
            id: "rating",
            header : "Rating",
            content : item => <Rating precision={0.5} emptyIcon ={<StarBorder style={{color:'white'}}/>}  name="read-only" value={item.value}  readOnly />
        },
        {
          id: "duration",
          header: "Skill Level",
          content: item => item.level
        },
     
      ]
}}
items={[
{
    Language : "PHP",
    value : 4.5,
    link : 'https://www.php.net/',
    level : "Well Versed, Extensive Exprience",
    },
    {
        Language : "TypeScript",
        value : 4,
        link : 'https://www.typescriptlang.org/',
        level : "Well Versed, Extensive Exprience",
        },
        {
            Language : "Java",
            value : 4,
            link : 'https://www.java.com/en/',
            level : "Extensive Knowledge of the Language but No practical Exprience.",
            },
{
    Language : "C++",
    value : 3.5,
    link : 'https://cplusplus.com/doc/tutorial/',
    level : "Basics, No Practical Exprience",
    },
    {
        Language : "Python",
        value : 3.5,
        link : 'https://www.python.org/',
        level : "Basic knowledge of the language, No Practical Exprience",
        },
    {
        Language : "MySql",
        value : 4.5,
        link : 'https://www.mysql.com/',
        level : "Well Versed, Extensive Exprience",
        },
    {
        Language : "React",
        value : 4.5,
        link : 'https://react.dev/',
        level : "Well Versed, Extensive Exprience",
        },
]}
header={<Header>Skiils</Header>}
/>
}

export default Skills;