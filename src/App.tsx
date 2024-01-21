import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Login } from "./features/Login";
import { Preference } from "./features/Preference";
import styles from "./App.module.scss";
import Stepper from "./features/Stepper/Stepper";

function App() {
  return (
    <BrowserRouter>
      <div className={styles.container}>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/stepper" element={<Stepper />} />
          <Route path="/preference" element={<Preference />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
