import React from 'react';
import Intro from './Components/Intro';
import Experience from './Components/Experience';
import Navbar from './Components/NavBar';
import  AppLayout  from '@cloudscape-design/components/app-layout';
import Box from '@cloudscape-design/components/box';
import { Container } from '@cloudscape-design/components';
import Education from './Components/Education';
import Projects from './Components/Project';
import { Route,Routes } from 'react-router-dom';
import './Components/intro.css';
function App() {

  return (
  <AppLayout
  content =
  {
    <>
    <Container 
     footer ={<Box textAlign='center'>
     Foforane Thakgalang &copy; {new Date().getFullYear()}
    </Box>}
    >
    <Routes>
    <Route path='/' 
    element ={<>
     <Intro/>
    <Experience/>
    <Education/>
    </>}
    />
   <Route 
   path='/Projects'
   element = {<Projects/>}
   />
    </Routes>
    </Container>
    </>
  }
  
  navigation = {
  <Navbar/>
  }
toolsHide = {true}
  />  
    
  )
}

export default App
