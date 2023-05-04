import { createContext, useContext, useReducer } from "react";
import  reducer  from "../reducer/cartReducer";
import { useEffect } from "react";

const CartContext = createContext() ;

const getLocalCartData = () => {
    let localCartData = localStorage.getItem("rashidCart") ;
    
    const parsedData = JSON.parse(localCartData) ;
    if(!Array.isArray(parsedData)) return [] ;
    return parsedData ;
}

const initialState = {
    cart : getLocalCartData(),
    total_item : 0,
    total_amount: 0,
    shipping_fee: 50000,
}

const CartProvider = ({children}) => {
    
    const [state,dispatch] = useReducer(reducer, initialState)

    const addToCart= (id,color,amount,product) => {
        dispatch({type: "ADD_TO_CART", payload : {id,color,amount,product}})
    }
    const removeItem = (id) => {
        dispatch({type : "REMOVE_ITEM", payload : id}) ;
    }
    //add the data in local storage
    //get vs set
    const setDecrease = (id) => {
        dispatch({type : "SET_DECREMENT", payload : id})
    }
    const setIncrease = (id) => {
        dispatch({type : "SET_INCREMENT", payload : id})
    }
    useEffect(() => {
        dispatch({type : "CART_ITEM_PRICE"})
      localStorage.setItem("rashidCart",JSON.stringify(state.cart)) ;
    }, [state.cart])
    

    //empty cart
    const emptyCart = () => {
        dispatch({type : "EMPTY_CART"}) ;
    }

    return <CartContext.Provider 
    value={{...state,
     addToCart,
     removeItem,emptyCart,setDecrease,setIncrease}}>
        {children}
    </CartContext.Provider>

}

const useCartContext = () => {return useContext(CartContext)}

export {CartProvider,useCartContext} ;