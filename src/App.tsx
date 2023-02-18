import React from 'react';
import Intro from './Components/Intro';
import Navbar from './Components/NavBar';
import  AppLayout  from '@cloudscape-design/components/app-layout';
import './Components/intro.css'
function App() {
  return (
    <div className='body'>
  <AppLayout 
  content ={
    <>
    <Intro/>
    </>
  }
  navigation = {
  <Navbar/>
  }
  />  
  </div>

    
  )
}

export default App
