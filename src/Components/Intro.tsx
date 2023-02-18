import React from 'react';

import Button from '@cloudscape-design/components/button'
import Box from '@cloudscape-design/components/box';
import './intro.css'
function Intro(){
    
    return <div className='About'>
      <div className='Picture'>
        <img src="https://i.imgur.com/qk2yEb4.jpeg" referrerPolicy='no-referrer' alt="" />
        </div>
      <div className='content'>
    <Box color="text-body-secondary">Hello World, I am</Box>
    <Box variant="h1">Foforane Thakgalang</Box>
    <Box variant='strong' color="text-body-secondary">Software Engineer</Box>
    <Box variant='p'>A dedicated individual with Honours in Computer Sciences, having passion for Coding since 2016. 
    I've written Softwares that are used in the real world, I am also driven by curiosity and desire to help improve lives through software.
    </Box>
    <Button variant='primary' 
    href='mailto:thakgalang.cyber@gmail.com'>Get in touch</Button>
    </div>
  </div>
}

export default Intro;