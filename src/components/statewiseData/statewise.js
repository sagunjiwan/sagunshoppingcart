import React, { useEffect, useState } from 'react'

const Statewise =()=> {

    const [data, setData] = useState([]);

    const getCovidData = async ()=> {
       const response = await fetch('https://data.covid19india.org/data.json');
        const actualData = await response.json();
        console.log(actualData.statewise);
        setData(actualData.statewise);
    }

useEffect(()=>{
    getCovidData();
}, [] )


  return (
    <>
      <h1>INDIA COVID-19 Dashboard</h1>
      <table>
        <thead>
            <tr>
                <th>State</th>
                <td>Confirmed</td>
                <td>Recovered</td>
                <td>Deaths</td>
                <td>Active</td>
                <td>Updated</td>
            </tr>
        </thead>
        <tbody>
            {
                data.map((curElement, index) => {
                    return(
                        <tr key={index} >
                        <th> {curElement.state} </th>
                        <td> {curElement.confirmed} </td>
                        <td> {curElement.recovered} </td>
                        <td> {curElement.deaths} </td>
                        <td> {curElement.active} </td>
                        <td> {curElement.lastupdatedtime} </td>
                    </tr>
                    )
                })
            }
        
            <tr>
                <th>State</th>
                <td>Confirmed</td>
                <td>Recovered</td>
                <td>Deaths</td>
                <td>Active</td>
                <td>Updated</td>
            </tr>
            <tr>
                <th>State</th>
                <td>Confirmed</td>
                <td>Recovered</td>
                <td>Deaths</td>
                <td>Active</td>
                <td>Updated</td>
            </tr>
        </tbody>
      </table>
    </>
  )
}
export default Statewise;