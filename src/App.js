import React, { useEffect, useState } from 'react';
import logo from './logo.svg';
import './App.css';
import Country from './Component/Country/Country';
import Cart from './Component/Cart/Cart';

function App() {
  const [countries,setCountries] = useState([]);
  const [cart,setCart] = useState([]);
  useEffect(()=>{
    fetch('https://restcountries.eu/rest/v2/all')
    .then(response=>response.json())
    .then(data=> setCountries(data))
  }, [])

  const handleAddCountry=(country)=>{
    console.log("country added", country)
    const newCart =[...cart, country]
    setCart(newCart)
  }
  return (
    <div className="App">
            <h1>Country Loaded : {countries.length}</h1>
            <h2>Country Added : {cart.length}</h2>
            <Cart cart={cart}></Cart>
              {
                countries.map(country=> <Country country={country} handleAddCountry={handleAddCountry} key={country.alpha3Code}></Country>)
              }
         </div>
  );
}

export default App;