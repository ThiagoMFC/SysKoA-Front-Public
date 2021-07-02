//import { render } from '@testing-library/react';
//import { countReset } from 'node:console';
import React, { SyntheticEvent, useState } from 'react';
import {Redirect} from 'react-router-dom';

const divStyle = {
    width: '30%',
    minWidth: '350px',
    height: '380px',
    borderRadius: '10px 10px 10px 10px',
    marginTop: '20%',
};

/*const divImage ={
    width: '75%',
    height: '75%',
    backgroundColor: 'grey',
    borderRadius: '10px 10px 10px 10px',
  
}*/

const titleText ={
    color: 'white'
}

const address = '';

const Register = () => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [redirect, setRedirect] = useState(false);
    const [error, setError] = useState("");

    const submit = async (e: SyntheticEvent)=>{
        e.preventDefault();

        const response = await fetch(address, {
            method:'POST',
            headers: {'Content-Type':'application/json'}, 
            body: JSON.stringify({
                name,
                email,
                password
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
        return <Redirect to='/login'/>;
    }


    return (
        <div className="d-md-flex flex-md-equal w-100 my-md-3 pl-md-3 justify-content-center" >

            <section className="py-5">
                <div className="container px-4 px-lg-5 my-5">
                    <div className="row gx-4 gx-lg-5 align-items-center">
                        <div className="col-md-6">
                            <div>
                                <h4>Before registering</h4>
                                <br/>
                                <p><strong>Do I need to sign up?</strong></p>
                                <p>Yes. that's the only way we can store your information so you don't have to fill up everything everytime you access the site</p>
                                </div>
                                <br/>
                                <p><strong>Do I need to use my email?</strong></p>
                                <p>No. the Email field is just so we can have a unique identifier for you. It doesn't even need to be a real one, we're not gonna check. Just have in mind that you cannot recover your password if you don't use a real email.</p>
                                <br/>
                                <p><strong>What information are you storing?</strong></p>
                                <p>Only game related stuff. Resources, farms, items, gear, and heroes.</p>
                                <br/>
                                <h4>DO NOT USE YOUR GAME LOGIN INFORMATION</h4>
                                <p>Please do not use the same email and password you registered to the game with. We have absolutely no connection with the game developers and/or publisher. This is a fan made website.</p>
                            </div>
                        
                        <div className="col-md-6">
                            <div className="bg-dark mr-md-3 pt-3 px-3 pt-md-5 px-md-5 justify-content-center" style={divStyle}>
                                <form className="form-signin" onSubmit={submit}>
                                    <h3 style={titleText}>Register</h3>
                                    
                                    {error !== "" &&
                                        <p style={titleText}>{error}</p>
                                    }
                                    <input type="text" id="inputName" className="form-control" placeholder="Name" required onChange={e=> setName(e.target.value)}/>
                                    <br/>
                                    <input type="email" id="inputEmail" className="form-control" placeholder="Email address" required onChange={e=> setEmail(e.target.value)}/>
                                    <br/>
                                    <input type="password" id="inputPassword" className="form-control" placeholder="Password" required onChange={e=> setPassword(e.target.value)}/>
                                    <br/>
                                    <button className="btn btn-lg btn-primary btn-block" type="submit">Sign up</button>
                                </form>
                            </div>  
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Register;