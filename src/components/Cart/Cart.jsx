import React from "react";
import { useRecoilState } from "recoil";
import { cart } from "../../recoil/carts";
import './Cart.css';
import { item } from "../../data/foodItems";

const Cart = (props) => {
    const { id, name, price, quantity, image } = props
    const [cartItems, setCartItems] = useRecoilState(cart);
    const index = cartItems.findIndex(product => product.id === id)

    console.log(index)

    const increment = () => {
        const newList = [...cartItems.slice(0, index), { ...cartItems[index], quantity: quantity + 1 }, ...cartItems.slice(index + 1)]
        setCartItems(newList)
      }
    
    const decrement = () => {
      if (quantity === 1) {
        const newList = [...cartItems]
        newList.splice(index, 1)
        setCartItems(newList)
      }
      else {
        const newList = [...cartItems.slice(0, index), { ...cartItems[index], quantity: quantity - 1 }, ...cartItems.slice(index + 1)]
        setCartItems(newList)
      }
    }
    return (
        <div className="cart">
            <img className="cart-image" src={image}></img>
            <span className="cart-name">{name}</span><br/>
            <span className="cart-price">${price}</span>
            <div>
                <button className="decrease" onClick={decrement}>-</button>
                <span className="quantity"> {quantity} </span>
                <button className="increase" onClick={increment}>+</button>
            </div>
        </div>
    );
}
Cart.defaultProps = {
    id: "",
    name: "",
    description: "",
    price: 0,
    quantity:0,
    image: ""
  }
  


export default Cart;