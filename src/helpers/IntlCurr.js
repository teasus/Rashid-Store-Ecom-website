const IntlCurr = ({price}) => {
  return Intl.NumberFormat("en-IN", {
    style: "currency",
    maximumSignificantDigits: 3,
    currency:"INR"}).format(price/10)
}

export default IntlCurr