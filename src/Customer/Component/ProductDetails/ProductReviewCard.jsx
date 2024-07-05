import { Avatar, Box, Grid, Rating } from '@mui/material'
import React from 'react'

const ProductReviewCard = () => {
  return (
    <div>
      <Grid container spacing={2}>
        <Grid item xs={1}>
          <Box>
            <Avatar className='text-white' sx={{ width: 56, height: 56, bgcolor: "#9155fd" }}>
              S
            </Avatar>
          </Box>
        </Grid>
        
        <Grid item xs={10}>
          <div className="space-y-2">
            <div>
              <p className="font-semibold text-gray-900">Sabri</p>
              <p className="text-sm text-gray-600">12-5-2024</p>
            </div>
            <Rating value={4.5} name='half-rating' readOnly  precision={0.5}/>
            <p className="text-gray-800">Lorem ipsum dolor sit, amet consectetur adipisicing elit.</p>
          </div>
        </Grid>
      </Grid>
    </div>
  )
}

export default ProductReviewCard
