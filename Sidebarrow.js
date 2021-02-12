import React from 'react'
import HomeIcon from '@material-ui/icons/Home';
import "./Sidebarrow.css"


function Sidebarrow({Icon ,title}) {
    return (
        <div className="row">
        <Icon className="sidebarrow_icon" /> 
        <h2 className="sidebarrow_title"> {title} </h2> 
          
        </div>
    )
}

export default Sidebarrow
