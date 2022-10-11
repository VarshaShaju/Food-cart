import React from "react";
import Card from "../components/Card/Card";
import {item} from '../data/foodItems'

function Croissant(){
    
    const data = item.filter((item) => 
        item.type ==='Croissant'
    );
        return(
            <section className="card-flex">
                {data.map((item)=>{
                    return <Card key={item.id} id={item.id} name={item.name} image={item.image} description={item.description} price={item.price} pcs={item.pcs}/>
                })}

            </section>
        );
}

export default Croissant;