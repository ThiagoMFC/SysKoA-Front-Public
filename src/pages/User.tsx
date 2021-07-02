import React, {useState, useEffect } from 'react';
import LeftMenu from '../components/LeftMenu';
import {Link} from 'react-router-dom';


const address = '';
//const address = 'http://localhost:8080/upgrades';

const divstyle = {
    paddingLeft: "0px",
    paddingRight: "0px",
    fontSize: "initial",
}
const divstyleGreen = {
    paddingLeft: "0px",
    paddingRight: "0px",
    fontSize: "initial",
    color: "green",
}
const divstyleRed = {
    paddingLeft: "0px",
    paddingRight: "0px",
    fontSize: "initial",
    color: "red",
}
const divstyleYellow = {
    paddingLeft: "0px",
    paddingRight: "0px",
    fontSize: "initial",
    color: "orange",
    
}

const linkStyle ={
    color: 'black'
}

const User = (props:{name:string}) => {
    const [totalFood, setTotalFood] = useState(0);
    const [totalWood, setTotalWood] = useState(0);
    const [totalIron, setTotalIron] = useState(0);
    const [totalSilver, setTotalSilver] = useState(0);
    const [farmTotalFood, setFarmTotalFood] = useState(0);
    const [farmTotalWood, setFarmTotalWood] = useState(0);
    const [farmTotalIron, setFarmTotalIron] = useState(0);
    const [farmTotalSilver, setFarmTotalSilver] = useState(0);
    const [totalNBadge, setTotalNBadge] = useState(0);
    const [totalRBadge, setTotalRBadge] = useState(0);
    const [totalBoW, setTotalBoW] = useState(0);
    const [buildingArray, setBuildingArray] = useState<any[]>([]);
    const [foodDiscount, setFoodDiscount] = useState(0);
    const [woodDiscount, setWoodDiscount] = useState(0);
    const [ironDiscount, setIronDiscount] = useState(0);
    const [silverDiscount, setSilverDiscount] = useState(0);
    const [foodDiscountPercentage, setFoodDiscountPercentage] = useState(0);
    const [woodDiscountPercentage, setWoodDiscountPercentage] = useState(0);
    const [ironDiscountPercentage, setIronDiscountPercentage] = useState(0);
    const [silverDiscountPercentage, setSilverDiscountPercentage] = useState(0);

    const [width, setWidth] = useState(window.innerWidth);

    const [error, setError] = useState("");
    useEffect(() => { 
        (
            async () => {

                const response = await fetch(address, {
                    method:'GET',
                    headers: {'Content-Type':'application/json'},
                    credentials: 'include', 
                });


                const content = await response.json();
                if(content.response === "fail"){
                    setError(content.message);
                    console.log(content.message);
                }else{
                    //console.log(content.userFarms[1]);
                    setTotalWood(content.userRes.openWood + (content.userRes.woodItem.wood1k*1000) + (content.userRes.woodItem.wood3k*3000) + (content.userRes.woodItem.wood5k*5000) + (content.userRes.woodItem.wood10k*10000) + (content.userRes.woodItem.wood30k*30000) + (content.userRes.woodItem.wood50k*50000) + (content.userRes.woodItem.wood150k*150000) + (content.userRes.woodItem.wood500k*500000) + (content.userRes.woodItem.wood1500k*1500000));
                    setTotalFood(content.userRes.openFood + (content.userRes.foodItem.food1k*1000) + (content.userRes.foodItem.food3k*3000) + (content.userRes.foodItem.food5k*5000) + (content.userRes.foodItem.food10k*10000) + (content.userRes.foodItem.food30k*30000) + (content.userRes.foodItem.food50k*50000) + (content.userRes.foodItem.food150k*150000) + (content.userRes.foodItem.food500k*500000) + (content.userRes.foodItem.food1500k*1500000));
                    setTotalIron(content.userRes.openIron + (content.userRes.ironItem.iron200*200) + (content.userRes.ironItem.iron600*600) + (content.userRes.ironItem.iron1k*1000) + (content.userRes.ironItem.iron2k*2000) + (content.userRes.ironItem.iron6k*6000) + (content.userRes.ironItem.iron10k*10000) + (content.userRes.ironItem.iron30k*30000) + (content.userRes.ironItem.iron100k*100000) + (content.userRes.ironItem.iron300k*300000));
                    setTotalSilver(content.userRes.openSilver + (content.userRes.silverItem.silver50*50) + (content.userRes.silverItem.silver150*150) + (content.userRes.silverItem.silver250*250) + (content.userRes.silverItem.silver500*500) + (content.userRes.silverItem.silver1500*1500) + (content.userRes.silverItem.silver2500*2500) + (content.userRes.silverItem.silver25k*25000) + (content.userRes.silverItem.silver75k*75000));
                    setTotalNBadge(content.userRes.nobleBadge);
                    setTotalRBadge(content.userRes.royalBadge);
                    setTotalBoW(content.userRes.bookOfWar);
                    setBuildingArray(content.buildings);
                    setFoodDiscount(content.foodDiscount);
                    setWoodDiscount(content.woodDiscount);
                    setIronDiscount(content.ironDiscount);
                    setSilverDiscount(content.silverDiscount);
                    setFoodDiscountPercentage(content.foodDiscountPercentage);
                    setWoodDiscountPercentage(content.woodDiscountPercentage);
                    setIronDiscountPercentage(content.ironDiscountPercentage);
                    setSilverDiscountPercentage(content.silverDiscountPercentage);

                    if(content.userFarms !== undefined){
                        let farmFood = 0;
                        let farmWood = 0;
                        let farmIron= 0;
                        let farmSilver = 0;

                        for(var i = 0; i < content.userFarms.length; i++){
                            farmFood += content.userFarms[i].farmResources.openFood + (content.userFarms[i].farmResources.foodItem.food1k*1000) + (content.userFarms[i].farmResources.foodItem.food3k*3000) + (content.userFarms[i].farmResources.foodItem.food5k*5000) + (content.userFarms[i].farmResources.foodItem.food10k*10000) + (content.userFarms[i].farmResources.foodItem.food30k*30000) + (content.userFarms[i].farmResources.foodItem.food50k*50000) + (content.userFarms[i].farmResources.foodItem.food150k*150000) + (content.userFarms[i].farmResources.foodItem.food500k*500000) + (content.userFarms[i].farmResources.foodItem.food1500k*1500000);

                            farmWood += content.userFarms[i].farmResources.openWood + (content.userFarms[i].farmResources.woodItem.wood1k*1000) + (content.userFarms[i].farmResources.woodItem.wood3k*3000) + (content.userFarms[i].farmResources.woodItem.wood5k*5000) + (content.userFarms[i].farmResources.woodItem.wood10k*10000) + (content.userFarms[i].farmResources.woodItem.wood30k*30000) + (content.userFarms[i].farmResources.woodItem.wood50k*50000) + (content.userFarms[i].farmResources.woodItem.wood150k*150000) + (content.userFarms[i].farmResources.woodItem.wood500k*500000) + (content.userFarms[i].farmResources.woodItem.wood1500k*1500000);

                            farmIron += content.userFarms[i].farmResources.openIron + (content.userFarms[i].farmResources.ironItem.iron200*200) + (content.userFarms[i].farmResources.ironItem.iron600*600) + (content.userFarms[i].farmResources.ironItem.iron1k*1000) + (content.userFarms[i].farmResources.ironItem.iron2k*2000) + (content.userFarms[i].farmResources.ironItem.iron6k*6000) + (content.userFarms[i].farmResources.ironItem.iron10k*10000) + (content.userFarms[i].farmResources.ironItem.iron30k*30000) + (content.userFarms[i].farmResources.ironItem.iron100k*100000) + (content.userFarms[i].farmResources.ironItem.iron300k*300000);

                            farmSilver += content.userFarms[i].farmResources.openSilver + (content.userFarms[i].farmResources.silverItem.silver50*50) + (content.userFarms[i].farmResources.silverItem.silver150*150) + (content.userFarms[i].farmResources.silverItem.silver250*250) + (content.userFarms[i].farmResources.silverItem.silver500*500) + (content.userFarms[i].farmResources.silverItem.silver1500*1500) + (content.userFarms[i].farmResources.silverItem.silver2500*2500) + (content.userFarms[i].farmResources.silverItem.silver25k*25000) + (content.userFarms[i].farmResources.silverItem.silver75k*75000);

                        }
                        setFarmTotalFood(farmFood);
                        setFarmTotalWood(farmWood);
                        setFarmTotalIron(farmIron);
                        setFarmTotalSilver(farmSilver);
                    }
                }
            }
        )();    
    }, []);
    
    let buildingTable;
    buildingTable = <div className="row">
        <div className="col-12">
        {buildingArray.map((myObject, index) => {
            let buildingFoodReq = (buildingArray[index].buildings.foodReq * (1-foodDiscountPercentage)) + foodDiscount;
            let buildingWoodReq = (buildingArray[index].buildings.woodReq * (1-woodDiscountPercentage)) + woodDiscount;
            let buildingIronReq = (buildingArray[index].buildings.ironReq * (1-ironDiscountPercentage)) + ironDiscount;
            let buildingSilverReq = (buildingArray[index].buildings.silverReq * (1-silverDiscountPercentage)) + silverDiscount;
            if(width < Number("750")){
                if(buildingFoodReq <= totalFood + farmTotalFood && buildingWoodReq <= totalWood + farmTotalWood && buildingIronReq <= totalIron + farmTotalIron && buildingSilverReq <= totalSilver + farmTotalSilver){
                    return (
                            <div className='row' key={buildingArray[index].buildings.buildingName+buildingArray[index].buildings.buildingLvl} style={{marginRight: "0px"}}>
                                <div className='col-3' style={divstyle}>
                                    <p>{buildingArray[index].buildings.buildingName} {buildingArray[index].buildings.buildingLvl}</p>
                                </div>
                                <div className='col' style={divstyleGreen}>
                                    {(() => {
                                    if(((buildingFoodReq)/1000000) < 0){
                                        return (<div className='col' style={divstyleGreen}>0
                                        </div>);
                                    }else{
                                        if(buildingFoodReq <= totalFood){
                                            return(<div className='col' style={divstyleGreen}>
                                            {((buildingFoodReq)/1000000).toLocaleString()}
                                            </div>)
                                        }else{
                                            return(<div className='col' style={divstyleYellow}>
                                            {((buildingFoodReq)/1000000).toLocaleString()}
                                            </div>)
                                        }
                                        
                                    }
                                    })()}
                                </div>
                                <div className='col' style={divstyleGreen}>
                                {(() => {
                                    if(((buildingWoodReq)/1000000) < 0){
                                        return (<div className='col' style={divstyleGreen}>
                                        0
                                        </div>);
                                    }else{
                                        if(buildingWoodReq <= totalWood){
                                            return(<div className='col' style={divstyleGreen}>
                                            {((buildingWoodReq)/1000000).toLocaleString()}
                                            </div>)
                                        }else{
                                            return(<div className='col' style={divstyleYellow}>
                                            {((buildingWoodReq)/1000000).toLocaleString()}
                                            </div>)
                                        }
                                    }
                                })()}
                                </div>
                                <div className='col' style={divstyleGreen}>
                                {(() => {
                                    if(((buildingIronReq)/1000000) < 0){
                                        return (<div className='col' style={divstyleGreen}>
                                        0
                                        </div>);
                                    }else{
                                        if(buildingIronReq <= totalIron){
                                            return(<div className='col' style={divstyleGreen}>
                                            {((buildingIronReq)/1000000).toLocaleString()}
                                            </div>)
                                        }else{
                                            return(<div className='col' style={divstyleYellow}>
                                            {((buildingIronReq)/1000000).toLocaleString()}
                                            </div>)
                                        }
                                    }
                                })()}
                                </div>
                                <div className='col' style={divstyleGreen}>
                                {(() => {
                                    if(((buildingSilverReq)/1000000) < 0){
                                        return (<div className='col' style={divstyleGreen}>
                                        0
                                        </div>);
                                    }else{
                                        if(buildingSilverReq <= totalSilver){
                                            return(<div className='col' style={divstyleGreen}>
                                            {((buildingSilverReq)/1000000).toLocaleString()}
                                            </div>)
                                        }else{
                                            return(<div className='col' style={divstyleYellow}>
                                            {((buildingSilverReq)/1000000).toLocaleString()}
                                            </div>)
                                        }
                                    }
                                })()}
                                </div>
                            </div>
                    );
                }else{
                    return(<div></div>);
                }
            }else{
                if(buildingFoodReq <= totalFood + farmTotalFood && buildingWoodReq <= totalWood + farmTotalWood && buildingIronReq <= totalIron + farmTotalIron && buildingSilverReq <= totalSilver + farmTotalSilver){
                    return (
                            <div className='row' key={buildingArray[index].buildings.buildingName+buildingArray[index].buildings.buildingLvl} style={{marginRight: "0px"}}>
                                <div className='col-3' style={divstyle}>
                                    <p>{buildingArray[index].buildings.buildingName} {buildingArray[index].buildings.buildingLvl}</p>
                                </div>
                                <div className='col' style={divstyleGreen}>
                                    {(() => {
                                    if(((buildingFoodReq)/1000000) < 0){
                                        return (<div className='col' style={divstyleGreen}>0
                                        </div>);
                                    }else{
                                        if(buildingFoodReq <= totalFood){
                                            return(<div className='col' style={divstyleGreen}>
                                            {((buildingFoodReq)/1000000).toLocaleString()}
                                            </div>)
                                        }else{
                                            return(<div className='col' style={divstyleYellow}>
                                            {((buildingFoodReq)/1000000).toLocaleString()}
                                            </div>)
                                        }
                                        
                                    }
                                    })()}
                                </div>
                                <div className='col' style={divstyleGreen}>
                                {(() => {
                                    if(((buildingWoodReq)/1000000) < 0){
                                        return (<div className='col' style={divstyleGreen}>
                                        0
                                        </div>);
                                    }else{
                                        if(buildingWoodReq <= totalWood){
                                            return(<div className='col' style={divstyleGreen}>
                                            {((buildingWoodReq)/1000000).toLocaleString()}
                                            </div>)
                                        }else{
                                            return(<div className='col' style={divstyleYellow}>
                                            {((buildingWoodReq)/1000000).toLocaleString()}
                                            </div>)
                                        }
                                    }
                                })()}
                                </div>
                                <div className='col' style={divstyleGreen}>
                                {(() => {
                                    if(((buildingIronReq)/1000000) < 0){
                                        return (<div className='col' style={divstyleGreen}>
                                        0
                                        </div>);
                                    }else{
                                        if(buildingIronReq <= totalIron){
                                            return(<div className='col' style={divstyleGreen}>
                                            {((buildingIronReq)/1000000).toLocaleString()}
                                            </div>)
                                        }else{
                                            return(<div className='col' style={divstyleYellow}>
                                            {((buildingIronReq)/1000000).toLocaleString()}
                                            </div>)
                                        }
                                    }
                                })()}
                                </div>
                                <div className='col' style={divstyleGreen}>
                                {(() => {
                                    if(((buildingSilverReq)/1000000) < 0){
                                        return (<div className='col' style={divstyleGreen}>
                                        0
                                        </div>);
                                    }else{
                                        if(buildingSilverReq <= totalSilver){
                                            return(<div className='col' style={divstyleGreen}>
                                            {((buildingSilverReq)/1000000).toLocaleString()}
                                            </div>)
                                        }else{
                                            return(<div className='col' style={divstyleYellow}>
                                            {((buildingSilverReq)/1000000).toLocaleString()}
                                            </div>)
                                        }
                                    }
                                })()}
                                </div>
                                {(() => {
                                    if(buildingArray[index].buildings.nobleBadge <= totalNBadge){
                                        return (<div className='col' style={divstyleGreen}>
                                        {buildingArray[index].buildings.nobleBadge.toLocaleString()}
                                        </div>);
                                    }else{
                                        return(<div className='col' style={divstyleRed}>
                                        {buildingArray[index].buildings.nobleBadge.toLocaleString()}
                                        </div>)
                                    }
                                })()}
                                {(() => {
                                    if(buildingArray[index].buildings.royalBadge <= totalRBadge){
                                        return (<div className='col' style={divstyleGreen}>
                                        {buildingArray[index].buildings.royalBadge.toLocaleString()}
                                        </div>);
                                    }else{
                                        return(<div className='col' style={divstyleRed}>
                                        {buildingArray[index].buildings.royalBadge.toLocaleString()}
                                        </div>)
                                    }
                                })()}
                                {(() => {
                                    if(buildingArray[index].buildings.bookOfWar <= totalBoW){
                                        return (<div className='col' style={divstyleGreen}>
                                        {buildingArray[index].buildings.bookOfWar.toLocaleString()}
                                        </div>);
                                    }else{
                                        return(<div className='col' style={divstyleRed}>
                                        {buildingArray[index].buildings.bookOfWar.toLocaleString()}
                                        </div>)
                                    }
                                })()}
                            </div>
                    );
                }else{
                    return(<div></div>);
                }
            }  
        })}
        </div>
   </div>;

    return (
        <div className="container">
            <div className="row">
                <div className="col-12 col-lg-3 col-sm-3">
                    <LeftMenu/>
                </div>
                <div className="col-12 col-sm-9 col-lg-9">
                    <div className="card">
                    {props.name ? "Hi "+ props.name: "you're not logged in"}
                        <br/>
                        {error !== "" &&
                                <p>{error}</p>
                        }
                        <br/>
                        <p><strong>Total resources in your main account</strong></p> 
                        <div className="row">
                            <div className='col-3'>
                                <p>Food</p>
                                <p>{totalFood.toLocaleString()}</p>
                            </div>
                            <div className='col-3'>
                                <p>Wood</p>
                                <p>{totalWood.toLocaleString()}</p>
                            </div>
                            <div className='col-3'>
                                <p>Iron</p>
                                <p>{totalIron.toLocaleString()}</p>
                            </div>
                            <div className='col-3'>
                                <p>Silver</p>
                                <p>{totalSilver.toLocaleString()}</p>
                            </div>
                        </div>
                        <div className="row">
                            <div className='col-4'>
                                <p>Noble Badges</p>
                                <p>{totalNBadge.toLocaleString()}</p>
                            </div>
                            <div className='col-4'>
                                <p>Royal Badges</p>
                                <p>{totalRBadge.toLocaleString()}</p>
                            </div>
                            <div className='col-4'>
                                <p>Books of War</p>
                                <p>{totalBoW.toLocaleString()}</p>
                            </div>
                        </div>
                    </div>
                    <br/>
                    <div className="card">
                        <br/>
                        <p><strong>Total resources in your farm accounts</strong></p> 
                        <div className="row">
                            <div className='col-3'>
                                <p>Food</p>
                                <p>{farmTotalFood.toLocaleString()}</p>
                            </div>
                            <div className='col-3'>
                                <p>Wood</p>
                                <p>{farmTotalWood.toLocaleString()}</p>
                            </div>
                            <div className='col-3'>
                                <p>Iron</p>
                                <p>{farmTotalIron.toLocaleString()}</p>
                            </div>
                            <div className='col-3'>
                                <p>Silver</p>
                                <p>{farmTotalSilver.toLocaleString()}</p>
                            </div>
                        </div>
                    </div>
                    <br/>
                    <div className="card">
                        <br/>
                        <p><strong>Buildings you can upgrade</strong></p>
                        <p><small>*some values can be missing or innacurate. if you have the actual precise values and want to contribute <Link to="/contribute"  style={linkStyle}>click here</Link></small></p>
                        <p><small>**values are in millions</small></p>
                        
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
                        <br/>
                        <p><small><span style={{color:"green"}}>Green means resources available in main acount. </span> <span style={{color:"orange"}}> Orange means you need resources from farms</span></small></p>
                        <p><small>Empty means you cannot upgrade anything</small></p>
                    </div>
                </div>
            </div>
           
        </div>
    );
};

export default User;