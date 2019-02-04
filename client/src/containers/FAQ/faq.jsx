import React, { Component }  from 'react';
import './faq.css'
class Faq extends Component{

    render(){
        return(
            <React.Fragment>
                <div className="All_faq">
                    
                    <ol>
                    <h1>FAQ page</h1>
                        <li>Was like a hackathon in 24 hours</li>
                        <h1>Back-end</h1>
                        <li>1) Functionality for Auth(register, login, logout), add songs to your account are implemented</li>
                        <li>2) API route validation only added in "/searchSong/:songname", more can be added if had more time </li>
                        <li>3) MongoDB(Atlas) was used as a DB, with SQL could be the same pattern, just dont have access to azure for sql </li>
                        <li>4) Only 1 test was implemented when first started developing, but the idea of testing is quite clear and easy</li>
                        <li>5) Was thinking to add external API for finding songs/lyrics and counting words, time is of the essence and unfortunately precluded this endevour</li>
                        <li>6) Docker is added just to make sure it works on different platforms, was thinking to add Kubernettes(micro-services) but time was pushing</li>
                        <h1>Front-end</h1>
                        <li>1) Reducers added and in "mainBasic/Main.jsx" all functionality is migrated there, same could have been done for modals but time was pressuring</li>   
                        <li>2) Further reducers for authentication could have been added in the same way as songs</li>
                        <li>3) Could have added reducers for Auth, started working on it, but its 1am already</li>
                        <li>4) Validation for Auth functionality can be done through "https://www.npmjs.com/package/validator"</li>
                        <li>5) Hooks were not used but could have been in theory applied in "modalContainers/navANDmodals" rather than making a class component</li>
                        <li>6) npm run eject could have been applied to use SASS and scope CSS classes but due to the scale of project was no need</li>
                        <li>7) Nginx serves the production build file to run react and can be deployed on AWS</li>
                        <li>8) Ideally wanted to add loading bar when making axios calls, just to make intuitive to the user that request is in progress</li>
                        
                        <h1>Docker</h1>
                        <li>1) Docker serves as a routing mechanism, it recieves calls from user and then redirects it, for example "/" go to client (home page) and "/api" go to back-end</li>
                        <img src="https://i.imgur.com/ODTjxLG.png" alt="diagram for docker"></img>
                        <li> That diagram can be covered in a cluster which will represent EC2 + can add load balancer + external cloud db + caching</li>
                    </ol>
                </div>
                
            </React.Fragment>
        )
    }
}

export default Faq;