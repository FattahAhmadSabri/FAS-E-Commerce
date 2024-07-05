import React from 'react'
import MainCarousel from '../../Component/HomeCarousel/MainCarousel'
import HomeSectionCarousel from '../../Component/HomeSectionCarousel/HomeSectionCarousel'
import { mens_kurta } from '../../../Data/MensKurt'
import Product from '../../Component/Product/Product'

const HomePage = () => {
  return (
    <div>
      {/* <MainCarousel/> */}
      <div className="space-y-10 py-20 flex flex-col justify-centre">
        {/* <HomeSectionCarousel data={mens_kurta} sectionName={"Men's Kurta"}/>
        <HomeSectionCarousel data={mens_kurta} sectionName={"Men's Shoes"}/>
        <HomeSectionCarousel data={mens_kurta} sectionName={"Women's Saree"}/>
        <HomeSectionCarousel data={mens_kurta} sectionName={"Women's Dress"}/>
         */}
      </div>
      <Product/>
    </div>
  )
}

export default HomePage
