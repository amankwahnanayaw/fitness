import React, { useState, useEffect } from 'react';
import { Pagination } from '@mui/material/Pagination';
import { Box, Stack, Typography } from '@mui/material';

import { exerciseOptions, fetchData } from '../utils/fetchData';
import ExerciseCard from './ExerciseCard';

const Exercises = ({ exercises, setExercises, bodypart }) => {
  console.log(exercises);
  return (
    <Box id="exercises" 
    sx={{ mt: {lg: '110px'} }}
    mt="50px"
    p="20px"
    >
      <Typography variant='h3' mb='46px'>
        Showing Result
      </Typography>
      <stack direction="row" sx={{ gap: { lg: '110px', xs: '50px' } }} flexwrap="wrap" justifycontent="center">
        { exercises.map((exercise, index) => (
            <p>{exercise.name}</p>   
        ))}
      </stack>
    </Box>
  )
}

export default Exercises