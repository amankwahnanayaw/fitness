import React, {useEffect, useState} from 'react';
import {useParams} from 'react-router-dom';
import {Box} from '@mui/material';

import { exerciseOptions, fetchData } from '../utils/fetchData';
import Detail from '../components/Detail';
import SimilarExercises from '../components/SimilarExercises';
import ExerciseVideo from '../components/ExerciseVideo';

const ExerciseDetail = () => {
  const [exerciseDetail, setExerciseDetail] = useState({});
  const {id} = useParams();

  useEffect(() => {
    const fetchExerciseData = async () => {
      const exerciseDbUrl = 'http://exercisedb.p.rapidapi.com';
      const youtubeSearchUrl = 'https://youtube-search-and-download.p.rapidapi.com'

      const exerciseDetailData = await fetchData(`${exerciseDbUrl}/exercise/${id}`, exerciseOptions);
      setExerciseDetail(exerciseDetailData);
    }

    fetchExerciseData();
  }, [id]);

  return (
    <Box>
      <Detail exerciseDetail={exerciseDetail}/>
      <ExerciseVideo />
      <SimilarExercises />
    </Box>
  )
}

export default ExerciseDetail