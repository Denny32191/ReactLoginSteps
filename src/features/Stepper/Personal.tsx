import styles from "./Personal.module.scss";
import { useState } from "react";
import { Link } from "react-router-dom";
import InputForm from "../../сomponents/Input/InputForm";
import { ChangeEvent } from "react";
import Wizard from "./../../сomponents/Wizard";

const Personal: React.FC = () => {
  return (
    <div className={styles.step__one}>
      <form>
        {/* <InputForm
        />
        <InputForm

        />
        <InputForm

        /> */}
      </form>
    </div>
  );
};
export default Personal;
