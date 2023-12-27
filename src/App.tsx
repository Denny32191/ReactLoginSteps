import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import { Login } from "./features/Login";
import Personal from "./features/Personal/Personal";
import Preference from "./features/Preference/Preference";
import styles from "./App.module.scss";

function App() {
  return (
    <BrowserRouter>
      <div className={styles.container}>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/second" element={<Personal />} />
          <Route path="/three" element={<Preference />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
