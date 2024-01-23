import React, { useEffect, useState } from 'react';
import { Box, Stack, TextField, Typography, Button} from '@mui/material';
import { exerciseOptions, fetchData } from '../utils/fetchData';

const SearchExercises = () => {
  const [search, setSearch] = useState('')
  const [exercise, setExercise] = useState([])

  const handleSearch = async () => {
    if(search) {
      const exerciseData = await fetchData('https://exercisedb.p.rapidapi.com/exercises', exerciseOptions);

      const searchedExercises = exerciseData.filter(
        (exercise) => exercise.name.toLowerCase().includes(search)
        || exercise.target.toLowerCase().includes(search)
        || exercise.equipment.toLowerCase().includes(search)
        || exercise.bodyPart.toLowerCase().includes(search)
      );

      setSearch('');
      setExercise(searchedExercises);
      
    }
  }

  return (
    <Stack alignIteams='center' mt='37px' justifyContent='center' p='20px'>
      <Typography fontWeight={700} mb='50px' textAlign='center' sx={{ fontSize: { lg: '44px', xs: '30px' } }}>
        Awesome Exercise You <br /> Should Know
      </Typography>
      <Box position='relative' mb='72px' paddingLeft={6}>
        <TextField 
          sx={{ 
            input: {
            fontWeight: '700',
            border: 'none',
            borderRadius: '4px'
            }, 
            width: { lg: '800px', xs: '350px', sm: '450px' },
            backgroundColor: '#fff',
            borderRadius: '40px'
          }} 
        height='76px' value='search' placeholder='Search Exercise' type='text' onChange={(e) => setSearch(e.target.value.toLowerCase())}/>
        <Button
          sx={{
            bgcolor: '#FF2625',
            color: '#FFF',
            textTransform: 'none',
            width: { lg: '175px', xs: '80px' },
            fontSize: { lg: '20px', xs: '14px' },
            height: '56px',
            position: 'absolute',
            right: '0',
          }}
          onClick={handleSearch}
        >
          Search
        </Button>
      </Box>
    </Stack>
  )
}

export default SearchExercises