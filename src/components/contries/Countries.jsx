import React, { useEffect, useState } from 'react';
import Country from '../country/Country';
import './Countries.css'

const Countries = () => {
    const [countries, setCountries] = useState([]);
    useEffect(()=>{
        fetch("https://restcountries.com/v3.1/all")
        .then(res => res.json())
        .then(data =>setCountries(data))
    },[]);
    return (
        <div> 
            <h2>Hello from the rest contries : {countries.length}</h2>

           <div className='countries-container'>
            {
                 countries.map(country => console.log(country))
            }
           {
                countries.map(country => <Country name={country.name.common}
                     population={country.population}
                      area={country.area}
                       capital={country.capital}
                       region={country.region}
                       img ={country.flags.png}
                       key={country.cca3}></Country>)
            }
           </div>
        </div>
    );
};



export default Countries;