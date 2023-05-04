import React from 'react'
import IntlCurr from '../helpers/IntlCurr'
import CartAmountToggle from './CartAmountToggle'
import {FaTrash} from "react-icons/fa"
import { useCartContext } from '../context/cart_context'


const CartItem = ({id,name,color,amount,Image,price,max,}) => {
    const {removeItem,setDecrease,setIncrease} = useCartContext() ;
    // CartProduct = {
    //     id : id+color ,
    //     name : product.name,
    //     color,
    //     amount,
    //     Image : product.image[0].url,
    //     price : product.price,
    //     max: product.stock,
    // }
    // const setDecrease = () => {
    //     // amount > 1 ? setAmount(amount - 1) : setAmount(1);
    //   };
    
    //   const setIncrease = () => {
    //     // amount < stock ? setAmount(amount + 1) : setAmount(stock);
    //   };
  return (
    
        <div className='cart_heading grid grid-five-column'>
            <div className='cart-image--name'>
                <div>
                    <figure>
                <img  src = {Image} key = {id} alt = {id} />
                    </figure>
                </div>
                <div>
                    <p>{name}</p>
                    <div className='color-div' >
                        <p>Color:</p>
                        <div
                         className='color-style'
                        style={{backgroundColor : color, color : color}}></div>
                    </div>
                    
                   
                </div>
                
            </div>
            {/* PRICE*/}
            <div className='cart-hide'>
                <p> <IntlCurr price = {price} /></p>
            </div>
             {/* QTY */}
             <div>
                <CartAmountToggle
                amount={amount}
                setDecrease={()=> setDecrease(id)}
                setIncrease={()=> setIncrease(id)} /> 
            </div>
            {/* SUBTOTAL */}
            <div  className='cart-hide'>
                <p> <IntlCurr price={price*amount} /> </p>
            </div>
            <div>
                <FaTrash className="remove_icon" 
                onClick={() => removeItem(id)} />

            </div>

        </div>

    
  )
}


export default CartItem