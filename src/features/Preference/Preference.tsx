import { useDispatch, useSelector } from "react-redux";
import styles from "./Preference.module.scss";
import { Link, useNavigate } from "react-router-dom";
import { InputForm } from "../../сomponents/InputForm";
import { setInputAbout, setInputForms, setCheckBox } from "./preferenceSlice";
import { RootState } from "../../app/store";
import { ButtonForm } from "../../сomponents/ButtonForm";
import { CheckBoxForm } from "../../сomponents/Checkbox";
import { Wizard } from "../../сomponents/Wizard";

export const Preference = () => {
  const dispatch = useDispatch();

  const state = useSelector((state: RootState) => state);
  console.log(state);

  const inputAbout = useSelector(
    (state: RootState) => state.preference.inputAbout
  );
  const handleInputAbout =
    (id: number) => (e: React.ChangeEvent<HTMLInputElement>) => {
      dispatch(setInputAbout({ id, value: e.target.value }));
    };

  const inputCheckBox = useSelector(
    (state: RootState) => state.preference.checkbox
  );
  const handleInputCheckBox = (e: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(setCheckBox(e.target.value));
  };
  const inputForms = useSelector(
    (state: RootState) => state.preference.inputForms
  );
  const handleInputFormsClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    // const input = e.target as HTMLInputElement;
    const id = parseInt(Math.random().toString(36), 10);
    dispatch(
      setInputForms([
        {
          label: "",
          type: "",
          value: "",
          name: "",
          placeholder: "",
          error: "",
          id: id,
          disabled: "",
        },
      ])
    );
  };

  const handleInputChange = handleInputAbout;

  const navigate = useNavigate();
  const handleClick = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    navigate("/description");
  };
  return (
    <div className={styles.preference}>
      <Wizard />
      <h3 className={styles.preference__title}>Преимущества</h3>

      <form onSubmit={handleClick}>
        {inputForms.map((inputForm) => {
          const handleInputChange = handleInputAbout(inputForm.id);

        return (
            <InputForm
              id={inputForm.id}
              type="text"
              label={inputForm.label}
              value={inputForm.value}
              name={inputForm.name}
              placeholder={inputForm.placeholder}
              onChange={handleInputChange}
            />
            );
        })}
        <button type="button">delete </button>

        <ButtonForm
          type="button"
          disabled={false}
          onClick={handleInputFormsClick}
        >
          +
        </ButtonForm>
        <div className={styles.preference__checkbox}>
          <h3>CheckBox группа </h3>
          <CheckBoxForm
            type="checkbox"
            label="1"
            value={inputCheckBox}
            name="текст"
            placeholder="Введите Имя"
            onChange={handleInputCheckBox}
          />
          <CheckBoxForm
            type="checkbox"
            label="2"
            value={inputCheckBox}
            name="текст"
            placeholder="Введите Имя"
            onChange={handleInputCheckBox}
          />
          <CheckBoxForm
            type="checkbox"
            label="3"
            value={inputCheckBox}
            name="текст"
            placeholder="Введите Имя"
            onChange={handleInputCheckBox}
          />
        </div>
        <div>
          <h3>Radio Group</h3>
          <CheckBoxForm
            type="radio"
            label="1"
            value={inputCheckBox}
            name="текст"
            placeholder="Введите Имя"
            onChange={handleInputCheckBox}
          />
          <CheckBoxForm
            type="radio"
            label="2"
            value={inputCheckBox}
            name="текст"
            placeholder="Введите Имя"
            onChange={handleInputCheckBox}
          />
          <CheckBoxForm
            type="radio"
            label="3"
            value={inputCheckBox}
            name="текст"
            placeholder="Введите Имя"
            onChange={handleInputCheckBox}
          />
        </div>
        <div className={styles.button__block}>
          <Link to="/stepper">
            <ButtonForm type="button" disabled={false}>
              Назад
            </ButtonForm>
          </Link>
          <ButtonForm type="submit" disabled={false}>
            Далее
          </ButtonForm>
        </div>
      </form>
    </div>
  );
};
