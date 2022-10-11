import './Button.css';
import React from "react";
import { categories } from '../../data/categories';

const Button = (props) => {
    // const {categories} = props;
    return (
        <div className='btn btn-padding'>
            <img src={categories.image}></img>
            <span>{categories.name}</span>
        </div>
    );
}

export default Button;