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
//const address = 'http://localhost:8080/login';

const Login = (props:{setName: (name: string) => void}) => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [redirect, setRedirect] = useState(false);
    const [error, setError] = useState("");

    const submit = async (e: SyntheticEvent)=>{
        e.preventDefault();

        const response = await fetch(address, {
            method:'POST',
            headers: {'Content-Type':'application/json'},
            credentials: 'include', 
            body: JSON.stringify({
                email,
                password
            })
        });


        const content = await response.json();
        if(content.response === "success"){
            setRedirect(true);
            props.setName(content.name);
        }else{
            setError(content.message);
            //console.log(content);
        }
    

    }

    
    if(redirect){
        return <Redirect to='/user'/>;
    }


    return (
        <div className="d-md-flex flex-md-equal w-100 my-md-3 pl-md-3 justify-content-center" >
            {/*<div style={divImage}>*/}
                <div className="bg-dark mr-md-3 pt-3 px-3 pt-md-5 px-md-5 justify-content-center" style={divStyle}>
                    <form className="form-signin" onSubmit={submit}>
                        <h3 style={titleText}>Login</h3>
                        
                        {error !== "" &&
                            <p style={titleText}>{error}</p>
                        }
                        <input type="email" id="inputEmail" className="form-control" placeholder="Email address" required onChange={e=> setEmail(e.target.value)}/>
                        <br/>
                        <input type="password" id="inputPassword" className="form-control" placeholder="Password" required onChange={e=> setPassword(e.target.value)}/>
                        <br/>
                        <button className="btn btn-lg btn-primary btn-block" type="submit">Sign in</button>
                    </form>
                </div>
            {/*</div>*/} 
        </div>
    );
};

export default Login;