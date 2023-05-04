import styled from "styled-components";
import { useCartContext } from "./context/cart_context";
import CartItem from "./components/CartItem";
import { Button } from "./styles/Button";
import { NavLink } from "react-router-dom";
import IntlCurr from "./helpers/IntlCurr";
import { useAuth0 } from "@auth0/auth0-react";

const Cart = () => {
  const {cart,emptyCart, total_amount,shipping_fee} = useCartContext() ;
  console.log("cart ", cart);
  const {isAuthenticated ,user} = useAuth0();
  

  if(cart.length === 0) {
    return <EmptyDiv>
      <h3>NO ITEMS IN CART :( </h3>
    </EmptyDiv>
  }

  return <Wrapper>
    <div className="container">
      {isAuthenticated && (
        <div className="cart-user--profile">
          <img src = {user.picture} alt = {user.name} />
          <h2 className="cart-user--name">{user.name}</h2>

          
           </div>
      )}
      <div className="cart_heading grid grid-five-column">
        <p>Item</p>
        <p className="cart-hide">Price</p>
        <p>Quantity</p>
        <p className="cart-hide">Sub Total</p>
        <p>Remove</p>
      </div>
      <hr />

      <div className="cart_item">
        {cart.map((curElem) => {
          return <CartItem 
                key = {curElem.id} {...curElem} />
        } )}
      </div>
      <hr />
      <div className="Btn">
      <div className="Shop">
        <NavLink to = "/products" >
      <Button >Continue Shopping</Button>
      </NavLink>
      </div>
      <div className="Btn-Clear">
      
        <Button style={{backgroundColor : "red",
       borderRadius :"10px" }}
       onClick ={emptyCart}>
        Empty Cart</Button>
       
      </div>
      </div>
      <hr />
      <div className="Total_container">
      <div className="Total_Box" >
        {<p>sub-total :{<b><IntlCurr price={ total_amount} /></b>} </p>}
        {<p>shipping_fee :{<b><IntlCurr price={shipping_fee} /></b> } </p>}
        <hr/>
        {<p>Order Total : {<b><IntlCurr price={shipping_fee +  total_amount } /></b> }</p>}
      </div>
      </div>
   </div>
  </Wrapper>;
};
const EmptyDiv = styled.div`
  display : grid ;
  place-items: center ;
  height : 50vh;
  
  h3 {
    font-size : 4.2rem ;
    text-transform: capitalize ;
    font-weight : 300 ;
  }
`

const Wrapper = styled.section`
  padding: 9rem 0;
  .Shop {
    width : 50% ;
  }
  .Total_container {
    margin-top: 3rem ;
    margin-right : 3rem ;
    display :flex ;
    justify-content : flex-end ;
  }
  .Total_Box{
    border-radius : 1rem ;
    padding : 2rem ;
    background-color : #CAD9E8;
    
  }
  
  .Btn-Clear {
    display :flex ;
    justify-content : flex-end ;
    width : 50% ;

  }
  .Btn {
    display : flex ;
    margin-top : 2rem;
  }

  .grid-four-column {
    grid-template-columns: repeat(4, 1fr);
  }

  .grid-five-column {
    grid-template-columns: repeat(4, 1fr) 0.3fr;
    text-align: center;
    align-items: center;
  }
  .cart-heading {
    text-align: center;
    text-transform: uppercase;
  }
  hr {
    margin-top: 1rem;
  }
  .cart-item {
    padding: 3.2rem 0;
    display: flex;
    flex-direction: column;
    gap: 3.2rem;
  }

  .cart-user--profile {
    display: flex;
    justify-content: flex-start;
    align-items: center;
    gap: 1.2rem;
    margin-bottom: 5.4rem;

    img {
      width: 8rem;
      height: 8rem;
      border-radius: 50%;
    }
    h2 {
      font-size: 2.4rem;
    }
  }
  .cart-user--name {
    text-transform: capitalize;
  }
  .cart-image--name {
    /* background-color: red; */
    align-items: center;
    display: grid;
    gap: 1rem;
    grid-template-columns: 0.4fr 1fr;
    text-transform: capitalize;
    text-align: left;
    img {
      max-width: 5rem;
      height: 5rem;
      object-fit: contain;
      color: transparent;
    }

    .color-div {
      display: flex;
      align-items: center;
      justify-content: flex-start;
      gap: 1rem;

      .color-style {
        width: 1.4rem;
        height: 1.4rem;

        border-radius: 50%;
      }
    }
  }

  .cart-two-button {
    margin-top: 2rem;
    display: flex;
    justify-content: space-between;

    .btn-clear {
      background-color: #e74c3c;
    }
  }

  .amount-toggle {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 2.4rem;
    font-size: 1.4rem;

    button {
      border: none;
      background-color: #fff;
      cursor: pointer;
    }

    .amount-style {
      font-size: 2.4rem;
      color: ${({ theme }) => theme.colors.btn};
    }
  }

  .remove_icon {
    font-size: 1.6rem;
    color: #e74c3c;
    cursor: pointer;
  }

  .order-total--amount {
    width: 100%;
    margin: 4.8rem 0;
    text-transform: capitalize;
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    align-items: flex-end;

    .order-total--subdata {
      border: 0.1rem solid #f0f0f0;
      display: flex;
      flex-direction: column;
      gap: 1.8rem;
      padding: 3.2rem;
    }
    div {
      display: flex;
      gap: 3.2rem;
      justify-content: space-between;
    }

    div:last-child {
      background-color: #fafafa;
    }

    div p:last-child {
      font-weight: bold;
      color: ${({ theme }) => theme.colors.heading};
    }
  }

  @media (max-width: ${({ theme }) => theme.media.mobile}) {
    .grid-five-column {
      grid-template-columns: 1.5fr 1fr 0.5fr;
    }
    .cart-hide {
      display: none;
    }

    .cart-two-button {
      margin-top: 2rem;
      display: flex;
      justify-content: space-between;
      gap: 2.2rem;
    }

    .order-total--amount {
      width: 100%;
      text-transform: capitalize;
      justify-content: flex-start;
      align-items: flex-start;

      .order-total--subdata {
        width: 100%;
        border: 0.1rem solid #f0f0f0;
        display: flex;
        flex-direction: column;
        gap: 1.8rem;
        padding: 3.2rem;
      }
    }
  }
`;

export default Cart;
