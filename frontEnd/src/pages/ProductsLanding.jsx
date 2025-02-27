import React from 'react'
import ProductsSection from '../components/ProductSection'
import Header from '../components/Header'
import ProductOne from '../components/ProductOne'
import FloatingProducts from '../components/FloatingProducts'
import NavigationBar from '../components/Navigation/NavigationBar'
import Footer from '../components/Footer'
import FloatingProducts2 from '../components/FloatingProducts2'

const ProductsLanding = () => {
  return (
    <div id='producLandingMain' className='h-max lg:mt-24 mt-0'>

      <NavigationBar layout={"About"} />

        <Header page={"PRODUCT"}/>
        <ProductOne />
        <FloatingProducts2/> 
        <Footer />
        {/* <ProductsSection /> */}
    </div>
  )
}

export default ProductsLanding