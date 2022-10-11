import React,{useState} from "react";
import Card from "../components/Card/Card";
import {item} from '../data/foodItems'

function Signature(){
    const data = item.filter((item) => 
        item.type ==='Signature'
    );
        return(
            <section className="card-flex">
                {data.map((item)=>{
                    return <Card key={item.id} id={item.id} name={item.name} image={item.image} description={item.description} price={item.price} pcs={item.pcs}/>
                })}

            </section>
        );
    
}

export default Signature;