import React from 'react';
import { SpaceBetween } from '@cloudscape-design/components';
import Button from '@cloudscape-design/components/button'
import Box from '@cloudscape-design/components/box';
import { useNavigate } from 'react-router-dom';
import './intro.css'
function Intro(){
  const navigate = useNavigate();
    return <div id='About' className='About'>
      <div className='Picture'>
        <img src="../../Cyber.jpeg" referrerPolicy='no-referrer' alt="" />
        </div>
      <div className='content'>
    <Box color="text-body-secondary">Hello World, I am</Box>
    <Box variant="h1">Foforane Thakgalang</Box>
    <Box variant='strong' color="text-body-secondary">Software Engineer</Box>
    <Box variant='p'>A dedicated individual with Honours in Computer Sciences, having passion for Coding since 2016. 
    I've written Softwares that are used in the real world, I am driven by curiosity and desire to help improve lives through software.
    </Box>
    <br></br>
    <SpaceBetween size='xs' direction='horizontal'>
    <Button 
    href='mailto:thakgalang.cyber@gmail.com'>Get in touch
    </Button>
    <Button 
    onClick={()=>{
      navigate('/Projects')
    }}>View Projects
    </Button>
    </SpaceBetween>
    </div>
  </div>

}

export default Intro;