import React from 'react';
import Jumbotron from "../components/Jumbotron";

import Pharm from "../components/Pharm"



class Home extends React.Component{



    render(){
        return(
            <div>
                <Jumbotron title = "Hello There, Let's Collaborate"></Jumbotron>
                <Pharm></Pharm>
            </div>

        )
    }
}

export default Home;