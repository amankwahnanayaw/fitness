import React from 'react';
import { Box, Stack, Typography, Button } from '@mui/material';

import HeroBannerImage from '../assets/images/banner.png';

const HeroBanner = () => {
  return (
    <Box position="relative" p="20px" sx={{ mt: { lg: '212px', xs: '70px' }, ml: { sm: '50px' } }}>
        <Typography color="#FF2625" fontWeight="600" fontSize="26px">
            Fitness Club
        </Typography>
        <Typography fontWeight="700" mb="30px" mt="30px" sx={{ fontSize: { lg: '44px', xs: '40px' } }}>
          Sweat, Smile <br /> and Repeat
        </Typography>
        <Typography fontSize="22px" lineHeight="35px" mb={4}>
          Check out the most effective exercises
        </Typography>
        <Typography fontWeight={600} color="#FF2625" fontSize="200px" sx={{ opacity: '0.1', display: { lg: 'block', xs: 'none' } }}>
          Exercise
        </Typography>
        <Button variant='contained' color='error' href='#exercises' sx={{ backgroundColor: '#FF2625', padding: '13px' }} >Explore Exercise</Button>
        <img src={HeroBannerImage} alt='banner' className='hero-banner-img'/>
    </Box>
  )
}

export default HeroBanner