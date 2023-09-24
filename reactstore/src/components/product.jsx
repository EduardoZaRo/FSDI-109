import {useEffect,useState} from "react";
import './product.css';
import QuantityPicker from './quantityPicker';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";
function Product(props){
    const [quantity, setQuantity] = useState(1);
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
        console.log("handleAdd")
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