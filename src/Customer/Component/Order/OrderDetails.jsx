import React from 'react'
import AddressCard from '../AddressCard/AddressCard'
import OrderTracker from './OrderTracker'
import { Grid } from '@mui/material'
import StarBorderIcon from '@mui/icons-material/StarBorder';

const OrderDetails = () => {
    return (
        <div className='lg:px-20 px-5'>
            <div className="">
                <h1 className='font-bold text-xl py-6'>Delivery Address</h1>
                <AddressCard />

            </div>
            <div className="py-20">
                <OrderTracker activeStep={3} />
            </div>
            {[1, 1, 1, 1, 1, 1].map((item) =>
                <Grid className='space-y-5' container>

                    <Grid item container className='shadow-xl rounded-md p-5' sx={{ alignItems: "center", justifyContent: "space-between" }}>
                        <Grid item xs={6}>
                            <div className="flex items-center space-x-4">
                                <div className=''>
                                    <img className='w-[5rem] h-[5rem] object-cover object-top' src="https://m.media-amazon.com/images/I/71g9qoOqd8L._AC_UL480_FMwebp_QL65_.jpg" alt="img" />
                                </div>
                                <div className="mt-5 ml-2">
                                    <p className='font-semibold'>ASIAN Men's Everest-01 Sports Trekking</p>
                                    <div className="flex space-x-3 opacity-60">
                                        <p>color: Black</p>
                                        <p>Size: 9</p>
                                    </div>

                                    <p>Seller: ASIAN</p>
                                    <p>Price: ₹999</p>
                                </div>
                            </div>

                        </Grid>

                        <Grid item >
                            <StarBorderIcon className='px-2 text-5xl' sx={{ fontSize: '2rem', color: 'purple' }} />
                            <span>Rate & Review Product</span>
                        </Grid>
                    </Grid>



                </Grid>
            )}
        </div>
    )
}

export default OrderDetails
