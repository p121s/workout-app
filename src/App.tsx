import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { getDataFromAPI } from './store/asyncActions';
import ExercisesPage from './pages/ExrecisesPage/ExercisesPage';
import { Routes, Route } from 'react-router';
import WorkoutPage from './pages/WorkoutPage/WorkoutPage';
import { AppBlock } from './App.styled';

function App() {
  const dispatch = useDispatch();
  
  useEffect(() => {
    dispatch(getDataFromAPI());
  }, [dispatch]);

  return (
    <AppBlock>
      <Routes>
        <Route path='/' element={<ExercisesPage />} />
        <Route path='/workout' element={<WorkoutPage />} />
      </Routes>
    </AppBlock>
  );
}

export default App;
