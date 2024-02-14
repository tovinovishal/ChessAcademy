import React from 'react';
import '../assets/css/Landing.css';
import { Link } from 'react-router-dom';
import bv from '../assets/videos/c1.mp4';


function Landingpage() {
   
  return (
    <React.Fragment>
      <video autoPlay loop muted id = 'video' style={{position:"fixed",width:"100vw",zIndex:"-1"}}>
        <source src={bv} type='video/mp4'/>
      </video>

      <div className="hero-section">
        <h1>Checkmate is </h1><br/>
        <h1>Our</h1><br/>
        <h1>Middle</h1><br/>
        <h1>Name</h1><br/>
        <p style={{color:"white"}}>Need we say more? <br />Come to <strong>Queenstown</strong> and have the time of your life.</p>

        <Link to={`/login`}><button style={{fontSize:'20px'}}>Get Started</button></Link>
      </div>
    </React.Fragment>
  );
}

export default Landingpage;
