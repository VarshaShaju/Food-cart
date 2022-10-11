import React from "react";
import './SideNav.css'
import Cart from "../Cart/Cart";
import { item } from "../../data/foodItems";
import { useRecoilValue } from 'recoil'
import { cart, noOfCartItems, TotalPrice } from '../../recoil/carts'


const SideNav = () => {
  const cartItems = useRecoilValue(cart)
  const cartLength = useRecoilValue(noOfCartItems)
  const total = useRecoilValue(TotalPrice)

    return(
      <>
        <div className="cart-length">
            <h2 className="topbar">Current Order</h2>
            <div className="top-box"/>
            <img className="top-icon" src="/assets/settings.svg"></img>
            <div className="cart-flex">
              {cartItems.length !== 0 ? <div className="cart">
              {cartItems.map((item) => (<Cart key={item.id} id={item.id} name={item.name} price={item.price} image={item.image} quantity={item.quantity} />))}
              </div> : <h3>Cart is empty</h3>}
            </div>
        </div>
        <div className="total-price">
          <div className="price-flex"><p>SubTotal</p><p>${total}</p></div>
          <div className="price-flex"><p>Discount Sales</p><p>$0</p></div>
          <div className="price-flex"><p>Total Sales Tax</p><p>$0</p></div>
          <hr/>
          <div className="total"><p>Total</p><p>${total}</p></div>
        </div>
        <div><button className="payment-btn">Continue to payment</button></div>
      </>
    );
}

export default SideNav;