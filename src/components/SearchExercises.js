import React, { useEffect, useState } from 'react';
import { Box, Stack, TextField, Typography, Button} from '@mui/material';

const SearchExercises = () => {
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
        height='76px' value='' placeholder='Search Exercise' type='text' onChange={(e) => {}}/>
        <Button
          sx={{
            bgcolor: '#FF2625',
            color: '#FFF',
            textTransform: 'none',
            width: { lg: '175px', xs: '80px' },
            fontSize: { lg: '20px', xs: '14px' },
            height: '56px',
            position: 'absolute',
          }}
        >
          Search
        </Button>
      </Box>
    </Stack>
  )
}

export default SearchExercises