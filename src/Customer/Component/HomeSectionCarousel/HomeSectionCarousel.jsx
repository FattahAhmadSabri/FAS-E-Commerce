import React from 'react';
import { useState } from 'react';
import HomeSectionCard from '../HomeSectionCard/HomeSectionCard';
import AliceCarousel from 'react-alice-carousel';
import Button from '@mui/material/Button';
import KeyboardArrowLeftIcon from '@mui/icons-material/KeyboardArrowLeft';



const HomeSectionCarousel = ({data, sectionName}) => {
  const [activeIndex, setActiveIndex] = useState(0)
  const responsive = {
    0: { items: 1 },
    720: { items: 3 },
    1024: { items: 5.5 },
  };

  const slidePrev = () => setActiveIndex(activeIndex - 1)
  const slideNext = () => setActiveIndex(activeIndex + 1)
  const syncActiveIndex = ({item}) => setActiveIndex(item)

  const items = data.slice(0,10).map((item) => <HomeSectionCard product={item} />);
  
  return (
    <div style={{ overflowX: 'hidden' }} className=' relative w-full max-w-full border border-black px-4 lg:px-8'>
         <h2 className='text-2xl font-extrabold text-gray-800 py-5'>{sectionName}</h2>
      <div className='relative p-5'>
        <AliceCarousel
          items={items}
          responsive={responsive}
          disableDotsControls
          onSlideChange={syncActiveIndex}
          activeIndex={activeIndex}
        />
      </div>
      <div className="">
      {activeIndex!==items.length-5 && <Button
        onClick={slideNext}
        variant="contained"
        className='z-50'
        sx={{
          position: 'absolute',
          top: '8rem',
          right: '1rem',
          transform: 'translateX(50%) rotate(90deg)',
          backgroundColor: 'white'
        }}
        aria-label='next'
      >
        
        <KeyboardArrowLeftIcon sx={{ transform: 'rotate(90deg)' }} />
      </Button>}
      {activeIndex!==0 && <Button
        onClick={slidePrev}
        variant="contained"
        className='z-50'
        sx={{
          position: 'absolute',
          top: '8rem',
          left: '1rem',
          transform: 'translateX(-50%) rotate(90deg)',
          backgroundColor: 'white'
        }}
        aria-label='prev'
      >
        <KeyboardArrowLeftIcon sx={{ transform: 'rotate(-90deg)' }} />
      </Button>}
      </div>
      
      
    </div>
  );
};

export default HomeSectionCarousel;
