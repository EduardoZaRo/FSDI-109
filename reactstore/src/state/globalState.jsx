import StoreContext from './storeContext';
import {useState} from 'react';

function GlobalState(props){
    const [cart, setCart] = useState([]);
    const [user, setUser] = useState({
        id:123,
        name: "Irvin Eduardo Zavala Roman",

    })

    function addProductToCart(prod){
        console.log("xd")
        //create a copy
        let copy = [...cart];
        //modify the copy
        copy.push(prod);
        //set the copy back
        setCart(copy);
        alert(prod.title + " added to cart");
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