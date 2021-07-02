import React, { SyntheticEvent, useState, useEffect } from 'react';
import LeftMenu from '../components/LeftMenu';
import {Redirect} from 'react-router-dom';
import Accordion from '../components/Accordion';
import {Link} from 'react-router-dom';

const address = '';
const addressUser = '';



const Rss = () => {
    const [redirect, setRedirect] = useState(false);
    const [error, setError] = useState("");
    const [food1k, setFood1k] = useState("");
    const [food3k, setFood3k] = useState("");
    const [food5k, setFood5k] = useState("");
    const [food10k, setFood10k] = useState("");
    const [food30k, setFood30k] = useState("");
    const [food50k, setFood50k] = useState("");
    const [food150k, setFood150k] = useState("");
    const [food500k, setFood500k] = useState("");
    const [food1500k, setFood1500k] = useState("");

    const [wood1k, setWood1k] = useState("");
    const [wood3k, setWood3k] = useState("");
    const [wood5k, setWood5k] = useState("");
    const [wood10k, setWood10k] = useState("");
    const [wood30k, setWood30k] = useState("");
    const [wood50k, setWood50k] = useState("");
    const [wood150k, setWood150k] = useState("");
    const [wood500k, setWood500k] = useState("");
    const [wood1500k, setWood1500k] = useState("");

    const [iron200, setIron200] = useState("");
    const [iron600, setIron600] = useState("");
    const [iron1k, setIron1k] = useState("");
    const [iron2k, setIron2k] = useState("");
    const [iron6k, setIron6k] = useState("");
    const [iron10k, setIron10k] = useState("");
    const [iron30k, setIron30k] = useState("");
    const [iron100k, setIron100k] = useState("");
    const [iron300k, setIron300k] = useState("");

    const [silver50, setSilver50] = useState("");
    const [silver150, setSilver150] = useState("");
    const [silver250, setSilver250] = useState("");
    const [silver500, setSilver500] = useState("");
    const [silver1500, setSilver1500] = useState("");
    const [silver2500, setSilver2500] = useState("");
    const [silver25k, setSilver25k] = useState("");
    const [silver75k, setSilver75k] = useState("");

    const [foodArray, setFoodArray] = useState({});
    const [woodArray, setWoodArray] = useState({});
    const [ironArray, setIronArray] = useState({});
    const [silverArray, setSilverArray] = useState({});
    const [foodArray2, setFoodArray2] = useState([""]);
    const [woodArray2, setWoodArray2] = useState([""]);
    const [ironArray2, setIronArray2] = useState([""]);
    const [silverArray2, setSilverArray2] = useState([""]);

    const [openFood, setOpenFood] = useState("");
    const [openWood, setOpenWood] = useState("");
    const [openIron, setOpenIron] = useState("");
    const [openSilver, setOpenSilver] = useState("");
    const [openRss, setOpenRss] = useState({});

    const [nobleBadge, setNobleBadge] = useState("");
    const [royalBadge, setRoyalBadge] = useState("");
    const [bookOfWar, setBookOfWar] = useState("");
    const [badges, setBadges] = useState({});

    const [farmArray, setFarmArray] = useState<any[]>([]);
    const [farmArrayItems, setFarmArrayItems] = useState<any[]>([]);
    const [farmArrayItems2, setFarmArrayItems2] = useState({});

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
                    console.log(content.message);
                }else{
                    //console.log(content);
                    setOpenFood(content.userResources.openFood.toString());
                    setOpenWood(content.userResources.openWood.toString());
                    setOpenIron(content.userResources.openIron.toString());
                    setOpenSilver(content.userResources.openSilver.toString());
                    setFoodArray2([content.userResources.foodItem.food1k.toString(), 
                        content.userResources.foodItem.food3k.toString(),
                        content.userResources.foodItem.food5k.toString(), 
                        content.userResources.foodItem.food10k.toString(), 
                        content.userResources.foodItem.food30k.toString(), 
                        content.userResources.foodItem.food50k.toString(),
                        content.userResources.foodItem.food150k.toString(), 
                        content.userResources.foodItem.food500k.toString(), 
                        content.userResources.foodItem.food1500k.toString()]);
                    setWoodArray2([content.userResources.woodItem.wood1k.toString(), 
                        content.userResources.woodItem.wood3k.toString(), 
                        content.userResources.woodItem.wood5k.toString(), 
                        content.userResources.woodItem.wood10k.toString(), 
                        content.userResources.woodItem.wood30k.toString(), 
                        content.userResources.woodItem.wood50k.toString(), 
                        content.userResources.woodItem.wood150k.toString(), 
                        content.userResources.woodItem.wood500k.toString(), 
                        content.userResources.woodItem.wood1500k.toString()]);
                    setIronArray2([content.userResources.ironItem.iron200.toString(),
                        content.userResources.ironItem.iron600.toString(),
                        content.userResources.ironItem.iron1k.toString(),
                        content.userResources.ironItem.iron2k.toString(),
                        content.userResources.ironItem.iron6k.toString(),
                        content.userResources.ironItem.iron10k.toString(),
                        content.userResources.ironItem.iron30k.toString(),
                        content.userResources.ironItem.iron100k.toString(),
                        content.userResources.ironItem.iron300k.toString()]);
                    setSilverArray2([content.userResources.silverItem.silver50.toString(),
                        content.userResources.silverItem.silver150.toString(),
                        content.userResources.silverItem.silver250.toString(),
                        content.userResources.silverItem.silver500.toString(),
                        content.userResources.silverItem.silver1500.toString(),
                        content.userResources.silverItem.silver2500.toString(),
                        content.userResources.silverItem.silver25k.toString(),
                        content.userResources.silverItem.silver75k.toString()]);
                    setNobleBadge(content.userResources.nobleBadge.toString());
                    setRoyalBadge(content.userResources.royalBadge.toString());
                    setBookOfWar(content.userResources.bookOfWar.toString());
                    setFood1k(content.userResources.foodItem.food1k.toString());
                    setFood3k(content.userResources.foodItem.food3k.toString());
                    setFood5k(content.userResources.foodItem.food5k.toString());
                    setFood10k(content.userResources.foodItem.food10k.toString());
                    setFood30k(content.userResources.foodItem.food30k.toString());
                    setFood50k(content.userResources.foodItem.food50k.toString());
                    setFood150k(content.userResources.foodItem.food150k.toString());
                    setFood500k(content.userResources.foodItem.food500k.toString());
                    setFood1500k(content.userResources.foodItem.food1500k.toString());
                    setWood1k(content.userResources.woodItem.wood1k.toString());
                    setWood3k(content.userResources.woodItem.wood3k.toString());
                    setWood5k(content.userResources.woodItem.wood5k.toString());
                    setWood10k(content.userResources.woodItem.wood10k.toString());
                    setWood30k(content.userResources.woodItem.wood30k.toString());
                    setWood50k(content.userResources.woodItem.wood50k.toString());
                    setWood150k(content.userResources.woodItem.wood150k.toString());
                    setWood500k(content.userResources.woodItem.wood500k.toString());
                    setWood1500k(content.userResources.woodItem.wood1500k.toString());
                    setIron200(content.userResources.ironItem.iron200.toString());
                    setIron600(content.userResources.ironItem.iron600.toString());
                    setIron1k(content.userResources.ironItem.iron1k.toString());
                    setIron2k(content.userResources.ironItem.iron2k.toString());
                    setIron6k(content.userResources.ironItem.iron6k.toString());
                    setIron10k(content.userResources.ironItem.iron10k.toString());
                    setIron30k(content.userResources.ironItem.iron30k.toString());
                    setIron100k(content.userResources.ironItem.iron100k.toString());
                    setIron300k(content.userResources.ironItem.iron300k.toString());
                    setSilver50(content.userResources.silverItem.silver50.toString());
                    setSilver150(content.userResources.silverItem.silver150.toString());
                    setSilver250(content.userResources.silverItem.silver250.toString());
                    setSilver500(content.userResources.silverItem.silver500.toString());
                    setSilver1500(content.userResources.silverItem.silver1500.toString());
                    setSilver2500(content.userResources.silverItem.silver2500.toString());
                    setSilver25k(content.userResources.silverItem.silver25k.toString());
                    setSilver75k(content.userResources.silverItem.silver75k.toString());
                    if(content.userFarms !== undefined){
                        //console.log(content.userFarms)
                        setFarmArray(content.userFarms);
                        let tempArr = [{}];
                        for (var i = 0; i < content.userFarms.length; i++) {
                            const newArr = [{"name": content.userFarms[i].farmName, "material": "food", "itemSize": "open", "quantity": content.userFarms[i].farmResources.openFood.toString()}, {"name": content.userFarms[i].farmName, "material": "food", "itemSize": "1000", "quantity": content.userFarms[i].farmResources.foodItem.food1k.toString()}, {"name": content.userFarms[i].farmName, "material": "food", "itemSize": "3000", "quantity": content.userFarms[i].farmResources.foodItem.food3k.toString()}, {"name": content.userFarms[i].farmName, "material": "food", "itemSize": "5000", "quantity": content.userFarms[i].farmResources.foodItem.food5k.toString()}, {"name": content.userFarms[i].farmName, "material": "food", "itemSize": "10000", "quantity": content.userFarms[i].farmResources.foodItem.food10k.toString()}, {"name": content.userFarms[i].farmName, "material": "food", "itemSize": "30000", "quantity": content.userFarms[i].farmResources.foodItem.food30k.toString()}, {"name": content.userFarms[i].farmName, "material": "food", "itemSize": "50000", "quantity": content.userFarms[i].farmResources.foodItem.food50k.toString()}, {"name": content.userFarms[i].farmName, "material": "food", "itemSize": "150000", "quantity": content.userFarms[i].farmResources.foodItem.food150k.toString()}, {"name": content.userFarms[i].farmName, "material": "food", "itemSize": "500000", "quantity": content.userFarms[i].farmResources.foodItem.food500k.toString()}, {"name": content.userFarms[i].farmName, "material": "food", "itemSize": "1500000", "quantity": content.userFarms[i].farmResources.foodItem.food1500k.toString()}, {"name": content.userFarms[i].farmName, "material": "wood", "itemSize": "open", "quantity": content.userFarms[i].farmResources.openWood.toString()}, {"name": content.userFarms[i].farmName, "material": "wood", "itemSize": "1000", "quantity": content.userFarms[i].farmResources.woodItem.wood1k.toString()}, {"name": content.userFarms[i].farmName, "material": "wood", "itemSize": "3000", "quantity": content.userFarms[i].farmResources.woodItem.wood3k.toString()}, {"name": content.userFarms[i].farmName, "material": "wood", "itemSize": "5000", "quantity": content.userFarms[i].farmResources.woodItem.wood5k.toString()}, {"name": content.userFarms[i].farmName, "material": "wood", "itemSize": "10000", "quantity": content.userFarms[i].farmResources.woodItem.wood10k.toString()}, {"name": content.userFarms[i].farmName, "material": "wood", "itemSize": "30000", "quantity": content.userFarms[i].farmResources.woodItem.wood30k.toString()}, {"name": content.userFarms[i].farmName, "material": "wood", "itemSize": "50000", "quantity": content.userFarms[i].farmResources.woodItem.wood50k.toString()}, {"name": content.userFarms[i].farmName, "material": "wood", "itemSize": "150000", "quantity": content.userFarms[i].farmResources.woodItem.wood150k.toString()}, {"name": content.userFarms[i].farmName, "material": "wood", "itemSize": "500000", "quantity": content.userFarms[i].farmResources.woodItem.wood500k.toString()}, {"name": content.userFarms[i].farmName, "material": "wood", "itemSize": "1500000", "quantity": content.userFarms[i].farmResources.woodItem.wood1500k.toString()}, {"name": content.userFarms[i].farmName, "material": "iron", "itemSize": "open", "quantity": content.userFarms[i].farmResources.openIron.toString()}, {"name": content.userFarms[i].farmName, "material": "iron", "itemSize": "200", "quantity": content.userFarms[i].farmResources.ironItem.iron200.toString()}, {"name": content.userFarms[i].farmName, "material": "iron", "itemSize": "600", "quantity": content.userFarms[i].farmResources.ironItem.iron600.toString()}, {"name": content.userFarms[i].farmName, "material": "iron", "itemSize": "1000", "quantity": content.userFarms[i].farmResources.ironItem.iron1k.toString()}, {"name": content.userFarms[i].farmName, "material": "iron", "itemSize": "2000", "quantity": content.userFarms[i].farmResources.ironItem.iron2k.toString()}, {"name": content.userFarms[i].farmName, "material": "iron", "itemSize": "6000", "quantity": content.userFarms[i].farmResources.ironItem.iron6k.toString()}, {"name": content.userFarms[i].farmName, "material": "iron", "itemSize": "10000", "quantity": content.userFarms[i].farmResources.ironItem.iron10k.toString()}, {"name": content.userFarms[i].farmName, "material": "iron", "itemSize": "30000", "quantity": content.userFarms[i].farmResources.ironItem.iron30k.toString()}, {"name": content.userFarms[i].farmName, "material": "iron", "itemSize": "100000", "quantity": content.userFarms[i].farmResources.ironItem.iron100k.toString()}, {"name": content.userFarms[i].farmName, "material": "iron", "itemSize": "300000", "quantity": content.userFarms[i].farmResources.ironItem.iron300k.toString()}, {"name": content.userFarms[i].farmName, "material": "silver", "itemSize": "open", "quantity": content.userFarms[i].farmResources.openSilver.toString()}, {"name": content.userFarms[i].farmName, "material": "silver", "itemSize": "50", "quantity": content.userFarms[i].farmResources.silverItem.silver50.toString()}, {"name": content.userFarms[i].farmName, "material": "silver", "itemSize": "150", "quantity": content.userFarms[i].farmResources.silverItem.silver150.toString()}, {"name": content.userFarms[i].farmName, "material": "silver", "itemSize": "250", "quantity": content.userFarms[i].farmResources.silverItem.silver250.toString()}, {"name": content.userFarms[i].farmName, "material": "silver", "itemSize": "500", "quantity": content.userFarms[i].farmResources.silverItem.silver500.toString()}, {"name": content.userFarms[i].farmName, "material": "silver", "itemSize": "1500", "quantity": content.userFarms[i].farmResources.silverItem.silver1500.toString()}, {"name": content.userFarms[i].farmName, "material": "silver", "itemSize": "2500", "quantity": content.userFarms[i].farmResources.silverItem.silver2500.toString()}, {"name": content.userFarms[i].farmName, "material": "silver", "itemSize": "25000", "quantity": content.userFarms[i].farmResources.silverItem.silver25k.toString()}, {"name": content.userFarms[i].farmName, "material": "silver", "itemSize": "75000", "quantity": content.userFarms[i].farmResources.silverItem.silver75k.toString()}];
                            tempArr = [...tempArr, ...newArr];
                            //setFarmArrayItems([...farmArrayItems, ...newArr]);

                            /*setFarmItemRss("food", "open", content.userFarms[i].farmResources.openFood.toString(), content.userFarms[i].farmName);
                            setFarmItemRss("food", "1000", content.userFarms[i].farmResources.foodItem.food1k.toString(), content.userFarms[i].farmName);
                            setFarmItemRss("food", "3000", content.userFarms[i].farmResources.foodItem.food3k.toString(), content.userFarms[i].farmName);
                            setFarmItemRss("food", "5000", content.userFarms[i].farmResources.foodItem.food5k.toString(), content.userFarms[i].farmName);
                            setFarmItemRss("food", "10000", content.userFarms[i].farmResources.foodItem.food10k.toString(), content.userFarms[i].farmName);
                            setFarmItemRss("food", "30000", content.userFarms[i].farmResources.foodItem.food30k.toString(), content.userFarms[i].farmName);
                            setFarmItemRss("food", "50000", content.userFarms[i].farmResources.foodItem.food50k.toString(), content.userFarms[i].farmName);
                            setFarmItemRss("food", "150000", content.userFarms[i].farmResources.foodItem.food150k.toString(), content.userFarms[i].farmName);
                            setFarmItemRss("food", "500000", content.userFarms[i].farmResources.foodItem.food500k.toString(), content.userFarms[i].farmName);
                            setFarmItemRss("food", "1500000", content.userFarms[i].farmResources.foodItem.food1500k.toString(), content.userFarms[i].farmName);*/
                        }
                        setFarmArrayItems([...farmArrayItems, ...tempArr]);
                    }
                    
                }
            }
        )();    
    }, []);


    const setRss = (material: string, itemSize: string, quantity: string) => {
        if(material === "food"){
            if(itemSize === "1000"){
                setFood1k(quantity);
            }
            if(itemSize === "3000"){
                setFood3k(quantity);
            }
            if(itemSize === "5000"){
                setFood5k(quantity);
            }
            if(itemSize === "10000"){
                setFood10k(quantity);
            }
            if(itemSize === "30000"){
                setFood30k(quantity);
            }
            if(itemSize === "50000"){
                setFood50k(quantity);
            }
            if(itemSize === "150000"){
                setFood150k(quantity);
            }
            if(itemSize === "500000"){
                setFood500k(quantity);
            }
            if(itemSize === "1500000"){
                setFood1500k(quantity);
            }
        }
        if(material === "wood"){
            if(itemSize === "1000"){
                setWood1k(quantity);
            }
            if(itemSize === "3000"){
                setWood3k(quantity);
            }
            if(itemSize === "5000"){
                setWood5k(quantity);
            }
            if(itemSize === "10000"){
                setWood10k(quantity);
            }
            if(itemSize === "30000"){
                setWood30k(quantity);
            }
            if(itemSize === "50000"){
                setWood50k(quantity);
            }
            if(itemSize === "150000"){
                setWood150k(quantity);
            }
            if(itemSize === "500000"){
                setWood500k(quantity);
            }
            if(itemSize === "1500000"){
                setWood1500k(quantity);
            }
        }
        if(material === "iron"){
            if(itemSize === "200"){
                setIron200(quantity);
            }
            if(itemSize === "600"){
                setIron600(quantity);
            }
            if(itemSize === "1000"){
                setIron1k(quantity);
            }
            if(itemSize === "2000"){
                setIron2k(quantity);
            }
            if(itemSize === "6000"){
                setIron6k(quantity);
            }
            if(itemSize === "10000"){
                setIron10k(quantity);
            }
            if(itemSize === "30000"){
                setIron30k(quantity);
            }
            if(itemSize === "100000"){
                setIron100k(quantity);
            }
            if(itemSize === "300000"){
                setIron300k(quantity);
            }
        }
        if(material === "silver"){
            if(itemSize === "50"){
                setSilver50(quantity);
            }
            if(itemSize === "150"){
                setSilver150(quantity);
            }
            if(itemSize === "250"){
                setSilver250(quantity);
            }
            if(itemSize === "500"){
                setSilver500(quantity);
            }
            if(itemSize === "1500"){
                setSilver1500(quantity);
            }
            if(itemSize === "2500"){
                setSilver2500(quantity);
            }
            if(itemSize === "25000"){
                setSilver25k(quantity);
            }
            if(itemSize === "75000"){
                setSilver75k(quantity);
            }
        }
        if(material === "noble badge"){
            setNobleBadge(quantity);
        }
        if(material === "royal badge"){
            setRoyalBadge(quantity);
        }
        if(material === "book of war"){
            setBookOfWar(quantity);
        }
    }


    const setFarmItemRss = (material: string, itemSize: string, quantity: string, farmName: string) =>{
        const newElement = {"name": farmName, "material": material, "itemSize": itemSize, "quantity": quantity};
        setFarmArrayItems([...farmArrayItems, newElement]);
        //console.log("farm array: ", farmArrayItems);

        const newArray = farmArrayItems.filter(function(v, i){
            return !(v.name === farmName && v.material === material && v.itemSize === itemSize);
        })
        //console.log("new array: ", newArray);

        
        setFarmArrayItems([...newArray, newElement]);
        //console.log(groupBy(farmArrayItems, "name"));
        
    }

    const submit = async (e: SyntheticEvent)=>{
        e.preventDefault();

        const response = await fetch(address, {
            method:'POST',
            headers: {'Content-Type':'application/json'},
            credentials: 'include', 
            body: JSON.stringify({
                openRss,
                foodArray,
                woodArray,
                ironArray,
                silverArray,
                badges,
                farmArrayItems2,
            })
        });


        const content = await response.json();
        if(content.response === "success"){
            setRedirect(true);
            console.log(content.message);
            
        }else{
            setError(content.message);
            //console.log(content.message);
        }

       
    }

    if(redirect){
        return <Redirect to='/user'/>;
    }
//console.log(farmArray);
    let farm;
    if(farmArray){     
        farm = <div>
                    {farmArray.map((myObject, index) => {
                        return (
                            <div>
                                <br/>
                                <h3>Enter {farmArray[index].farmName} resources</h3>
                                <br/>
                                <p><strong>Open resources</strong></p>  
                                <div className="row" style={{marginLeft: "0px"}}>
                                    <div className="col-lg-3 col-sm-3">
                                        <p>Food</p>
                                        <input className="form-control mr-sm-2" type="text" defaultValue={farmArray[index].farmResources.openFood} onBlur={e=> setFarmItemRss("food", "open", e.target.value, farmArray[index].farmName)}></input>
                                    </div>
                                    <div className="col-lg-3 col-sm-3">
                                        <p>Wood</p>
                                        <input className="form-control mr-sm-2" type="text" defaultValue={farmArray[index].farmResources.openWood} onBlur={e=> setFarmItemRss("wood", "open", e.target.value, farmArray[index].farmName)}></input>
                                    </div>
                                    <div className="col-lg-3 col-sm-3">
                                        <p>Iron</p>
                                        <input className="form-control mr-sm-2" type="text" defaultValue={farmArray[index].farmResources.openIron} onBlur={e=> setFarmItemRss("iron", "open", e.target.value, farmArray[index].farmName)}></input>
                                    </div>
                                    <div className="col-lg-3 col-sm-3">
                                        <p>Silver</p>
                                        <input className="form-control mr-sm-2" type="text" defaultValue={farmArray[index].farmResources.openSilver} onBlur={e=> setFarmItemRss("silver", "open", e.target.value, farmArray[index].farmName)}></input>
                                    </div>   
                                </div>
                                <br/>
                                <p><strong>Resource items</strong></p>  
                                <br/>
                                <Accordion title={"Food"} name={farmArray[index].farmName} content={Object.values(farmArray[index].farmResources.foodItem)} onChange={setFarmItemRss}/>  
                                <Accordion title={"Wood"} name={farmArray[index].farmName} content={Object.values(farmArray[index].farmResources.woodItem)} onChange={setFarmItemRss}/>
                                <Accordion title={"Iron"} name={farmArray[index].farmName} content={Object.values(farmArray[index].farmResources.ironItem)} onChange={setFarmItemRss}/>
                                <Accordion title={"Silver"} name={farmArray[index].farmName} content={Object.values(farmArray[index].farmResources.silverItem)} onChange={setFarmItemRss}/>
                            </div>
                        );
                    })}
            </div>
    }
    

    const itemArray = () =>{
            const newArrayFood = {"food1k": food1k, "food3k": food3k, "food5k": food5k, "food10k": food10k, "food30k": food30k, "food50k": food50k, "food150k": food150k, "food500k": food500k, "food1500k" : food1500k};
            setFoodArray(newArrayFood);
            const newArrayWood = {"wood1k": wood1k, "wood3k": wood3k, "wood5k": wood5k, "wood10k": wood10k, "wood30k": wood30k, "wood50k": wood50k, "wood150k": wood150k, "wood500k": wood500k, "wood1500k" : wood1500k};
            setWoodArray(newArrayWood);
            const newArrayIron = {"iron200": iron200, "iron600": iron600, "iron1k": iron1k, "iron2k": iron2k, "iron6k": iron6k, "iron10k": iron10k, "iron30k": iron30k, "iron100k": iron100k, "iron300k" : iron300k};
            setIronArray(newArrayIron);
            const newArraySilver = {"silver50": silver50, "silver150": silver150, "silver250": silver250, "silver500": silver500, "silver1500": silver1500, "silver2500": silver2500, "silver25k": silver25k, "silver75k": silver75k};
            setSilverArray(newArraySilver);
            const newOpenRss = {"food": openFood, "wood": openWood, "iron": openIron, "silver": openSilver};
            setOpenRss(newOpenRss);
            const newBadges = {"nobleBadge" : nobleBadge, "royalBadge": royalBadge, "bookOfWar": bookOfWar};
            setBadges(newBadges);
            const newFarmArray = groupBy(farmArrayItems, "name");
            //console.log("new farm array: ", newFarmArray);
            setFarmArrayItems2(newFarmArray);
            
    }

  const groupBy = (objectArray: any[], property: string | number) => {
      return objectArray.reduce(function(acc: { [x: string]: any[]; }, obj: { [x: string]: any; }){
          let key = obj[property]
          if(!acc[key]){
              acc[key]=[];
          }
          acc[key].push(obj);
          return acc;
      }, {});
  }

 


    return (
        <div className="container">
            <div className="row">
                <div className="col-12 col-lg-3 col-sm-3">
                    <LeftMenu/>
                </div>
                <div className="col-12 col-sm-9 col-lg-9">
                    <div className="card">
                    <Link style={{textAlign: "right", marginRight:"20px"}} className="text-muted" to="/farm">Add Farm</Link>
                        <form className="form-signin" onSubmit={submit}>
                            <br/>
                            <h3>Enter your main account resources</h3>
                            {error !== "" &&
                                <p>{error}</p>
                            }
                            <br/>
                            <p><strong>Open resources</strong></p>  
                            <div className="row" style={{marginLeft: "0px"}}>
                                <div className="col-lg-3 col-sm-3">
                                    <p>Food</p>
                                    <input className="form-control mr-sm-2" type="text" defaultValue={openFood} onBlur={e=> setOpenFood(e.target.value)}></input>
                                </div>
                                <div className="col-lg-3 col-sm-3">
                                    <p>Wood</p>
                                    <input className="form-control mr-sm-2" type="text" defaultValue={openWood} onBlur={e=> setOpenWood(e.target.value)}></input>
                                </div>
                                <div className="col-lg-3 col-sm-3">
                                    <p>Iron</p>
                                    <input className="form-control mr-sm-2" type="text" defaultValue={openIron} onBlur={e=> setOpenIron(e.target.value)}></input>
                                </div>
                                <div className="col-lg-3 col-sm-3">
                                    <p>Silver</p>
                                    <input className="form-control mr-sm-2" type="text" defaultValue={openSilver} onBlur={e=> setOpenSilver(e.target.value)}></input>
                                </div>   
                            </div>
                            <br/>
                            <p><strong>Resource items</strong></p>  
                            <br/>
                            <Accordion title={"Food"} name={"main"} content={foodArray2} onChange={setRss}/>  
                            <Accordion title={"Wood"} name={"main"} content={woodArray2} onChange={setRss}/>
                            <Accordion title={"Iron"} name={"main"} content={ironArray2} onChange={setRss}/>
                            <Accordion title={"Silver"} name={"main"} content={silverArray2} onChange={setRss}/>
                            <Accordion title={"Noble Badge"} name={"main"} content={nobleBadge} onChange={setRss}/>
                            <Accordion title={"Royal Badge"} name={"main"} content={royalBadge} onChange={setRss}/>
                            <Accordion title={"Book of War"} name={"main"} content={bookOfWar} onChange={setRss}/>
                            <br/>
                            {farm}
                            <br/>
                            <button className="btn btn-lg btn-primary btn-block" type="submit" onClick={() => itemArray()}>Update</button>
                        </form>
                    </div>
                </div>
            </div> 
        </div>
    );
};

export default Rss;