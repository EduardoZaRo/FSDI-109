import {useEffect,useState} from "react";
import './product.css';
import QuantityPicker from './quantityPicker';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";

import {useContext} from 'react';
import StoreContext from '../state/storeContext';

function Product(props){
    const [quantity, setQuantity] = useState(1);

    const addProductToCart = useContext(StoreContext).addProductToCart;

    useEffect(function(){
        console.log("component loaded");
    },[]);

    function onQuantityChange(value){
        setQuantity(value);
    }

    function getTotal(){
        const total = quantity * props.data.price;
        return total.toFixed(2);
    }

    function handleAdd(){
        // JS spread  operator
        let prodForCart = {...props.data};
        prodForCart.quantity = quantity;
        addProductToCart(prodForCart);
    }

    return(
        <div className="product">
            <div className="product-img-container">
                <img src={"/images/"+props.data.image} alt="product" />
            </div>

            <div className="labels-container">
                <label>Price</label>
                <label><strong>Total</strong> </label>
            </div>
            <div className="prices-container">
                <label className="price">{props.data.price.toFixed(2)}$</label>
                <label className="total"><strong></strong> {getTotal()}$</label>
            </div>

            <h5>{props.data.title}</h5>
            <QuantityPicker onChange={onQuantityChange}/>

            <button onClick={handleAdd} className="add-btn">Add to <FontAwesomeIcon icon={faCartShopping}/></button>
        </div>
    );
}

export default Product;

/**
 * Create CarProduct component
 * 
 * cart should render to cartProduct instead of li
 *  -should pass data
 * 
 * Cart product should receive props and render information
 * 
 * 
 */