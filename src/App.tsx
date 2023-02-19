import React from 'react';
import Intro from './Components/Intro';
import Experience from './Components/Exprience';
import Navbar from './Components/NavBar';
import  AppLayout  from '@cloudscape-design/components/app-layout';
import Box from '@cloudscape-design/components/box';
import { Container } from '@cloudscape-design/components';
import Education from './Components/Education';
import './Components/intro.css';
import { Route,Routes } from 'react-router-dom';
function App() {

  return (
  <AppLayout
  content ={
    <>
    <Container 
    
     footer ={<Box textAlign='center'>
     Foforane Thakgalang &copy; {new Date().getFullYear()}
    </Box>}
    >
    <Routes>
      <Route path='/' element ={<Intro/>}/>
      <Route path='/About' element ={<Intro/>}/>
      <Route path='/Experience' element ={<Experience/>}/>
      <Route path='/Education' element ={<Education/>}/>
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
