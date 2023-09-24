import StoreContext from './storeContext';
import {useState} from 'react';

function GlobalState(props){
    const [cart, setCart] = useState([]);
    const [user, setUser] = useState({
        id:123,
        name: "Irvin Eduardo Zavala Roman",

    })

    function addProductToCart(){
        console.log("global add")
    }
    function removeProductFromCart(){
        console.log("global remove")
    }
    return (
        <StoreContext.Provider value={{
            cart: cart,
            user: user,
            addProductToCart: addProductToCart,
            removeProductFromCart: removeProductFromCart
        }}>
            {props.children}
        </StoreContext.Provider>
    );
}

export default GlobalState;