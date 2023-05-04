const cartReducer = (state,action) => {
    
    
    if(action.type ==="ADD_TO_CART") {
        let {id,color,amount,product} = action.payload ;
        const check =  state.cart.find((e) => e.id === id+color) ;
       
        let CartProduct ;
        if(check) {
            let updatedProduct = state.cart.map((curEl) => {
                if(curEl.id === id+color) {
                    let newAmount = curEl.amount + amount ;
                    if(newAmount >= curEl.max) {
                        newAmount = curEl.max ;
                    }
                    return {
                        ...curEl,
                        amount : newAmount ,
                    }
                }else {
                    return curEl ;
                }
            });
            return {
                ...state,
                cart : updatedProduct,
            }

        } else {
            CartProduct = {
                id : id+color ,
                name : product.name,
                color,
                amount,
                Image : product.image[0].url,
                price : product.price,
                max: product.stock,
            }
        }
        // else {
        //     CartProduct = {
        //         id : id+color ,
        //         name : product.name,
        //         color,
        //         amount,
        //         Image : product.image[0].url,
        //         price : product.price,
        //         max: product.stock,
        //     }
            

        //     return {
        //         ...state,
        //         cart : [...updatedCart ]
        //     }
        // }


        return {
            ...state,
            cart : [...state.cart, CartProduct],
        }
    
    }
    if(action.type === "SET_DECREMENT") {
        let updatedProduct = state.cart.map((curel)=> {
            if(curel.id === action.payload) {
                let decAmt = curel.amount > 1 ? curel.amount - 1 : 1 ;
                return {
                    ...curel,
                    amount : decAmt ,
                }
            } else {
                return curel ;
            }
        }) 
        return {...state, cart : updatedProduct}

    }
    if(action.type === "SET_INCREMENT") { 
        let updatedProduct = state.cart.map((curel)=> {
            if(curel.id === action.payload) {
                
                let incAmt = curel.amount < curel.max ? curel.amount + 1 :curel.max ;
                return {
                    ...curel,
                    amount : incAmt ,
                }
            } else {
                return curel ;
            }
        }) 
        return {...state, cart : updatedProduct}
    }
    if (action.type === "REMOVE_ITEM") {
        let updatedCart = state.cart.filter((curEl) =>
         curEl.id !==action.payload ) ;


        return {
            ...state,
            cart : updatedCart ,
        }

    }
    if (action.type === "EMPTY_CART") {
        return {
            ...state,
            cart : []
        }
    }
    if(action.type === "CART_ITEM_PRICE") {
        let {total_price,total_item} = state.cart.reduce((acc,curEl) => {
            let {price , amount} = curEl ;
           
            acc.total_price += price * amount  ;
            acc.total_item  +=  amount ;
            console.log(acc.total_item);
            return acc ;

        },
        {
            total_price : 0,
            total_item : 0, 
        }
        )
        // console.log(total_amount,total_item);
        
        return {
            ...state,
            total_amount : total_price,
            total_item ,
        }
    }
    return state;

}
export default cartReducer ;