import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { getDataFromAPI } from './redux/asyncActions';
import ExercisesPage from './components/pages/ExrecisesPage/ExercisesPage';
import { Routes, Route } from 'react-router';
import WorkoutPage from './components/pages/WorkoutPage/WorkoutPage';
import './App.css';

function App() {
  const dispatch = useDispatch();
  
  useEffect(() => {
    dispatch(getDataFromAPI());
  }, [dispatch]);

  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<ExercisesPage />} />
        <Route path='/workout' element={<WorkoutPage />} />
      </Routes>
    </div>
  );
}

export default App;
