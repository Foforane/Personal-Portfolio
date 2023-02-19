import React from "react";
import SideNavigation from '@cloudscape-design/components/side-navigation';
import {Link} from 'react-router-dom';
import Toggle from '@cloudscape-design/components/toggle';
import { applyMode, Mode } from '@cloudscape-design/global-styles';

import './nav.css'
function Nav(){

    const dark = window.matchMedia('(prefers-color-scheme: dark)').matches

     const mode = window.localStorage.getItem('mode');

     let modeOnLoad : boolean;
     if(mode !== null){
      modeOnLoad = mode === 'light'?  false : true;
     }else {
       modeOnLoad = dark; 
     }
      const [checked, setChecked] = React.useState(modeOnLoad);
      checked ? applyMode(Mode.Dark) : applyMode(Mode.Light);
    const color = checked? 'white' : 'black';
      const style = {
        color : color
        }
   return <> 
   
   <SideNavigation
   header={{ href: "/", text: "Foforane Thakgalang" }}
 />
 <div className="toggle">
 <Toggle onChange={({ detail }) =>{
       const modeOnChange = detail.checked? 'dark' : 'light';
        window.localStorage.setItem('mode',modeOnChange) 
        setChecked(detail.checked)
          
 }
      } checked = {checked}>dark</Toggle>
 </div>
 
 <div  className='wrapper'>
                   <ul>
                        <li>
                            <Link style={style} to='/About'>
                                <span className='item'>About</span>
                            </Link>
                        </li>
                        <li>
                            <Link style={style} to='/Experience' >
                                <span className='item'>Work Experience</span>
                            </Link>
                        </li>
                        <li>
                            <Link style={style} to='/Education' >
                                <span className='item'>Education</span>
                            </Link>
                        </li>
                       
                    </ul>
                </div>
 </>
}

export default Nav;