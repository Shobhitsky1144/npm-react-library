import React from 'react';
import './App.scss'

function CardLibrary({cardBg,city}) { 
  return (
    <div className='container'>
  <div className="card" style={{background:cardBg?cardBg:'white'}}> 
  <div className="card-header">
    <h4>Someone just donated $20 to The Gallery's Vision</h4>
    </div>
    <div className="card-body">
     
      <h3 className='title'>Donate to National Gallery {city ?city:'Singapore'} today!</h3>
      <h5 className='desc'>Please enter the donation amount below</h5>
      <div className="input-container">
        <input type='text' placeholder="$40"/> 
      </div> 
   
    </div>
    </div>
  </div>)
}

export default CardLibrary;
