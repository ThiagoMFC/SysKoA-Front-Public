import React, {SyntheticEvent, useState, useEffect} from 'react';
import LeftMenu from '../components/LeftMenu';
import {Redirect} from 'react-router-dom';
import {Link} from 'react-router-dom';


const address = '';

const selectStyle ={
    minWidth: "80%",
    margin:"auto",
}

const linkStyle ={
    color: 'black'
}

const Gear = () => {
    const [redirect, setRedirect] = useState(false);
    const [error, setError] = useState("");
    const [gearHead, setGearHead] = useState("");
    const [gearNeck, setGearNeck] = useState("");
    const [gearTorso, setGearTorso] = useState("");
    const [gearWeapon, setGearWeapon] = useState("");
    const [gearRing, setGearRing] = useState("");
    const [gearBoots, setGearBoots] = useState("");

    const headOptions=[
        {
            value: "none", 
            label: "none"
        },
        {
            value: "war wolf helm", 
            label: "War Wolf Helm"
        }, 
        {
            value: "rare iseult crown",
            label: "Rare Iseult's Crown"
        },
        /*{
            value: "rare iseult crown +1",
            label: "Rare Iseult's Crown +1"
        },
        {
            value: "rare iseult crown +2",
            label: "Rare Iseult's Crown +2"
        },
        {
            value: "rare iseult crown +3",
            label: "Rare Iseult's Crown +3"
        },
        {
            value: "rare iseult crown +4",
            label: "Rare Iseult's Crown +4"
        },
        {
            value: "rare iseult crown +5",
            label: "Rare Iseult's Crown +5"
        },*/
        {
            value: "iseult crown",
            label: "Iseult's Crown"
        },
        /*{
            value: "iseult crown +1",
            label: "Iseult's Crown +1"
        },
        {
            value: "iseult crown +2",
            label: "Iseult's Crown +2"
        },
        {
            value: "iseult crown +3",
            label: "Iseult's Crown +3"
        },
        {
            value: "iseult crown +4",
            label: "Iseult's Crown +4"
        },
        {
            value: "iseult crown +5",
            label: "Iseult's Crown +5"
        },*/
    ];
    const neckOptions=[
        {
            value: "none", 
            label: "none"
        },
        {
            value: "war wolf talisman", 
            label: "War Wolf Talisman"
        }, 
        {
            value: "rare iseult pendant",
            label: "Rare Iseult's Pendant"
        },
        /*{
            value: "rare iseult pendant +1",
            label: "Rare Iseult's Pendant +1"
        },
        {
            value: "rare iseult pendant +2",
            label: "Rare Iseult's Pendant +2"
        },
        {
            value: "rare iseult pendant +3",
            label: "Rare Iseult's Pendant +3"
        },
        {
            value: "rare iseult pendant +4",
            label: "Rare Iseult's Pendant +4"
        },
        {
            value: "rare iseult pendant +5",
            label: "Rare Iseult's Pendant +5"
        },*/
        {
            value: "iseult pendant",
            label: "Iseult's Pendant"
        },
        /*{
            value: "iseult pendant +1",
            label: "Iseult's Pendant +1"
        },
        {
            value: "iseult pendant +2",
            label: "Iseult's Pendant +2"
        },
        {
            value: "iseult pendant +3",
            label: "Iseult's Pendant +3"
        },
        {
            value: "iseult pendant +4",
            label: "Iseult's Pendant +4"
        },
        {
            value: "iseult pendant +5",
            label: "Iseult's Pendant +5"
        },*/
    ];
    const torsoOptions=[
        {
            value: "none", 
            label: "none"
        },
        {
            value: "war wolf armor", 
            label: "War Wolf Armor"
        }, 
        {
            value: "rare iseult gown",
            label: "Rare Iseult's Gown"
        },
        /*{
            value: "rare iseult gown +1",
            label: "Rare Iseult's Gown +1"
        },
        {
            value: "rare iseult gown +2",
            label: "Rare Iseult's Gown +2"
        },
        {
            value: "rare iseult gown +3",
            label: "Rare Iseult's Gown +3"
        },
        {
            value: "rare iseult gown +4",
            label: "Rare Iseult's Gown +4"
        },
        {
            value: "rare iseult gown +5",
            label: "Rare Iseult's Gown +5"
        },*/
        {
            value: "iseult gown",
            label: "Iseult's Gown"
        },
        /*{
            value: "iseult gown +1",
            label: "Iseult's Gown +1"
        },
        {
            value: "iseult gown +2",
            label: "Iseult's Gown +2"
        },
        {
            value: "iseult gown +3",
            label: "Iseult's Gown +3"
        },
        {
            value: "iseult gown +4",
            label: "Iseult's Gown +4"
        },
        {
            value: "iseult gown +5",
            label: "Iseult's Gown +5"
        },*/
    ];
    const weaponOptions=[
        {
            value: "none", 
            label: "none"
        },
        {
            value: "war wolf crossbow", 
            label: "War Wolf Crossbow"
        }, 
        {
            value: "rare iseult bow",
            label: "Rare Iseult's Bow"
        },
        /*{
            value: "rare iseult bow +1",
            label: "Rare Iseult's Bow +1"
        },
        {
            value: "rare iseult bow +2",
            label: "Rare Iseult's Bow +2"
        },
        {
            value: "rare iseult bow +3",
            label: "Rare Iseult's Bow +3"
        },
        {
            value: "rare iseult bow +4",
            label: "Rare Iseult's Bow +4"
        },
        {
            value: "rare iseult bow +5",
            label: "Rare Iseult's Bow +5"
        },*/
        {
            value: "iseult bow",
            label: "Iseult's Bow"
        },
        /*{
            value: "iseult bow +1",
            label: "Iseult's Bow +1"
        },
        {
            value: "iseult bow +2",
            label: "Iseult's Bow +2"
        },
        {
            value: "iseult bow +3",
            label: "Iseult's Bow +3"
        },
        {
            value: "iseult bow +4",
            label: "Iseult's Bow +4"
        },
        {
            value: "iseult bow +5",
            label: "Iseult's Bow +5"
        },*/
    ];
    const ringOptions=[
        {
            value: "none", 
            label: "none"
        },
        {
            value: "war wolf ring", 
            label: "War Wolf Ring"
        }, 
        {
            value: "rare iseult ring",
            label: "Rare Iseult's Ring"
        },
        /*{
            value: "rare iseult ring +1",
            label: "Rare Iseult's Ring +1"
        },
        {
            value: "rare iseult ring +2",
            label: "Rare Iseult's Ring +2"
        },
        {
            value: "rare iseult ring +3",
            label: "Rare Iseult's Ring +3"
        },
        {
            value: "rare iseult ring +4",
            label: "Rare Iseult's Ring +4"
        },
        {
            value: "rare iseult ring +5",
            label: "Rare Iseult's Ring +5"
        },*/
        {
            value: "iseult ring",
            label: "Iseult's Ring"
        },
        /*{
            value: "iseult ring +1",
            label: "Iseult's Ring +1"
        },
        {
            value: "iseult ring +2",
            label: "Iseult's Ring +2"
        },
        {
            value: "iseult ring +3",
            label: "Iseult's Ring +3"
        },
        {
            value: "iseult ring +4",
            label: "Iseult's Ring +4"
        },
        {
            value: "iseult ring +5",
            label: "Iseult's Ring +5"
        },*/
    ];
    const bootsOptions=[
        {
            value: "none", 
            label: "none"
        },
        {
            value: "war wolf greaves", 
            label: "War Wolf Greaves"
        }, 
        {
            value: "rare iseult boots",
            label: "Rare Iseult's Boots"
        },
        /*{
            value: "rare iseult boots +1",
            label: "Rare Iseult's Boots +1"
        },
        {
            value: "rare iseult boots +2",
            label: "Rare Iseult's Boots +2"
        },
        {
            value: "rare iseult boots +3",
            label: "Rare Iseult's Boots +3"
        },
        {
            value: "rare iseult boots +4",
            label: "Rare Iseult's Boots +4"
        },
        {
            value: "rare iseult boots +5",
            label: "Rare Iseult's Boots +5"
        },*/
        {
            value: "iseult boots",
            label: "Iseult's Boots"
        },
        /*{
            value: "iseult boots +1",
            label: "Iseult's Boots +1"
        },
        {
            value: "iseult boots +2",
            label: "Iseult's Boots +2"
        },
        {
            value: "iseult boots +3",
            label: "Iseult's Boots +3"
        },
        {
            value: "iseult boots +4",
            label: "Iseult's Boots +4"
        },
        {
            value: "iseult crown +5",
            label: "Iseult's Boots +5"
        },*/
    ];

    useEffect(() => { 
        //let isMounted = true;
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
                    //console.log(content.message);
                }else{
                    //console.log(content);
                    if(content.headLvl !== 0){
                        setGearHead(content.head + " +" + content.headLvl);
                    }else{
                        setGearHead(content.head);
                    }
                    if(content.neckLvl !== 0){
                        setGearNeck(content.neck + " +" + content.neckLvl);
                    }else{
                        setGearNeck(content.neck);
                    }
                    if(content.torsoLvl !== 0){
                        setGearTorso(content.torso + " +" + content.torsoLvl);
                    }else{
                        setGearTorso(content.torso);
                    }
                    if(content.weaponLvl !== 0){
                        setGearWeapon(content.weapon + " +" + content.weaponLvl);
                    }else{
                        setGearWeapon(content.weapon);
                    }
                    if(content.ringLvl !== 0){
                        setGearRing(content.ring + " +" + content.ringLvl);
                    }else{
                        setGearRing(content.ring);
                    }
                    if(content.bootsLvl !== 0){
                        setGearBoots(content.boots + " +" + content.bootsLvl);
                    }else{
                        setGearBoots(content.boots);
                    }
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
                gearHead,
                gearNeck,
                gearTorso,
                gearWeapon,
                gearRing,
                gearBoots,
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
                        <div className="card-body">
                            <form className="form-signin" onSubmit={submit}>
                                <h3>Set your gear</h3>
                                <br/>
                                {error !== "" &&
                                <p>{error}</p>
                                }
                                <p><small>*some values can be missing or innacurate. if you have the actual precise values and want to contribute <Link to="/contribute"  style={linkStyle}>click here</Link></small></p>
                                <br/>
                                <div className="row">
                                    <div className="col-6">
                                        <p><strong>Head</strong></p>
                                        <div className="row">
                                            <select style={selectStyle} value={gearHead}  onChange={e=> setGearHead(e.target.value)}>
                                                    {headOptions.map((option) => (
                                                    <option key={option.value} value={option.value}>{option.label}</option>
                                                    ))}
                                            </select>
                                        </div>
                                        <br/>
                                        <p><strong>Neck</strong></p>
                                        <div className="row">
                                            <select style={selectStyle} value={gearNeck}  onChange={e=> setGearNeck(e.target.value)}>
                                                    {neckOptions.map((option) => (
                                                    <option key={option.value} value={option.value}>{option.label}</option>
                                                    ))}
                                            </select>
                                        </div>
                                        <br/>
                                        <p><strong>Torso</strong></p>
                                        <div className="row">
                                            <select style={selectStyle} value={gearTorso}  onChange={e=> setGearTorso(e.target.value)}>
                                                    {torsoOptions.map((option) => (
                                                    <option key={option.value} value={option.value}>{option.label}</option>
                                                    ))}
                                            </select>
                                        </div>
                                        <br/>                   
                                    </div>
                                    <div className="col-6">
                                        <p><strong>Weapon</strong></p>
                                        <div className="row">
                                            <select style={selectStyle} value={gearWeapon}  onChange={e=> setGearWeapon(e.target.value)}>
                                                    {weaponOptions.map((option) => (
                                                    <option key={option.value} value={option.value}>{option.label}</option>
                                                    ))}
                                            </select>
                                        </div>
                                        <br/>
                                        <p><strong>Ring</strong></p>
                                        <div className="row">
                                            <select style={selectStyle} value={gearRing}  onChange={e=> setGearRing(e.target.value)}>
                                                    {ringOptions.map((option) => (
                                                    <option key={option.value} value={option.value}>{option.label}</option>
                                                    ))}
                                            </select>
                                        </div>
                                        <br/>
                                        <p><strong>Boots</strong></p>
                                        <div className="row">
                                            <select style={selectStyle} value={gearBoots}  onChange={e=> setGearBoots(e.target.value)}>
                                                    {bootsOptions.map((option) => (
                                                    <option key={option.value} value={option.value}>{option.label}</option>
                                                    ))}
                                            </select>
                                        </div>
                                        <br/> 
                                    </div>
                                </div>
                                <br/>
                                <br/>
                                <button className="btn btn-lg btn-primary btn-block" type="submit">Update</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
           
        </div>
    );
};

export default Gear;