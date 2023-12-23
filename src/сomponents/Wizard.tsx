import styles from "./Wizard.module.scss";
import React from 'react';

function Wizard(props) {
  const { step } = props;
  return (
    <div>
      <div className={styles.header}>
        <div className={styles.steps__loading}>
          <button className={styles.button__one}></button>
          <div className={styles.part__one}></div>
          <button className={styles.button__two} />
          <div className={styles.part__two}></div>
          <button className={styles.button__three}></button>
        </div>
      </div>
      </div>
    
  );
}
export default Wizard;
