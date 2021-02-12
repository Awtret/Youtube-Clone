import React from 'react'
import MenuIcon from '@material-ui/icons/Menu';
import SearchIcon from '@material-ui/icons/Search';
import VideocamIcon from '@material-ui/icons/Videocam';
import NotificationsActiveIcon from '@material-ui/icons/NotificationsActive';
import AppsIcon from '@material-ui/icons/Apps';
import PersonIcon from '@material-ui/icons/Person';
import "./header.css"
import {useState} from "react" ;
import { Link } from "react-router-dom";

import reactDom from 'react-dom';


function Header() {

    const[inputsearch,setinputsearch]=useState()
    return (
        <>
        <div className="header">
            <div className="header_left"> 
            <MenuIcon/>
            <img
            className="header_logo"
            src="https://www.youtube.com/img/desktop/supported_browsers/yt_logo_rgb_light.png"
            alt="youtube image"/>
            </div>
            <div className="header_input"> 
            <input 
            placeholder="search"
            value={inputsearch}
             type="text" 
              className="aj"
              onChange={(event)=>setinputsearch(event.target.value)}/>
            <Link to={`/search/${inputsearch}`}>
            <SearchIcon className="header_inputicon"/>
            </Link>
            </div>
            <div className="header_right"> 
            <VideocamIcon/>
            <AppsIcon/>
            <NotificationsActiveIcon/>
            <PersonIcon/>
            </div>
           </div>
           
           </>
    )
}

export default Header
