import { IconButton } from '@mui/material'
import RemoveCircleOutlineIcon from '@mui/icons-material/RemoveCircleOutline';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import React from 'react'
import { Button } from '@headlessui/react';

const CartItem = () => {
    return (
        <div className='p-5 shadow border rounded-md'>
            <div className='flex items-center'>
                <div className="w-[5rem] h-[5rem] lg:w-[9rem] lg:h-[9rem]">

                    <img className='w-full h-full object-cover object-top' src="https://m.media-amazon.com/images/I/41tDbjUS4gL._MCnd_AC_.jpg" alt="" />
                </div>
                <div className="ml-5 space-y-1">
                    <p className='font-semibold'>Nayasa Gloria 2 Piece Plastic Basket, Big1, Medium 1</p>
                    <p className='opacity-70'>Size : L, white</p>
                    <p className='opacity-70 mt-2'>Seller : Fasco</p>

                    <div className="flex space-x-5 items-center text-gray-900 pt-6">
                    <p className='font-semibold'>299</p>
                    <p className='opacity-50 line-through'>399</p>
                    <p className='text-green-600 font-semibold'>25% Off</p>
                </div>
                </div>
            </div>
            <div className="lg:flex items-center lg: space-x-10 pt-4 ">
                    <div className="flex item-center space-x-2">
                        <IconButton>
                            <RemoveCircleOutlineIcon/>
                        </IconButton>
                        <span className='py-1 px-7 border rounded-sm'>3</span>
                            <IconButton sx={{color:"#81b8c8"}}>
                            <AddCircleOutlineIcon/>
                        </IconButton>

                        
                    </div>
                    <div className="">
                    <Button sx={{color:"#81b8c8"}}>Remove</Button>
                </div>
                </div>
                

        </div>
    )
}

export default CartItem
