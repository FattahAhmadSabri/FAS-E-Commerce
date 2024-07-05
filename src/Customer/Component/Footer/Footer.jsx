import { Button, Grid, Typography } from '@mui/material'
import React from 'react'

const Footer = () => {
  return (
    <div>
      <Grid className='bg-black text-white text-center mt-10'
      container
      sx={{bgcolor:'black',color: 'white', py:3}}
      >
          <Grid item xs={12} sm={6} md={3}>
            
            <div className=""><Typography className='pb-5' variant='h6'> FAS.in </Typography></div>
            <div className=""><Button className='pb-5' variant='h6'> About </Button></div>
            <div className=""><Button className='pb-5' variant='h6'> Blog </Button></div>
            <div className=""><Button className='pb-5' variant='h6'> Youtube </Button></div>
            <div className=""><Button className='pb-5' variant='h6'> Instagram </Button></div>
            <div className=""><Button className='pb-5' variant='h6'> Facebook </Button></div>
          </Grid>
          <Grid item xs={12} sm={6} md={3}>
            
            <div className=""><Typography className='pb-5' variant='h6'> Solution </Typography></div>
            <div className=""><Button className='pb-5' variant='h6'> About </Button></div>
            <div className=""><Button className='pb-5' variant='h6'> Marketing </Button></div>
            <div className=""><Button className='pb-5' variant='h6'> Contact </Button></div>
            <div className=""><Button className='pb-5' variant='h6'> Career </Button></div>
            
          </Grid>
          <Grid item xs={12} sm={6} md={3}>
            
            <div className=""><Typography className='pb-5' variant='h6'> Documentation </Typography></div>
            <div className=""><Button className='pb-5' variant='h6'> Support </Button></div>
            <div className=""><Button className='pb-5' variant='h6'> Data </Button></div>
            <div className=""><Button className='pb-5' variant='h6'> Quotation </Button></div>
            <div className=""><Button className='pb-5' variant='h6'> LLC </Button></div>
            
          </Grid>
          <Grid item xs={12} sm={6} md={3}>
            
            <div className=""><Typography className='pb-5' variant='h6'> Legal </Typography></div>
            <div className=""><Button className='pb-5' variant='h6'> Privecy </Button></div>
            <div className=""><Button className='pb-5' variant='h6'> Claim </Button></div>
            <div className=""><Button className='pb-5' variant='h6'> Terms & Condition </Button></div>
            <div className=""><Button className='pb-5' variant='h6'> Help </Button></div>
            
          </Grid>
      </Grid>
      <Grid className='bg-black text-white text-center '>
        <Typography>© 2024 All rights reserved</Typography>
        <Typography>😊 Thank you for visiting my site. To see more, please visit on my <Button>GitHub</Button> </Typography>
      </Grid>
      
    </div>
  )
}

export default Footer
