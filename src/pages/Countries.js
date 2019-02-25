import React, { Component } from 'react';
import countries from '../data/countries.json'
import { Link } from 'react-router-dom';

class Countries extends Component {
  
  passToParent = (country) => {
    this.props.callback(country)
  }
 
  render() {

    return (
      <div>
        <h1>
          Countries
        </h1>
        <div>
          {countries.map((country, index) => {

            return (
              <div key ={index} className="country">
                <p>
                {country.flag}
                </p>
                <p><Link onClick={()=> {this.PassToParent(country.cca3)}} to={`/${country.cca3}`}>
                {country.name.common}
                </Link></p>
              </div>

            )
            
          })}
        </div>


      </div>
    );
  }
}

export default Countries;