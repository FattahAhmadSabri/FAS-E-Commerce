import React from 'react'
import "./ProductCard.css"
import { useNavigate } from 'react-router-dom'

const ProductCard = ({product}) => {
  const navigate = useNavigate()
  return (
    <div onClick={()=>navigate(`/product/${5}`)} className='productCard w-[15rem] m-3 corsur-pointer transition-all'>
        <div className="h-[20rem]">
            <img className='h-full w-full object-cover object-left-top' src={product.imageUrl} alt="img" />
        </div>
        <div className="textPart bg-white p-3">
            <div className="">
            <p className='font-bold opacity-60'>{product.brand}</p>
            <p>{product.title}</p>
            </div>
            <div className="flex items-center space-x-2 ">
                <p className='font-semibold'>{product.discountedPrice}</p>
                <p className='line-through opacity-50'>{product.price}</p>
                <p className='text-green-600 font-semibold'>{Math.round(100-(product.discountedPrice/product.price)*100)} off</p>
                

            </div>
        </div>
      
    </div>
  )
}

export default ProductCard
