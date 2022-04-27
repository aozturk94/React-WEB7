import React, { useState } from 'react'

function StateSample2() {

    let countryList = ['Türkiye', 'İran', 'Rusya', 'Yunanistan', 'Almanya', 'Japonya'];
    const [countries, setCountries] = useState(countryList);
    
    const deleteCountry = (item) => {
        let newCountryList = countries.filter(q => q != item);
        setCountries(newCountryList);
    }

    const deleteAll = (item) => {
        setCountries([]);
    }

  return (
    <div>
        <button onClick={()=> deleteAll()}>Delete All</button>
        <h1>Length: {countries.length}</h1>
        <ul>
            {
                countries.map((item) => {
                    return <>
                        <li>{item}</li>
                        <button onClick={()=> deleteCountry(item)}>Delete</button>
                    </>
                })
            }
        </ul>
    </div>
  )
}

export default StateSample2