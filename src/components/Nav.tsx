import React, { useState } from 'react';
import {Link} from 'react-router-dom';
/*const divStyle = {
    backgroundColor: "black",
    minWidth: '100%',
    minHeight: '45px',
    marginTop: '-4px',
};*/

const address = '';
//const address = 'http://localhost:8080/logout';


const Nav = (props:{name:string, setName: (name: string) => void}) => {
    const [isNavCollapsed, setIsNavCollapsed] = useState(true);
    const handleNavCollapse =()=> setIsNavCollapsed(!isNavCollapsed);
    
    

    const logout = async () =>{
        const response = await fetch(address, {
            method:'POST',
            headers: {'Content-Type':'application/json'},
            credentials: 'include', 
        });

        /*const content = await response.json();
        if(content.response === "fail"){
            //setError(content.message);
            //console.log(content.message);
        }else{
            //console.log(response)
            //props.setName('');
            
        }*/
        props.setName('');
    }


    let menu;
    let pathTo;
    if(props.name ===''){
        pathTo = "/";
        menu = (
            <ul className="navbar-nav">
                <li className="nav-item active">
                    <Link to="/register" className="nav-link">Register<span className="sr-only">(current)</span></Link>
                </li>
                <li className="nav-item">
                    <Link to="/login" className="nav-link">Login</Link>
                </li>
            </ul>  
        );
    }else{
        pathTo = "/user";
        menu = (
            <ul className="navbar-nav">
                <li className="nav-item">
                    <Link to="/" className="nav-link" onClick={logout}>Logout</Link>
                </li>
            </ul>
        );
    }

    


    return (
        <nav className="navbar navbar-expand-md navbar-dark bg-dark mb-4">
            <Link to={pathTo} className="navbar-brand">KoA Nexus</Link>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarCollapse" aria-controls="navbarCollapse" aria-expanded={!isNavCollapsed ? true:false} aria-label="Toggle navigation" onClick={handleNavCollapse}>
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className={`${isNavCollapsed ? 'collapse justify-content-end' : ''} navbar-collapse justify-content-end`} id="navbarCollapse">
                    {menu}
                </div>
        </nav>
    );
};



export default Nav;