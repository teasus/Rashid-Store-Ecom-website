import React from 'react'
import { NavLink } from 'react-router-dom'
import IntlCurr from '../helpers/IntlCurr'
const Product = (curr) => {
    const {id,name,image,price,category} = curr
  return (
    <NavLink to = {`/singleProduct/${id}`} > 
        <div className='card'>
            <figure>
                <img src={image} alt = {name} />
                <figcaption className = "caption" >{category}
                </figcaption>
            </figure>
            <div className='card-data' >
                <div className='card-data-flex'>
                    <h3>{name}</h3>
                    <p className='card-data--price'>{<IntlCurr price = {price} />}</p>
                    
                    
                     </div>

            </div>

        </div>
    
    
    </NavLink>
  )
}

export default Product