import React from 'react';
import LeftMenu from '../components/LeftMenu';

const Contribute = () => {
    return (
        <div className="container">
            <div className="row">
                
                <div className="col-12 col-sm-12 col-lg-12">
                    <div className="card" >
                        <br/>
                        <p style={{margin:"10px"}}>The values used in this website were all found throughout the internet (<a rel="noopener noreferrer" href="https://www.gamesguideinfo.com/king-of-avalon/overview/buildings" target="_blank">mostly here</a>). Because of that, some of them can be (most likely are) innacurate or completely missing. <strong>Farm, Sawmill, Iron Mine, Silver Mine and Hospital have already been confirmed as innacurate but we're missing the data</strong>. If you would like to contribute, please take a screenshot of the building upgrade requirements <strong>without hero or equipment bonus</strong>, post it on Twitter and tag me @marques93_  <strong>I won't read DMs</strong></p>
                        <br/>
                        <p style={{margin:"10px"}}>The same applies for Hero and Equipment bonuses. All the data presented here was obtained from fellow players like you. If yours isn't here, take a screenshot of the hero or equipment bonuses and follow the instructions above</p>
                        <br/>
                        <p style={{margin:"10px"}}> The KoA Nexus team* appreciate your contributions. And I bet other players will appreciate them as well</p>
                        <p><small>*(not really a team, it's only me, but saying there's a team gives this a sense of credibility, doesn't it?)</small></p>
                    </div>
                </div>
            </div>
        
        </div>
    );
};

export default Contribute;