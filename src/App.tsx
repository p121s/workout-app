import React from 'react';
import ExercisesPage from './pages/ExrecisesPage/ExercisesPage';
import { Routes, Route } from 'react-router';
import WorkoutPage from './pages/WorkoutPage/WorkoutPage';
import { AppBlock } from './App.styled';

function App() {

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
