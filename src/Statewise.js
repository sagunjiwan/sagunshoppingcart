import React from 'react'
import {useEffect, useState} from 'react'


const Statewise = () => {

    const[data, setData] = useState([]);

const getCovidData = async () => {
    console.log("Good");
    const response = await fetch('https://data.covid19india.org/data.json');
    const actualData = await response.json();
    console.log(actualData.statewise);
    setData(actualData.statewise);
}

useEffect(() => {
    getCovidData();
},[])

    return(
        <>
        <h1 style={{textAlign: "center"}} >COVID-19 TRACKER APP</h1>
        <table>
            <thead>
                <tr>
                    <th>State</th>
                    <td>Confirmed</td>
                    <td>Recovered</td>
                    <td>Death</td>
                    <td>Active</td>
                    <td>Updated</td>
                </tr>
            </thead>
            <tbody>
                {data.map((curElement, index) => {
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
                })}
            </tbody>
        </table>
        </>
    )
}
export default Statewise;