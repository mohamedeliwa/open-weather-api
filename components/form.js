import styles from "../styles/Form.module.scss";
import { useDispatch } from "react-redux";
import { changeError, changeWeather, changeFetchingData } from "../redux/slice";
import { useState } from "react";

const Form = () => {
  const dispatch = useDispatch();
  const [city, setCity] = useState("");

  // handling user input
  const handleChange = (e) => {
    e.preventDefault();
    setCity(e.target.value);
  };
  
  // submitting the form and fetching weather data
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      dispatch(changeFetchingData(true));
      const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=24e9e140b52290917fe9128d99c60409&units=metric`;
      // const url = "https://api.mocki.io/v1/cdf184843";

      const res = await fetch(url);

      if (res.status == 200) {
        dispatch(changeFetchingData(false));
        // removing previous error message if any
        dispatch(changeError(""));
        const resJSON = await res.json();
        // dispatching fetched weather data
        dispatch(changeWeather(await resJSON));
      } else {
        const resJSON = await res.json();
        throw new Error(resJSON.message);
      }
    } catch (e) {
      // response already fetched
      dispatch(changeFetchingData(false));
      // dispatching error messages
      dispatch(changeError(e.message));
    }
  };
  return (
    <form className={styles.form} onSubmit={handleSubmit}>
      <input
        className={styles.input}
        type="text"
        placeholder="e.g Poland"
        value={city}
        onChange={handleChange}
      />
      <input className={styles.submitBtn} type="submit" value="Find" />
    </form>
  );
};

export default Form;
