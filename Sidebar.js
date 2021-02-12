import React from 'react'
import "./sidebar.css"
import Sidebarrow from "./Sidebarrow" ;
import HomeIcon from '@material-ui/icons/Home';
import WhatshotIcon from '@material-ui/icons/Whatshot';
import SubscriptionsIcon from '@material-ui/icons/Subscriptions';


function Sidebar() {
    return (
        <div className="sidebar">
            
            <Sidebarrow Icon="HomeIcon" title="Home"/>
            <Sidebarrow Icon="WhatshotIcon" title="Trending"/>
            <Sidebarrow Icon="SubscriptionsIcon" title="Subscriptions"/>
            <hr />
            <Sidebarrow Icon="HomeIcon" title="Home"/>
            <Sidebarrow Icon="HomeIcon" title="Home"/>
            <Sidebarrow Icon="HomeIcon" title="Home"/>
            <Sidebarrow Icon="HomeIcon" title="Home"/>
            <Sidebarrow Icon="HomeIcon" title="Home"/>

            <hr/>
            
    

        </div>
    )
}

export default Sidebar
