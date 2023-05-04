import React from 'react'
import styled from 'styled-components'
import { TbTruckDelivery } from "react-icons/tb";
import { MdSecurity } from "react-icons/md";
import { GiReceiveMoney } from "react-icons/gi";
import { RiSecurePaymentLine } from "react-icons/ri";
const Trusted = () => {
  return (
    <Wrapper>
    <div className='bg' >
        <p> Trusted By 1000+ Companies </p>
      <div className='nice'>
      < TbTruckDelivery size={50} className  = 'icon' />
      < TbTruckDelivery size={50} className  = 'icon' />
      < TbTruckDelivery size={50} className  = 'icon' />
      < TbTruckDelivery size={50} className  = 'icon' />
      < TbTruckDelivery size={50} className  = 'icon' />
      < TbTruckDelivery size={50} className  = 'icon' />

      </div>

    </div>
      
      
      </Wrapper>
  )
}
const Wrapper = styled.section`

  .bg {
    margin-top : 6rem ;
    background-color : #e2f2f7 ;
    height : 20rem ;
    display: flex ;
    flex-direction : column ;
    margin-bottom: 5rem ;
    justify-content : center ;
    align-items: center ;

  }
  .nice {

    height : 50% ;
    width : 90% ;
    padding : 2rem ;
    display :flex ;
    justify-content : space-around;;
    align-items: center ;
    gap : 5rem ;
  }
  @media (max-width: ${({ theme }) => theme.media.mobile}) {
  
    .bg {
      padding : 1rem ;
    background-color : #e2f2f7 ;
    height : 14rem ;
    display: flex ;
    flex-direction : column ;
    margin-bottom: 5rem ;
    justify-content : center ;
    align-items: center ;

  }
}
`


export default Trusted