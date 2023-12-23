import styles from './InputWithButtons.module.scss'
import { Link } from 'react-router-dom'
import Wizard from './Wizard'
function InputsWithButtons () {
    return (
        <div>
      <div className={styles.input__block}>
        <ul className={styles.input__list}>
          <li className={styles.input__item}>
            <p>Никнейм</p>
            <input type="text" className={styles.input}/>
            <span></span>
          </li>
          <li className={styles.input__item}>
            <p>Имя</p>
            <input type="text" className={styles.input}/>
            <span></span>
          </li>
          <li className={styles.input__item}>
            <p>Фамилия</p>
            <input type="text" className={styles.input}/>
            <span></span>
          </li>
          <li className={styles.input__item}>
            <p>Пол</p>
            <input type="text" className={styles.input}/>
            <span></span>
          </li>
        </ul>
      </div>
      <div className={styles.block__button}>
      <Link to="/">
        <button className={styles.button__back}>Назад</button>
        </Link>
        <Link to="/three">
        <button className={styles.button__next}>Далее</button>
        </Link>
      </div>
        </div>
    )
}
export default InputsWithButtons