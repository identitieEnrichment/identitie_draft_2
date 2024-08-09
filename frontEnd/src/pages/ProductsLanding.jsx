import React from 'react'
import ProductsSection from '../components/ProductSection'
import Header from '../components/Header'

const ProductsLanding = () => {
  return (
    <div id='producLandingMain' className='h-max mt-24 lg:mt-0'>
        <Header page={"PRODUCT"}/>
        <ProductsSection />
    </div>
  )
}

export default ProductsLanding