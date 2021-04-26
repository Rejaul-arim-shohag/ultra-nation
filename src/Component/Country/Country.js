import React from 'react';
import './Country.css'

const Country = (props) => {
    const {name,population,flag}=props.country;
    const handleAddCountry=props.handleAddCountry;
    const countryStyle={
        border : "1px solid #ff6b81",
        margin:"10px",
        padding: "10px"
    }
    const imgStyle={
        width:"300px"
    }
    
    return (
        <div style={countryStyle}>
            <h2>Country : {name}</h2>
            <img style={imgStyle} src={flag} alt=""/>
            <h4>Population : {population}</h4>
            <button onClick={()=>handleAddCountry(props.country)} class="button">Country Add</button>
        </div>
    );
};

export default Country;