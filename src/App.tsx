import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import  { Login } from './features/Login';
import Persona from './сomponents/Persona';
import StepThree from './сomponents/StepThree'
import styles from './App.module.scss'



function App() {
  return (
 
      <BrowserRouter>
        <div className={styles.container}>
          <Routes>
            <Route path="/" element={<Login />} />
            <Route path="/second" element={<Persona/>}/>
            <Route path="/three" element={<StepThree/>}/>
          </Routes>
        </div>
      </BrowserRouter>
  );
}

export default App;