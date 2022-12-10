import styled from "styled-components";
import { TbTruckDelivery } from "react-icons/tb";
import { MdSecurity } from "react-icons/md";
import { GiReceiveMoney } from "react-icons/gi";
import { RiSecurePaymentLine } from "react-icons/ri";

const Services = () => {
  return (
    <Wrapper>
        <div className="container">
            <div className="l">
            < TbTruckDelivery size= {50} className ="icon" />
            <p>Super Fast Delivery </p>
                 </div>
            <div className="mid">
                <div className="midtop" >
                < MdSecurity size= {50}  className ="icon"/>
                <p>Non-Contact Shipping</p>

                </div>
                <div className="middown">
                < GiReceiveMoney size= {50}  className ="icon"/>
                <p>Money-Back Guarantee </p>
                </div>
            </div>
            <div className="r">
            < RiSecurePaymentLine size= {50} className ="icon"/>
            <p>Secure Payment</p>
            </div>
         
        </div>
 
    </Wrapper>
  )
}

const Wrapper = styled.section`
.icon {
    color : rgb(92 77 186) ;
    background : #fff ;
    border-radius: 50%;
    padding : 7px ;
}
.container {
    margin-top : 15rem ;


    gap : 40px ;
    
    height : 40rem ;
    
    display : flex ;
    justify-content : space-between ;
    align-items : center ;
    padding : 20px ;

}
p {
    font-family :  "Work Sans",sans-serif
}
.l, .r {
    background: ${({ theme }) => theme.colors.bg};
    border-radius : 10% ;
    flex-direction : column ;
    height :90% ;
    width :90% ;
    display : flex ;
    
    justify-content :center ;
    align-items :center ;
    gap : 5px ;
    
    
}

.mid {
    
    border-radius : 10% ;
    
    height :90% ;
    width :90% ;
    display : flex ;
    flex-direction : column ;
    justify-content :center ;
    align-items :center ;
    display : flex ;
    flex-direction: column;
    justify-content : center ;
    align-items : center ;
    gap : 15px;
}
.midtop, .middown {
    background: ${({ theme }) => theme.colors.bg};
    border-radius : 6% ;
    display : flex ;
    gap : 5px ;
    
    justify-content :center ;
    align-items :center ;
}

.midtop {
    width : 100% ;
   
    height 90%
}
.middown {
    width : 100% ;
   
    height 90%
}

@media (max-width: ${({ theme }) => theme.media.mobile}) {
    .midtop , .middown, .icon {
        size : 22rem ;
       
        background : #fff ;
        border-radius: 50%;
        padding : 1rem ;
    }
    .container {
        margin-top : 8rem ;
        gap : 15px ;
        height : 25rem ;
        display : flex ;
        justify-content : space-between ;
        align-items : center ;
        padding : 25px ;
    
    }
    p {

        font-size : 1.5rem ;
    }
    .midtop, .middown {
   
        background: ${({ theme }) => theme.colors.bg};
        border-radius : 8rem 11rem ;
        display : flex ;
        gap : 2px ;
        padding : 7px ;
        
        
        justify-content :center ;
        align-items :center ;
    }
  }
`;

export default Services