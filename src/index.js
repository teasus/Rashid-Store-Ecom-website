import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { CartProvider } from "./context/cart_context";

import { AppProvider } from "./context/Productcontext";
import { FilterContextProvider } from "./context/filter_context";

import { Auth0Provider } from "@auth0/auth0-react";


const root = ReactDOM.createRoot(document.getElementById("root"));
 const domain = process.env.REACT_APP_DOMAIN ;
 const client = process.env.REACT_APP_CLIENT ;
root.render (
<Auth0Provider
domain={domain}
clientId={client}
redirectUri={window.location.origin}>
    <AppProvider>
        <FilterContextProvider>
            <CartProvider>
                <App />
            </CartProvider>
        </FilterContextProvider>
    </AppProvider>
 </Auth0Provider>
);


reportWebVitals();
