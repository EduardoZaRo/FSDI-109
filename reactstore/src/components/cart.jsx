import "./cart.css";
import {useEffect,useState} from "react";

import {useContext,} from 'react';
import StoreContext from '../state/storeContext';
import CartProduct from "./cartProduct";


function Cart() {
    const [total,  setTotal] = useState(0);

    let user = useContext(StoreContext).user;
    let cart = useContext(StoreContext).cart;
    
    function calculateTotal(cart){
        let aux = 0;
        cart.forEach((p) => {
            aux += (p.price * p.quantity);
        });
        setTotal(aux);
        return aux;
    }
    useEffect(function(){
        calculateTotal(cart);
        if(!cart.length){
            document.getElementById("checkout").style.display = "none";
        }
    },[]);
    console.log(cart)
    return (
        <div className="cart">
            <h1>Are you ready to pay</h1>
            <h3>You have {cart.length} products</h3>
            
            <div className="prod-list">
                {cart.map((p,i) => 
                    <CartProduct key={i} data={p}/>
                )}
            </div>

            <h2>Total: ${total.toFixed(2)}</h2>

            <button className="btn btn-primary m-3" id="checkout" >
                <a href="https://www.youtube.com/watch?v=dQw4w9WgXcQ&pp=ygULcmljayBhc3RsZXk%3D" target="_blank" rel="noreferrer">Checkout</a></button>
        </div>
    );
}

export default Cart;