import './cartProduct.css';

function CartProduct(props){
    function getTotal(){
        const total = props.data.quantity * props.data.price;
        return total.toFixed(2);
    }


    return(
        <div className="cart-product">
            <div className="product-img-container">
                <img src={"/images/"+props.data.image} alt="product" />
            </div>

            <div className="labels-container">
                <h4>{props.data.title}</h4>
                <h4>{props.data.category}</h4>
            </div>
            <div className="labels-container">
                <h5>Price</h5>
                <h5>{props.data.price}</h5>
            </div>
            <div className="labels-container">
                <h5>Quantity</h5>
                <h5>{props.data.quantity}</h5>
            </div>
            <div className="labels-container total">
                <h5>Total</h5>
                <h5>{getTotal()}</h5>
            </div>

        </div>
    );
}

export default CartProduct;

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