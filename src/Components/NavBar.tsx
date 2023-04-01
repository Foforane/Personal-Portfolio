import React from "react";
import SideNavigation from '@cloudscape-design/components/side-navigation';
import {Link} from 'react-router-dom';
import Toggle from '@cloudscape-design/components/toggle';
import { applyMode, Mode } from '@cloudscape-design/global-styles';
import  Links from '@cloudscape-design/components/link';
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

   return  <> 
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
 </>
}

export default Nav;