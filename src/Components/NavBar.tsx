import React from "react";
import SideNavigation from '@cloudscape-design/components/side-navigation';
import {Link} from 'react-router-dom';
import Toggle from '@cloudscape-design/components/toggle';
import { applyMode, Mode } from '@cloudscape-design/global-styles';

import './nav.css'
function Nav(){
    
    const [activeHref, setActiveHref] = React.useState(
        "#/page1"
      );
     const mode = window.localStorage.getItem('mode');
     const modeOnLoad = mode === 'light'?  false : true;
      const [checked, setChecked] = React.useState(modeOnLoad);
      checked ? applyMode(Mode.Dark) : applyMode(Mode.Light);
    const color = checked? 'white' : 'black';
      const style = {
        color : color
        }
   return <> 
   
   <SideNavigation
   activeHref={activeHref}
   header={{ href: "/", text: "Foforane Thakgalang" }}
   onFollow={event => {
     if (!event.detail.external) {
      
       setActiveHref(event.detail.href);
     }
   }}
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
                            <Link style={style} to='/'>
                                <span className='item'>About</span>
                            </Link>
                        </li>
                        <li>
                            <Link style={style} to='/Experience' >
                                <span className='item'>Work Experience</span>
                            </Link>
                        </li>
                       
                    </ul>
                </div>
 </>
}

export default Nav;