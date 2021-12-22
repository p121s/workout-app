import React from 'react';
import ExercisesPage from './pages/ExrecisesPage/ExercisesPage';
import { Routes, Route } from 'react-router';
import WorkoutPage from './pages/WorkoutPage/WorkoutPage';
import { AppBlock } from './App.styled';
import Theme from './theme/Theme';

function App() {

  return (
      <Theme>
          <AppBlock>
              <Routes>
                  <Route path='/' element={<ExercisesPage />} />
                  <Route path='/workout' element={<WorkoutPage />} />
              </Routes>
          </AppBlock>
      </Theme>
  );
}

export default App;
