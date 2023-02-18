import React from 'react';
import Intro from './Components/Intro';
import Experience from './Components/Exprience';
import Navbar from './Components/NavBar';
import  AppLayout  from '@cloudscape-design/components/app-layout';
import './Components/intro.css';

import { Route,Routes } from 'react-router-dom';
function App() {

  return (
  <AppLayout 
  content ={
    <>
    <Routes>
      <Route path='/' element ={<Intro/>}/>
      <Route path='/Experience' element ={<Experience/>}/>
    </Routes>
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
