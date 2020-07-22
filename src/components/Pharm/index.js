import React from 'react';

import Row from "../../components/Row";
import Col from "../../components/Col";
import "./style.css"

function Pharm (props){

    return(
        <div>
            <div>
            <Row>
                <Col size="sm-12 md-4">
                    <div className="container">
                        <div className="mask">
                        <h1>Full-Stack Developer</h1>
                        <p>
                            Graduated from University of Adelaide Coding Bootcamp, I have obtained the skills and knowledge in web-developing.
                        </p>
                        <p>
                            Some of my projects throughout the course can be viewed in the project page.
                        </p>
                        </div>
                    </div>
                            
                </Col>
                <Col size="sm-12 md-4">
                <div className="container">
                        <div className="mask">
                        <h1>MBA</h1>
                        <p>
                            Management and Leadership has always interest me. 
                        </p>
                        </div>
                        
                    </div>
                        
                </Col>
                <Col size="sm-12 md-4">
                <div className="container">
                        <div className="mask">
                        <h1>Pharmacy</h1>
                        </div>
                    </div>
                        
                </Col>
            </Row>

            </div>
        </div>
    )
}

export default Pharm;