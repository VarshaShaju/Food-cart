import React from "react";
import Card from "../components/Card/Card";
import {item} from '../data/foodItems'

function Coffee(){
    const data = item.filter((item) => 
        item.type ==='Coffee'
    );
        return(
            <section className="card-flex">
                {data.map((item, index)=>{
                    return <Card key={index} id={item.id} name={item.name} image={item.image} description={item.description} price={item.price} pcs={item.pcs}/>
                })}

            </section>
        );
}

export default Coffee;