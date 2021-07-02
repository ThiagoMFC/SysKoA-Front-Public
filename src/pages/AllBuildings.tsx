import React, {useState, useEffect } from 'react';
import LeftMenu from '../components/LeftMenu';
import {Link} from 'react-router-dom';

const divstyle = {
    paddingLeft: "0px",
    paddingRight: "0px",
    fontSize: "initial",
}

const linkStyle ={
    color: 'black'
}

const address = '';

const AllBuildings = () => {
    const [buildingArray, setBuildingArray] = useState<any[]>([]);
    const [error, setError] = useState("");

    const [width, setWidth] = useState(window.innerWidth);


    useEffect(() => { 
        (
            async () => {

                const response = await fetch(address, {
                    method:'GET',
                    headers: {'Content-Type':'application/json'},
                });


                const content = await response.json();
                if(content.response === "fail"){
                    setError(content.message);
                    console.log(content.message);
                }else{
                    //console.log(content[0].buildings);
                    setBuildingArray(content);
                }
            }
        )();    
    }, []);

    let buildingTable;
    buildingTable = <div className="row">
        <div className="col-12">
        {buildingArray.map((myObject, index) => {
            if(width < Number("750")){
                return (
                    <div className='row' key={buildingArray[index].buildings.buildingName+buildingArray[index].buildings.buildingLvl} style={{marginRight: "0px"}}>
                        <div className='col-3' style={divstyle}>
                            <p>{buildingArray[index].buildings.buildingName} {buildingArray[index].buildings.buildingLvl}</p>
                        </div>
                        <div className='col'>
                            {(buildingArray[index].buildings.foodReq/1000000).toLocaleString()}
                        </div>
                        <div className='col'>
                        {(buildingArray[index].buildings.woodReq/1000000).toLocaleString()}
                        </div>
                        <div className='col'>
                        {(buildingArray[index].buildings.ironReq/1000000).toLocaleString()}
                        </div>
                        <div className='col'>
                        {(buildingArray[index].buildings.silverReq/1000000).toLocaleString()}
                        </div>
                    </div>
            );
            }else{
                return (
                    <div className='row' key={buildingArray[index].buildings.buildingName+buildingArray[index].buildings.buildingLvl} style={{marginRight: "0px"}}>
                        <div className='col-3' style={divstyle}>
                            <p>{buildingArray[index].buildings.buildingName} {buildingArray[index].buildings.buildingLvl}</p>
                        </div>
                        <div className='col'>
                            {(buildingArray[index].buildings.foodReq/1000000).toLocaleString()}
                        </div>
                        <div className='col'>
                        {(buildingArray[index].buildings.woodReq/1000000).toLocaleString()}
                        </div>
                        <div className='col'>
                        {(buildingArray[index].buildings.ironReq/1000000).toLocaleString()}
                        </div>
                        <div className='col'>
                        {(buildingArray[index].buildings.silverReq/1000000).toLocaleString()}
                        </div>
                        <div className='col'>
                        {buildingArray[index].buildings.nobleBadge.toLocaleString()}
                        </div>
                        <div className='col'>
                        {buildingArray[index].buildings.royalBadge.toLocaleString()}
                        </div>
                        <div className='col'>
                        {buildingArray[index].buildings.bookOfWar.toLocaleString()}
                        </div>
                    </div>
            );
            }
            
        })}
        </div>
   </div>;


    return (<div className="container">
    <div className="row">
        
        <div className="col-12 col-sm-12 col-lg-12">
            <div className="card">
                <br/>
                <p><strong>Buildings Upgrade Requirements</strong></p>
                {error !== "" &&
                                <p>{error}</p>
                        }
                <p><small>*some values can be missing or innacurate. if you have the actual precise values and want to contribute <Link to="/contribute"  style={linkStyle}>click here</Link></small></p>
                <p><small>**values are in millions</small></p> 
                <p><small>***values are not accounting for bonuses</small></p> 
                <div className="row">
                {(() => {
                   if(width < Number("750")){
                    return (<div className="col-12">
                                <div className='row' style={{marginRight: "0px"}}>
                                    <div className='col-3' style={divstyle}>
                                        <p><strong>Building lvl</strong></p>
                                    </div>
                                    <div className='col' style={divstyle}>
                                        <p><strong>Food</strong></p>
                                    </div>
                                    <div className='col' style={divstyle}>
                                        <p><strong>Wood</strong></p>
                                    </div>
                                    <div className='col' style={divstyle}>
                                        <p><strong>Iron</strong></p>
                                    </div>
                                    <div className='col' style={divstyle}>
                                        <p><strong>Silver</strong></p>
                                    </div>
                                </div>
                            </div>);
                    }else{
                        return(<div className="col-12">
                                <div className='row' style={{marginRight: "0px"}}>
                                    <div className='col-3' style={divstyle}>
                                        <p><strong>Building lvl</strong></p>
                                    </div>
                                    <div className='col' style={divstyle}>
                                        <p><strong>Food</strong></p>
                                    </div>
                                    <div className='col' style={divstyle}>
                                        <p><strong>Wood</strong></p>
                                    </div>
                                    <div className='col' style={divstyle}>
                                        <p><strong>Iron</strong></p>
                                    </div>
                                    <div className='col' style={divstyle}>
                                        <p><strong>Silver</strong></p>
                                    </div>
                                    <div className='col' style={divstyle}>
                                        <p><strong>Noble <br></br>Badge</strong></p>
                                    </div>
                                    <div className='col' style={divstyle}>
                                        <p><strong>Royal <br></br>Badge</strong></p>
                                    </div>
                                    <div className='col' style={divstyle}>
                                        <p><strong>Book <br></br>of War</strong></p>
                                    </div>
                                </div>
                            </div>);
                    } 
                })()}
                </div>
                {buildingTable}
            </div>
        </div>
    </div>
   
</div>);
};

export default AllBuildings;

