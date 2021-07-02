import React from 'react';
import {Link} from 'react-router-dom';

const divStyleFooter = {
    minWidth: '100%',
    maxHeight: '200px',
    paddingTop: "2rem!important",
};

//const PayPalButton = paypal.Buttons.driver("react", { React, ReactDOM });

const Footer = () => {
  //const [value, setValue] = useState("");

    return (
        <footer className=" footer container py-5 bg-dark" style={divStyleFooter}>
      <div className="row bg-dark">
        <div className="col-12 col-md">
          <p style={{color:"white"}}>Consider donating to our Paypal if you want to help keep this website alive (and/or fuel with my addiction to the game)</p>
          
        </div>
        <div className="col-4 col-md">
          
          <div id="paypal-button-container">
            <div style={{textAlign: "center", marginBottom: "10px"}}><label htmlFor="amount"> </label><input defaultValue="1" name="amountInput" type="number" id="amount"  ></input><span style={{color: "white"}}> USD</span>
            </div>
            
          </div>
        </div>
        
        <div className="col-6 col-md">
          <h5>Resources</h5>
          <ul className="list-unstyled text-small">
            <li><Link className="text-muted" to="/allbuildings">All Buildings</Link></li>
            <li><Link className="text-muted" to="/contribute">Contribute</Link></li>
            <li><Link className="text-muted" to="/team">Team</Link></li>
          </ul>
        </div>
      </div>
    </footer>
    );
};

export default Footer;