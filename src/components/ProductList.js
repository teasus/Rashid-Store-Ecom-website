import { useFilterContext } from "../context/filter_context";
import React from "react";
import GridView from "./GridVew";
import ListView from "./ListView";


const ProductList = () => {
  const { filter_products, grid_view} = useFilterContext();


  if(grid_view) {
    return < GridView products = {filter_products} />
  }
  
  if(!grid_view) {
    return < ListView products = {filter_products} />
  }
};

export default ProductList;