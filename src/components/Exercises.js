import React, { useState, useEffect } from 'react';
import { Pagination } from '@mui/material';
import { Box, Stack, Typography } from '@mui/material';

import { exerciseOptions, fetchData } from '../utils/fetchData';
import ExerciseCard from './ExerciseCard';

const Exercises = ({ exercises, setExercises, bodyPart }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const exercisesPerPage = 9;

  const indexOfLastExercise = currentPage * exercisesPerPage;
  const indexOfFirstExercise = indexOfLastExercise - exercisesPerPage
  const currentExercises = exercises.slice(indexOfFirstExercise, indexOfLastExercise);

  const paginate = (e, value) => {
    setCurrentPage(value);

    window.scrollTo({ top:1800, behavior: 'smooth' })
  }

  useEffect(() => {
    const fetchExercisesData = async () => {
      let exercisesData = [];

      if(bodyPart === 'all') {
        exercisesData = await fetchData('https://exercisedb.p.rapidapi.com/exercises', exerciseOptions);
      } else {
        exercisesData = await fetchData('https://exercisedb.p.rapidapi.com/exercises/bodypart/${bodyPart}', exerciseOptions, exerciseOptions);
      }

      setExercises(exercisesData)
    }

    fetchExercisesData();
  }, [bodyPart]);

  return (
    <Box id="exercises" 
    sx={{ mt: {lg: '110px'} }}
    mt="50px"
    p="20px"
    >
      <Typography variant='h3' mb='46px'>
        Showing Result
      </Typography>
      <Stack direction="row" sx={{ gap: { lg: '110px', xs: '50px' } }} flexwrap="wrap" justifycontent="center">
        { currentExercises.map((exercise, index) => (
            <ExerciseCard key={index} exercise={exercise}/>   
        ))}
      </Stack>
      <Stack>
        {exercises.lenght > 9 && (
          <Pagination 
          color="standard"
          shape="rounded"
          defaultPage={1}
          count={Math.ceil(exercises.lenght / exercisesPerPage)}
          page={currentPage}
          onChange={paginate}
          size="large"
          />
        )}
      </Stack>
    </Box>
  )
}

export default Exercises