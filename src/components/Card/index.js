import React from 'react';
import "./style.css"

function Card (props){

    return(
        <div className="card">
            <div className="card-header">{props.proj}</div>
            <div className="card-body">
                <h5 className="card-title">{props.prom}</h5>
                <p className="card-text">{props.detail}</p>
                <a href={props.link} target="_blank">{props.projname}</a>
            </div>
        </div>
    )
}

export default Card;