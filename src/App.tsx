import React from 'react';
import './App.css';
import { Routes, Route } from 'react-router-dom';
import Form from './component/Form';
import AsteroidByID from './component/AsteroidByID';
import RandomAsteroids from './component/RandomAsteroids';


const App : React.FC = () => {
  return (
    <div>
      <Routes>
        <Route path='/form' element={<Form />} />
        <Route path='/asteroid/:id' element={<AsteroidByID />} />
        <Route path='/random' element={<RandomAsteroids />} />
        <Route path='*' element={<Form />} />
      </Routes>
    </div>
  );
}

export default App;