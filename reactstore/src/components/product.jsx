import {useEffect,useState} from "react";
import './product.css';
import QuantityPicker from './quantityPicker';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";
function Product(props){
    const [qty, setQty] = useState(1);
    useEffect(function(){
        console.log("component loaded");
    },[]);
    function sharedQuantity(pickerQty){
        setQty(pickerQty);
        console.log(qty)
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
                <label>{props.data.price.toFixed(2)}$</label>
                <label><strong></strong> {(qty*props.data.price).toFixed(2)}$</label>
            </div>

            <h5>{props.data.title}</h5>
            <QuantityPicker sharedQuantity={sharedQuantity}/>
            <button className="add-btn">Add to <FontAwesomeIcon icon={faCartShopping}/></button>
        </div>
    );
}

export default Product;