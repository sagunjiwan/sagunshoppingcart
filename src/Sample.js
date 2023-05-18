import React from 'react'
import { useEffect, useState } from 'react';

const Sample = () => {

    const[data, setData] = useState([]);

const getInfo = async () => {
    console.log("Working")
    const response = await fetch('https://fakestoreapi.com/products')
    const actualData =  await response.json()
    console.log(actualData);
    setData(actualData)
}

useEffect(() => {
    getInfo()
},[])







// fetch('https://api.covid19api.com/summary').then((apidata) => {
// console.log(apidata);

// return apidata.json();

// } ).then((actualdata) => {
//     //console.log(actualdata);
// console.log(actualdata.Countries[77]);

// let mydata = actualdata.Countries[77];

// document.getElementById('apidata').innerHTML = `My country is ${mydata.Country} and total new confirmed cases is ${mydata.NewConfirmed} 
// and the total confirmed cases is now ${mydata.TotalConfirmed} `


// } ).catch((error) => {
//     console.log("the error is " + error);
// } )

    return (
        <>
        <div className="outlook" >
            <h1 id="apidata" style={{color:"orange"}} > Welcome to Sagun's Shopping Cart </h1>
           { data.map((curElement, index) => {
                return(
                    <>
                    <div style={{display:'flex'}} > <h1 style={{paddingRight:"200px"}}> {curElement.category} </h1> <button> Add to Cart </button> </div>
                    
                    <h3> {curElement.description} </h3>
                    <img className="images" src={curElement.image} alt="NOT FOUND" />
                    <h2> {curElement.price} </h2>
                    <h4> {curElement.rating.rate} </h4>
                    <h1> {curElement.title} </h1>
                    </>
                )
            })}
        </div>
        </>
    )
}
export default Sample;