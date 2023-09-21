import {useEffect,useState} from "react";
import './product.css';
import QuantityPicker from './quantityPicker';
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



            <label>{props.data.price}$</label>
            <label><strong>Total:</strong> {qty*props.data.price}$</label>
            <h5>{props.data.title}</h5>
            <QuantityPicker sharedQuantity={sharedQuantity}/>
        </div>
    );
}

export default Product;