import React from 'react';
import {Link} from 'react-router-dom';



const linkStyle ={
    color: 'black'
}

const LeftMenu = () => {
    return (
    <div>
            <div className="card">
                <div className="card-body">
                <Link to="/user" className="nav-link" style={linkStyle}>Home</Link>
                <Link to="/buildings" className="nav-link" style={linkStyle}>Buildings</Link>
                <Link to="/resources" className="nav-link" style={linkStyle}>Resources</Link>
                <Link to="/gear" className="nav-link" style={linkStyle}>Gear</Link>
                <Link to="/heroes" className="nav-link" style={linkStyle}>Heroes</Link>
                </div>
            </div>
        
    </div>  
    );
};

export default LeftMenu;