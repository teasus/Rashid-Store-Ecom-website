import HeroSection from './components/HeroSection'
import { useProductContext } from './context/Productcontext';
const About = () => {

  const {myName} = useProductContext() ;

  const data = {
    name : "Rashid's E-Commerce",
  }
  return (
    <>
    {myName}
    <HeroSection datas = {data} />
    </>
  )
}

export default About