import React from 'react';
import shopping from "./shopping-cart-solid.svg"


function Checkout(props) {
const newfiltt = props.datas.filter((item)=>{
    return item.bought == true

})
    return (
        <div className="checkout">
        <img src={shopping} alt="Img"/>
            <span className="counter">{newfiltt.length}</span>
        </div>
    );
}

export default Checkout;