import React from "react";
import styled from "styled-components";
import { useFilterContext } from "../context/filter_context";
import { FaCheck } from "react-icons/fa";
import IntlCurr from "../helpers/IntlCurr";
import {Button} from "../styles/Button"

const FilterSection = () => {

  const {filters : {text,color,price, maxPrice,minPrice},
  updateFilterValue,clearFilters,
  all_products} = useFilterContext() ;

// TO GET THE UNIQUE DAT AOF EACH CATEGORYY
const getUniqueData = (data,property) => {
  let newVal = data.map((currEl) => {
    return currEl[property] ;
  })
  if(property === "colors") {
     newVal = newVal.flat() ;
  } 
  
  return newVal = ["all",...new Set(newVal)]
  
}

  const categoryOnlyData = getUniqueData(all_products,"category") ;
  console.log(categoryOnlyData);
  const companyData = getUniqueData(all_products,"company") ;
  const colorsData = getUniqueData(all_products,"colors") ;
 

  return <Wrapper>
    <div className="filter-search">
      <form onSubmit={(e) => e.preventDefault()} >
        <input
          type="text"
          name="text"
          value={text}
          onChange = {updateFilterValue} 
          placeholder = "SEARCH"
        />

      </form>
    </div>
    <div  className="filter-category">
      <h3>CATEGORY</h3>
      <div>
        {categoryOnlyData.map((elem,index) => {
          return <button 
          key= {index}
          type = "button"
          name = "category"
          value= {elem}
          onClick = {updateFilterValue} >
            {elem}
          </button>
        })}
      </div>
    </div>
    <div className="filter-company">
        <form action="#" >
          <select name="company" 
          id = "company"
          className="filter-company--select"
          onClick={updateFilterValue} 
          >
            {companyData.map((elem,index) => {
             return <option 
              key = {index} 
              name = "company"
              value= {elem} >
              {elem}
              </option>
            })}
          </select>
        </form>

    </div>
    <div className="filter-colors colors">
      <h3>COLORS</h3>
      <div className="filter-color-style">{
        colorsData.map((currColor,index) => {
          if(index === 0) {
            return <button
            key={index}
            value = {currColor}
            name = "color"
            type="button" 
            className = "color-all--style"
            onClick ={updateFilterValue}>
            All
            </button>
          }
          
            return <button
            key={index}
            value = {currColor}
            name = "color"
            type="button" 
            className = { `btnStyle ${color === currColor ?"active " : ""}`  }
            style={{backgroundColor : currColor }}
            onClick ={updateFilterValue}>

            {color === currColor ? <FaCheck className="checkStyle" /> : null}

            </button>
          }
          
        )}
      </div>
    </div>
    <div className="filter_price">
      <h3>PRICE</h3>
      <p> <IntlCurr price = {price} />  </p>
      <input
      type = "range"
      min = {minPrice}
      max = {maxPrice}
      value= {price}
      name = "price"
      onChange = {updateFilterValue}
      ></input>
     
    </div>
    <div className="filter-clear">
          <Button className="btn"
            onClick={clearFilters}
          >CLEAR FILTERS</Button>

    </div>


    


  </Wrapper>



};
const Wrapper = styled.section`
  padding: 5rem 0;
  display: flex;
  flex-direction: column;
  gap: 3rem;
  h3 {
    padding: 2rem 0;
    font-size: bold;
  }
  .filter-search {
    input {
      padding: 0.6rem 1rem;
      width: 80%;
    }
  }
  .filter-category {
    div {
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      gap: 1.4rem;
      button {
        border: none;
        background-color: ${({ theme }) => theme.colors.white};
        text-transform: capitalize;
        cursor: pointer;
        &:hover {
          color: ${({ theme }) => theme.colors.btn};
        }
      }
      .active {
        border-bottom: 1px solid #000;
        color: ${({ theme }) => theme.colors.btn};
      }
    }
  }
  .filter-company--select {
    padding: 0.3rem 1.2rem;
    font-size: 1.6rem;
    color: ${({ theme }) => theme.colors.text};
    text-transform: capitalize;
  }
  .filter-color-style {
    display: flex;
    justify-content: center;
  }
  .color-all--style {
    background-color: transparent;
    text-transform: capitalize;
    border: none;
    cursor: pointer;
  }
  .btnStyle {
    width: 2rem;
    height: 2rem;
    background-color: #000;
    border-radius: 50%;
    margin-left: 1rem;
    border: none;
    outline: none;
    opacity: 0.5;
    cursor: pointer;
    &:hover {
      opacity: 1;
    }
  }
  .active {
    opacity: 1;
  }
  .checkStyle {
    font-size: 1rem;
    color: #fff;
  }
  .filter_price {
    input {
      margin: 0.5rem 0 1rem 0;
      padding: 0;
      box-shadow: none;
      cursor: pointer;
    }
  }
  .filter-shipping {
    display: flex;
    align-items: center;
    gap: 1rem;
  }
  .filter-clear .btn {
    background-color: #ec7063;
    color: #000;
  }
`;
export default FilterSection;