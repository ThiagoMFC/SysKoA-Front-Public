import React, { useEffect, useState } from 'react';
//import logo from './logo.svg';
import './App.css';
import Nav from './components/Nav';
import Footer from './components/Footer';
import { BrowserRouter, Route } from 'react-router-dom';
import Home from './pages/Home';
import Login from './pages/Login';
import Register from './pages/Register';
import User from './pages/User';
import Buildings from './pages/Buildings';
import AllBuildings from './pages/AllBuildings';
import Rss from './pages/Rss';
import Contribute from './pages/Contribute';
import Team from './pages/Team';
import Heroes from './pages/Heroes';
import Gear from './pages/Gear';
import AddFarm from './pages/AddFarm';
//const address = 'http://localhost:8080/user';
const address = '';

function App() {

  const [name, setName] = useState("");
  //const [error, setError] = useState("");

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
                    //setError(content.message);
                    //console.log(content);
                }else{
                    setName(content.name);
                }
            }
        )();    
    });

  return (
    <div className="App">
      <BrowserRouter>
        <Nav name={name} setName={setName}/>
        <div className="content-container">
            <Route path='/' exact component={Home}/>
            <Route path='/login' exact component={() => <Login setName={setName}/>}/>
            <Route path='/register' exact component={Register}/>
            <Route path='/user' exact component={() => <User name={name}/>}/>
            <Route path='/buildings' exact component={Buildings}/>
            <Route path='/allbuildings' exact component={AllBuildings}/>
            <Route path='/resources' exact component={Rss}/>
            <Route path='/contribute' exact component={Contribute}/>
            <Route path='/heroes' exact component={Heroes}/>
            <Route path='/gear' exact component={Gear}/>
            <Route path='/farm' exact component={AddFarm}/>
            <Route path='/team' exact component={Team}/>
        </div>
        <div style={{marginTop:"250px"}}>
        <Footer/>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
