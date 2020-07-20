import React from 'react';
import Jumbotron from "../components/Jumbotron";
import Row from "../components/Row";
import Col from "../components/Col";
import Card from "../components/Card";
import Cheers from "../img/cheers.png";
import Golf1 from "../img/home1.png";
import Golf2 from "../img/home2.png";
import Wapp from "../img/wapp.png"


class Project extends React.Component{

    render(){
        return(
            <div>
                <Jumbotron title = "Projects"></Jumbotron>
                <Row>
                    <Col size="sm-12 md-6">
                        <Card proj="C-h-e-e-R-s" 
                            link="https://limitless-mesa-21447.herokuapp.com/" 
                            projname="C-h-e-e-R-s"
                            prom="A platform enabling wineries to engage with wine lovers."
                            detail="Our clients are the Wineries, the wines consumers and vendors of Adelaide. This platform connects these three words. To bring new wine experiences and foment new connections.
                            Wineries can promote their wines and events.
                            Wine lovers can book events for wineries."
                        ></Card>
                    </Col>
                    <Col size="sm-12 md-6">
                        <img src={Cheers} className="img-fluid rounded my-2" alt="cheers"></img>
                    </Col>
                </Row>
                <Row>
                    <Col size="sm-12 md-6">
                        <Card proj="Golf-App" 
                            link="https://a1718367.github.io/GolfApp-v2/" 
                            projname="Golf App-V2"
                            prom="Application to assist golfer on the course."
                            detail="When the App is loaded, Weather & forecast details is displayed.
                            The map of the course is displayed with user's current location marked.
                            If previously course data is available, hole on the course will be marked on the map.
                            Compass and wind direction will be indicated.."
                        ></Card>
                    </Col>
                    <Col size="sm-12 md-6">
                        <Row>
                            <Col size="md-6">
                            <img src={Golf1} className="img-fluid rounded my-2" alt="golfapp1"></img>
                            </Col>
                            <Col size="md-6">
                            <img src={Golf2} className="img-fluid rounded my-2" alt="golfapp2"></img>
                            </Col>
                        </Row>
                    </Col>
                </Row>
                <Row>
                    <Col size="sm-12 md-6">
                        <Card proj="Weather App" 
                            link="https://a1718367.github.io/weatherApp/" 
                            projname="Weather Dashboard"
                            prom="A weather dashboard with different backgound depending on the time of the day"
                            detail="Weather details and forecast is displayed to user. Searched city will be added to local storage and display in the first line of history section."
                        ></Card>
                    </Col>
                    <Col size="sm-12 md-6">
                        <img src={Wapp} className="img-fluid rounded my-2" alt="weeather app"></img>
                    </Col>
                </Row>
                
            </div>

        )
    }
}

export default Project;