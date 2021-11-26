import React, { useEffect, useState } from 'react';
import { RootStateOrAny, useDispatch, useSelector } from 'react-redux';
import { getDataFromAPI } from './redux/asyncActions';
import './App.css';
import ExercisesPage from './components/pages/ExercisesPage';
import { Routes, Route } from 'react-router';
import WorkoutPage from './components/pages/WorkoutPage';

function App() {
  const dispatch = useDispatch();
  const state = useSelector((state: RootStateOrAny) => state.data);
  const [questions, setQuestions] = useState([]);

  useEffect(() => {
    dispatch(getDataFromAPI());
  }, [dispatch]);

  useEffect(() => {
    setQuestions(state && state.data.questions);
  }, [state]);

  console.log(state);

  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<ExercisesPage questions={questions} />} />
        <Route path='/workout' element={<WorkoutPage />} />
      </Routes>
    </div>
  );
}

export default App;
