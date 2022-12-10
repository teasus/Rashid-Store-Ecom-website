const IntlCurrFeat = ({price}) => {
    console.log(price);
    return Intl.NumberFormat("en-IN", {
      style: "currency",
      currency:"INR"}).format(price/100)
  }
  
  export default IntlCurrFeat