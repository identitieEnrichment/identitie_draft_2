import React from 'react'
import ProductsSection from '../components/ProductSection'
import Header from '../components/Header'
import ProductOne from '../components/ProductOne'
import FloatingProducts from '../components/FloatingProducts'
import NavigationBar from '../components/Navigation/NavigationBar'

const ProductsLanding = () => {
  return (
    <div id='producLandingMain' className='h-max lg:mt-24 mt-0'>
      <div className='text-white '>
      <NavigationBar />
      </div>
      
        <Header page={"PRODUCT"}/>
        <ProductOne />
        <FloatingProducts/> 
        {/* <ProductsSection /> */}
    </div>
  )
}

export default ProductsLanding