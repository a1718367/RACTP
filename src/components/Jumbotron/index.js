import React from 'react';
import "./style.css"

function Jumbotron (props){

    return(
        <div className="jumbotron">
            <h1>{props.title}</h1>
        </div>
    )
}

export default Jumbotron;