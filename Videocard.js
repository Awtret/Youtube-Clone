import React from 'react'
import "./videocard.css"

function Videocard({channel,image,title,views,timestamp}) {
    return (
        <div className="videocard">
            <img className="videocard_thumbnail" src={image} />
            <div className="videocard_text">
                <h4>{title}</h4>
                <p>{channel}</p>
                <p>{views} . {timestamp} </p>
            
            </div>


        </div>
    )
}

export default Videocard
