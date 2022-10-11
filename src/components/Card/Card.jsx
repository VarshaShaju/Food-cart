import React from "react";
import { useRecoilState } from "recoil";
import { cart } from "../../recoil/carts";
import './Card.css';

const Card = (props) => {
    const { id, name, description, price, pcs, image} = props

    const[cartItems,setCartItems] = useRecoilState(cart)

    const addToCart = () => {
        const index = cartItems.findIndex(product => product.id === id)
        if (index === -1) {
          setCartItems((cartItems) => [...cartItems, {
            id: id,
            name: name,
            description: description,
            price: price,
            pcs: pcs,
            image: image,
            quantity: 1
          }])
        }
        else {
          const newList = [...cartItems.slice(0, index), { ...cartItems[index], quantity: cartItems[index].quantity + 1 }, ...cartItems.slice(index + 1)]
          setCartItems(newList)
        }
      }

    return (
        <div className="card">
            <img className="card-img" src={image}></img>
            <img className="cart-img" src='/assets/cart.svg' onClick={addToCart}></img>
            <span className="card-name">{name}</span><br/>
            <span className="card-desc">{description}</span><br/>
            <span className="card-price">${price}</span>
            <span className="card-pcs"> / {pcs} pcs</span>
        </div>
    );
}

export default Card;