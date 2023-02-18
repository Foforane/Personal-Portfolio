import React from "react";
import SideNavigation from '@cloudscape-design/components/side-navigation';

function Nav(){
    const [activeHref, setActiveHref] = React.useState(
        "#/page1"
      );
   return <SideNavigation
   activeHref={activeHref}
   header={{ href: "#/", text: "Foforane Thakgalang" }}
   onFollow={event => {
     if (!event.detail.external) {
       event.preventDefault();
       setActiveHref(event.detail.href);
     }
   }}
   items={[
     { type: "link", text: "About", href: "#/page1" },
     { type: "link", text: "Experience", href: "#/page2" },
     { type: "link", text: "Education", href: "#/page4" },
     { type: "link", text: "Skills", href: "#/page3" },


   ]}
 />
}

export default Nav;