import React from 'react';
import './Country.css'

const Country = (props) => {
  
    return (
        <div className='country'>
            <img src={props.img}/>
            <h2>Country Name : {props.name}</h2>
            <p><small>Capital : {props.capital}</small></p>
            <p><small>Region : {props.region}</small></p>
            
            <p>Population : {props.population}</p>
            <p><small>Area : {props.area}</small></p>
          
        </div>
    );
};

export default Country;