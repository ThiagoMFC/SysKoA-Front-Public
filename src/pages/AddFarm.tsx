import React, { SyntheticEvent, useState } from 'react';
import LeftMenu from '../components/LeftMenu';
import {Redirect} from 'react-router-dom';

const address = '';

const AddFarm = () => {
    const [redirect, setRedirect] = useState(false);
    const [error, setError] = useState("");
    const [farm, setFarm] = useState("");

    const submit = async (e: SyntheticEvent)=>{
        e.preventDefault();
        
        const response = await fetch(address, {
            method:'POST',
            headers: {'Content-Type':'application/json'},
            credentials: 'include', 
            body: JSON.stringify({
                farm,
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

    const filterSetFarm = (farmName: string) => {
        if(farmName === "undefined"){
            setFarm("undefined_");
        }else{
            setFarm(farmName);
        }
    }

    if(redirect){
        return <Redirect to='/resources'/>;
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
                            <h3>Create Farm</h3>
                            {error !== "" &&
                                <p>{error}</p>
                            }
                            <br/>
                            <input type="text" id="inputFarmName" style={{maxWidth: "50%", margin:"auto"}} className="form-control" placeholder="Farm Name" required onChange={e=> filterSetFarm(e.target.value)}/>
                            <br/>
                            <br/>
                            <button className="btn btn-lg btn-primary btn-block" type="submit" >Update</button>
                        </form>
                    </div>
                </div>
            </div> 
        </div>
    );
};

export default AddFarm;