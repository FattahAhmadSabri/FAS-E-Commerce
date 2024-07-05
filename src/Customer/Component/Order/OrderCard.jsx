import { Grid } from '@mui/material'
import React from 'react'
import AdjustIcon from '@mui/icons-material/Adjust';
import { useNavigate } from 'react-router-dom';
const OrderCard = () => {
    const navigate=useNavigate()
    return (
        <div onClick={()=>navigate(`/order/${1}`)} className='p-5 shadow-md shadow-gray hover:shadow-2xl border'>
            <Grid container spacing={2} sx={{ justifyContent: "space-between" }}>
                <Grid item sx={6}>
                    <div className=" flex">
                    <div className="flex corsur-pointer">
                        <img className='w-[5rem] h-[5rem] object-cover object-top' src="https://m.media-amazon.com/images/I/41QnhYJ6hiL._MCnd_AC_.jpg" alt="" />
                    </div>
                    <div className="ml-5 space-y-2 ">
                        <p className=''>Fully Large Size Paper Kites</p>
                        <p className='opacity-60 text-xs font-semibold'>Size: M</p>
                        <p className='opacity-60 text-xs font-semibold'>color: Black</p>

                    </div>
                    </div>

                </Grid>
                <Grid item xs={2}>
                    <p>₹490</p>
                </Grid>
                <Grid item xs={4}>
                    {true && <div className="">
                    <p>
                        <AdjustIcon sx={{width:"15px", height:"15px"}} className='text-green-600 mr-1.5 text-sm'/>
                        <span>
                            Delivered on July 4th
                        </span>
                        
                    </p>
                    <p>
                    <span className='text-xs'>
                            Your item has been delivered
                        </span>
                    </p>
                    </div>}
                    {false && <p>
                        <AdjustIcon/>
                        <span>
                            Expected delivery aon 04 July
                        </span>
                    </p>
                    }
                </Grid>

            </Grid>
        </div>
    )
}

export default OrderCard
