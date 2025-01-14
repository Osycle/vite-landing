// import Navbar from "./components/navbar/Navbar"
import Header from "./components/header/Header"
import Hero from "./components/hero/Hero"
import Companies from "./components/companies/Companies"
import Pricing from "./components/pricing/Pricing"
import Earnings from "./components/earnings/Earnings"
import Status from "./components/status/Status"
import Subscribe from "./components/subscribe/Subscribe"
import Footer from "./components/footer/Footer"

import 'bootstrap/dist/css/bootstrap.min.css'; 
import 'bootstrap/dist/js/bootstrap'; 

function App() {
  return (
    <>
      {/* <Navbar /> */}
      <Header />
      <Hero />
      <Companies />
      <Pricing />
      <Earnings />
      <Status />
      <Subscribe />
      <Footer />
    </>
  )
}

export default App
