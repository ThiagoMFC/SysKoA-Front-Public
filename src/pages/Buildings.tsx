import React, { SyntheticEvent, useState, useEffect } from 'react';
import LeftMenu from '../components/LeftMenu';
import {Redirect} from 'react-router-dom';
import {Link} from 'react-router-dom';


const address = '';
const addressUser = '';

const linkStyle ={
    color: 'black'
}

const Buildings = () => {
    const [dragonLair, setDragonLair] = useState("");
    const [hospital, setHospital] = useState("");
    const [tradingPost, setTradingPost] = useState("");
    const [farm, setFarm] = useState("");
    const [sawmill, setSawmill] = useState("");
    const [ironMine, setIronMine] = useState("");
    const [silverMine, setSilverMine] = useState("");
    const [watchtower, setWatchtower] = useState("");
    const [trainingGrounds, setTrainingGrounds] = useState("");
    const [wishingWell, setWishingWell] = useState("");
    const [wall, setWall] = useState("");
    const [siegeWorkshop, setSiegeWorkshop] = useState("");
    const [stables, setStables] = useState("");
    const [ranged, setRanged] = useState("");
    const [barracks, setBarracks] = useState("");
    const [stronghold, setStronghold] = useState("");
    const [hallOfWar, setHallOfWar] = useState("");
    const [embassy, setEmbassy] = useState("");
    const [storehouse, setStorehouse] = useState("");
    const [trapFactory, setTrapFactory] = useState("");
    const [university, setUniversity] = useState("");
    const [forge, setForge] = useState("");
    const [redirect, setRedirect] = useState(false);
    const [error, setError] = useState("");
    const options = [
        {
          label: "1",
          value: "1",
        },
        {
          label: "2",
          value: "2",
        },
        {
          label: "3",
          value: "3",
        },
        {
          label: "4",
          value: "4",
        },
        {
            label: "5",
            value: "5",
          },
          {
            label: "6",
            value: "6",
          },
          {
            label: "7",
            value: "7",
          },
          {
            label: "8",
            value: "8",
          },
          {
            label: "9",
            value: "9",
          },
          {
            label: "10",
            value: "10",
          },
          {
            label: "11",
            value: "11",
          },
          {
            label: "12",
            value: "12",
          },
          {
            label: "13",
            value: "13",
          },
          {
            label: "14",
            value: "14",
          },
          {
            label: "15",
            value: "15",
          },
          {
            label: "16",
            value: "16",
          },
          {
            label: "17",
            value: "17",
          },
          {
            label: "18",
            value: "18",
          },
          {
            label: "19",
            value: "19",
          },
          {
            label: "20",
            value: "20",
          },
          {
            label: "21",
            value: "21",
          },
          {
            label: "22",
            value: "22",
          },
          {
            label: "23",
            value: "23",
          },
          {
            label: "24",
            value: "24",
          },
          {
            label: "25",
            value: "25",
          },
          {
            label: "26",
            value: "26",
          },
          {
            label: "27",
            value: "27",
          },
          {
            label: "28",
            value: "28",
          },
          {
            label: "29",
            value: "29",
          },
          {
            label: "30",
            value: "30",
          },
          {
            label: "31",
            value: "31",
          },
          {
            label: "32",
            value: "32",
          },
          {
            label: "33",
            value: "33",
          },
          {
            label: "34",
            value: "34",
          },
          {
            label: "35",
            value: "35",
          },
          {
            label: "36",
            value: "36",
          },
          {
            label: "37",
            value: "37",
          },
          {
            label: "38",
            value: "38",
          },
          {
            label: "39",
            value: "39",
          },
          {
            label: "40",
            value: "40",
          },
          {
            label: "41",
            value: "41",
          },
          {
            label: "42",
            value: "42",
          },
          {
            label: "43",
            value: "43",
          },
          {
            label: "44",
            value: "44",
          },
          {
            label: "45",
            value: "45",
          },
    ];
    //const [buildingArray, setBuildingArray] = useState<any[]>([])

    useEffect(() => { 
        (
            async () => {

                const response = await fetch(addressUser, {
                    method:'GET',
                    headers: {'Content-Type':'application/json'},
                    credentials: 'include', 
                });


                const content = await response.json();
                if(content.response === "fail"){
                    setError(content.message);
                    //console.log(content);
                }else{
                    //console.log(content.userBuildings);
                    //setBuildingArray(content.userBuildings);
                    setDragonLair(content.userBuildings[0].buildingLvl.toString());
                    setHospital(String(content.userBuildings[1].buildingLvl));
                    setTradingPost(String(content.userBuildings[2].buildingLvl));
                    setFarm(String(content.userBuildings[3].buildingLvl));
                    setSawmill(String(content.userBuildings[4].buildingLvl));
                    setIronMine(String(content.userBuildings[5].buildingLvl));
                    setSilverMine(String(content.userBuildings[6].buildingLvl));
                    setWatchtower(String(content.userBuildings[7].buildingLvl));
                    setTrainingGrounds(String(content.userBuildings[8].buildingLvl));
                    setWishingWell(String(content.userBuildings[9].buildingLvl));
                    setWall(String(content.userBuildings[10].buildingLvl));
                    setSiegeWorkshop(String(content.userBuildings[11].buildingLvl));
                    setStables(String(content.userBuildings[12].buildingLvl));
                    setRanged(String(content.userBuildings[14].buildingLvl));
                    setBarracks(String(content.userBuildings[13].buildingLvl));
                    setStronghold(String(content.userBuildings[15].buildingLvl));
                    setHallOfWar(String(content.userBuildings[16].buildingLvl));
                    setEmbassy(String(content.userBuildings[17].buildingLvl));
                    setStorehouse(String(content.userBuildings[21].buildingLvl));
                    setTrapFactory(String(content.userBuildings[18].buildingLvl));
                    setUniversity(String(content.userBuildings[19].buildingLvl));
                    setForge(String(content.userBuildings[20].buildingLvl));
                    //console.log(dragonLair);
                }
            }
        )();    
    }, []);

    
   

    const submit = async (e: SyntheticEvent)=>{
        e.preventDefault();

        const response = await fetch(address, {
            method:'POST',
            headers: {'Content-Type':'application/json'},
            credentials: 'include', 
            body: JSON.stringify({
                dragonLair,
                hospital,
                tradingPost,
                farm,
                sawmill,
                ironMine,
                silverMine,
                watchtower,
                trainingGrounds,
                wishingWell,
                wall,
                siegeWorkshop,
                stables,
                ranged,
                barracks,
                stronghold,
                hallOfWar,
                embassy,
                storehouse,
                trapFactory,
                university,
                forge,
            })
        });


        const content = await response.json();
        if(content.response === "success"){
            setRedirect(true);
            
        }else{
            setError(content.message);
            //console.log(content);
        }
    }

    if(redirect){
        return <Redirect to='/user'/>;
    }


    return (
        <div className="container">
            <div className="row">
                <div className="col-12 col-lg-3 col-sm-3">
                    <LeftMenu/>
                </div>
                <div className="col-12 col-sm-9 col-lg-9">
                    <div className="card">
                        <form className="form-signin" onSubmit={submit}>
                            <br/>
                            <h3>Enter your building levels</h3>
                            {error !== "" &&
                                <p>{error}</p>
                            }
                            <br/>
                            <p><small>*some values can be missing or innacurate. if you have the actual precise values and want to contribute <Link to="/contribute"  style={linkStyle}>click here</Link></small></p>
                                <br/>
                            <div className="row">
                                <div className="col-6">
                                    <div className="row">
                                        <div className="col-5">
                                            <label>Dragon Lair</label>
                                        </div>
                                        <div className="col-6">
                                            <select value={dragonLair} onChange={e=> setDragonLair(e.target.value)}>
                                                {options.map((option) => (
                                                 <option key={option.value} value={option.value}>{option.label}</option>
                                                ))}
                                            </select>
                                        </div>
                                    </div>
                                    <br/>
                                    <div className="row">
                                        <div className="col-5">
                                            <label>Hall of War</label>
                                        </div>
                                        <div className="col-6">
                                            <select value={hallOfWar} onChange={e=> setHallOfWar(e.target.value)}>
                                                {options.map((option) => (
                                                 <option key={option.value} value={option.value}>{option.label}</option>
                                                ))}
                                            </select>
                                        </div>
                                    </div>
                                    <br/>
                                    <div className="row">
                                        <div className="col-5">
                                            <label>Embassy</label>
                                        </div>
                                        <div className="col-6">
                                            <select value={embassy} onChange={e=> setEmbassy(e.target.value)}>
                                                {options.map((option) => (
                                                 <option key={option.value} value={option.value}>{option.label}</option>
                                                ))}
                                            </select>
                                        </div>
                                    </div>
                                    <br/>
                                    <div className="row">
                                        <div className="col-5">
                                            <label>Storehouse</label>
                                        </div>
                                        <div className="col-6">
                                            <select value={storehouse} onChange={e=> setStorehouse(e.target.value)}>
                                                {options.map((option) => (
                                                 <option key={option.value} value={option.value}>{option.label}</option>
                                                ))}
                                            </select>
                                        </div>
                                    </div>
                                    <br/>
                                    <div className="row">
                                        <div className="col-5">
                                            <label>Trap Factory</label>
                                        </div>
                                        <div className="col-6">
                                            <select value={trapFactory} onChange={e=> setTrapFactory(e.target.value)}>
                                                {options.map((option) => (
                                                 <option key={option.value} value={option.value}>{option.label}</option>
                                                ))}
                                            </select>
                                        </div>
                                    </div>
                                    <br/>
                                    <div className="row">
                                        <div className="col-5">
                                            <label>University</label>
                                        </div>
                                        <div className="col-6">
                                            <select value={university} onChange={e=> setUniversity(e.target.value)}>
                                                {options.map((option) => (
                                                 <option key={option.value} value={option.value}>{option.label}</option>
                                                ))}
                                            </select>
                                        </div>
                                    </div>
                                    <br/>
                                    <div className="row">
                                        <div className="col-5">
                                            <label>Forge</label>
                                        </div>
                                        <div className="col-6">
                                            <select value={forge} onChange={e=> setForge(e.target.value)}>
                                                {options.map((option) => (
                                                 <option key={option.value} value={option.value}>{option.label}</option>
                                                ))}
                                            </select>
                                        </div>
                                    </div>
                                    <br/>
                                    <div className="row">
                                        <div className="col-5">
                                            <label>Hospital</label>
                                        </div>
                                        <div className="col-6">
                                            <select value={hospital} onChange={e=> setHospital(e.target.value)}>
                                                {options.map((option) => (
                                                 <option key={option.value} value={option.value}>{option.label}</option>
                                                ))}
                                            </select>
                                        </div>
                                    </div>
                                    <br/>
                                    <div className="row">
                                        <div className="col-5">
                                            <label>Trading Post</label>
                                        </div>
                                        <div className="col-6">
                                            <select value={tradingPost} onChange={e=> setTradingPost(e.target.value)}>
                                                {options.map((option) => (
                                                 <option key={option.value} value={option.value}>{option.label}</option>
                                                ))}
                                            </select>
                                        </div>
                                    </div>
                                    <br/>
                                    <div className="row">
                                        <div className="col-5">
                                            <label>Farm</label>
                                        </div>
                                        <div className="col-6">
                                            <select value={farm} onChange={e=> setFarm(e.target.value)}>
                                                {options.map((option) => (
                                                 <option key={option.value} value={option.value}>{option.label}</option>
                                                ))}
                                            </select>
                                        </div>
                                    </div>
                                    <br/>
                                    <div className="row">
                                        <div className="col-5">
                                            <label>Sawmill</label>
                                        </div>
                                        <div className="col-6">
                                            <select value={sawmill} onChange={e=> setSawmill(e.target.value)}>
                                                {options.map((option) => (
                                                 <option key={option.value} value={option.value}>{option.label}</option>
                                                ))}
                                            </select>
                                        </div>
                                    </div>
                                    <br/>
                                </div>
                                <div className="col-6">
                                    <div className="row">
                                        <div className="col-5">
                                            <label>Iron Mine</label>
                                        </div>
                                        <div className="col-6">
                                            <select value={ironMine} onChange={e=> setIronMine(e.target.value)}>
                                                {options.map((option) => (
                                                 <option key={option.value} value={option.value}>{option.label}</option>
                                                ))}
                                            </select>
                                        </div>
                                    </div>
                                    <br/>
                                    <div className="row">
                                        <div className="col-5">
                                            <label>Silver Mine</label>
                                        </div>
                                        <div className="col-6">
                                            <select value={silverMine} onChange={e=> setSilverMine(e.target.value)}>
                                                {options.map((option) => (
                                                 <option key={option.value} value={option.value}>{option.label}</option>
                                                ))}
                                            </select>
                                        </div>
                                    </div>
                                    <br/>
                                    <div className="row">
                                        <div className="col-5">
                                            <label>Watchtower</label>
                                        </div>
                                        <div className="col-6">
                                            <select value={watchtower} onChange={e=> setWatchtower(e.target.value)}>
                                                {options.map((option) => (
                                                 <option key={option.value} value={option.value}>{option.label}</option>
                                                ))}
                                            </select>
                                        </div>
                                    </div>
                                    <br/>
                                    <div className="row">
                                        <div className="col-5">
                                            <label>Training Grounds</label>
                                        </div>
                                        <div className="col-6">
                                            <select value={trainingGrounds} onChange={e=> setTrainingGrounds(e.target.value)}>
                                                {options.map((option) => (
                                                 <option key={option.value} value={option.value}>{option.label}</option>
                                                ))}
                                            </select>
                                        </div>
                                    </div>
                                    <br/>
                                    <div className="row">
                                        <div className="col-5">
                                            <label>Wishing Well</label>
                                        </div>
                                        <div className="col-6">
                                            <select value={wishingWell} onChange={e=> setWishingWell(e.target.value)}>
                                                {options.map((option) => (
                                                 <option key={option.value} value={option.value}>{option.label}</option>
                                                ))}
                                            </select>
                                        </div>
                                    </div>
                                    <br/>
                                    <div className="row">
                                        <div className="col-5">
                                            <label>Wall</label>
                                        </div>
                                        <div className="col-6">
                                            <select value={wall} onChange={e=> setWall(e.target.value)}>
                                                {options.map((option) => (
                                                 <option key={option.value} value={option.value}>{option.label}</option>
                                                ))}
                                            </select>
                                        </div>
                                    </div>
                                    <br/>
                                    <div className="row">
                                        <div className="col-5">
                                            <label>Siege Workshop</label>
                                        </div>
                                        <div className="col-6">
                                            <select value={siegeWorkshop} onChange={e=> setSiegeWorkshop(e.target.value)}>
                                                {options.map((option) => (
                                                 <option key={option.value} value={option.value}>{option.label}</option>
                                                ))}
                                            </select>
                                        </div>
                                    </div>
                                    <br/>
                                    <div className="row">
                                        <div className="col-5">
                                            <label>Stables</label>
                                        </div>
                                        <div className="col-6">
                                            <select value={stables} onChange={e=> setStables(e.target.value)}>
                                                {options.map((option) => (
                                                 <option key={option.value} value={option.value}>{option.label}</option>
                                                ))}
                                            </select>
                                        </div>
                                    </div>
                                    <br/>
                                    <div className="row">
                                        <div className="col-5">
                                            <label>Barracks</label>
                                        </div>
                                        <div className="col-6">
                                            <select value={barracks} onChange={e=> setBarracks(e.target.value)}>
                                                {options.map((option) => (
                                                 <option key={option.value} value={option.value}>{option.label}</option>
                                                ))}
                                            </select>
                                        </div>
                                    </div>
                                    <br/>
                                    <div className="row">
                                        <div className="col-5">
                                            <label>Range</label>
                                        </div>
                                        <div className="col-6">
                                            <select value={ranged} onChange={e=> setRanged(e.target.value)}>
                                                {options.map((option) => (
                                                 <option key={option.value} value={option.value}>{option.label}</option>
                                                ))}
                                            </select>
                                        </div>
                                    </div>
                                    <br/>
                                    <div className="row">
                                        <div className="col-5">
                                            <label>Stronghold</label>
                                        </div>
                                        <div className="col-6">
                                            <select value={stronghold} onChange={e=> setStronghold(e.target.value)}>
                                                {options.map((option) => (
                                                 <option key={option.value} value={option.value}>{option.label}</option>
                                                ))}
                                            </select>
                                        </div>
                                    </div>
                                    <br/>
                                </div>
                            </div>
                            <button className="btn btn-lg btn-primary btn-block" type="submit">Update</button>
                        </form>
                    </div>
                </div>
            </div> 
        </div>
    );
};

export default Buildings;
