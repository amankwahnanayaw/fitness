import React, { useState } from 'react';
import { Box } from '@mui/material';



const Home = () => {
  return (
    <Box>
        <HeroBanner />
        <SearchExercise />
        <Exercises />
    </Box>
  )
}

export default Home