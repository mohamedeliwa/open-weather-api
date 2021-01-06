import styles from "../styles/Form.module.scss";
import { useDispatch } from "react-redux";
import { changeError, changeWeather, changeFetchingData } from "../redux/slice";
import { useState } from "react";

const Form = () => {
  const dispatch = useDispatch();
  // a piece of local data to handle form data changes
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
      // validating the input to be only letters
      if (!/^[a-z]+$/i.test(city)) {
        dispatch(changeWeather({}));
        throw new Error("Enter a valid city name")
      }

      // url end-point with the {API KEY}
      // It's a temporary API KEY, just for task purposes
      const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=XXXXXXX&units=metric`;

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
        placeholder='"e.g London"'
        value={city}
        onChange={handleChange}
        required
      />
      <input className={styles.submitBtn} type="submit" value="Find" />
    </form>
  );
};

export default Form;
