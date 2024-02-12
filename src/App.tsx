import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Login } from "./features/Login";
import { Preference } from "./features/Preference";
import styles from "./App.module.scss";
import Stepper from "./features/Stepper/Stepper";
import { Description } from "./features/Description/Description";
import { Modal } from "./features/Modal";
import { useSelector } from "react-redux";

function App() {
  const isOpen = useSelector((state: RootState) => state.modal.isOpen)
  return (
    <BrowserRouter>
      <div className={styles.container}>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/stepper" element={<Stepper />} />
          <Route path="/preference" element={<Preference />} />
          <Route path="/description" element={<Description />} />
        </Routes>
      </div>
      <Modal 
      isOpenModal={false}
      />
    </BrowserRouter>
  );
}

export default App;
