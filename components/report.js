import styles from "../styles/Report.module.scss";
import { useSelector } from "react-redux";
import {
  selectWeatherData,
  selectFetchingData,
  selectError,
} from "../redux/slice";
import { Spinner } from "react-bootstrap";
const Report = () => {
  const weather = useSelector(selectWeatherData);
  const fetching = useSelector(selectFetchingData);
  const error = useSelector(selectError);

  const weatherReport = Object.keys(weather).length ? (
    <ul className={styles.list}>
      {/* City Name */}
      <li className={styles.cityName}>{weather.name}</li>
      {/* Weather Icon */}
      <li className={styles.icon}>
        <img
        src={`https://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`}
        />
      </li>
      {/* Weather Parameter */}
      <li className={styles.paramter}>{weather.weather[0].main}</li>
      {/* Main Temperature */}
      <li className={styles.temp}>{weather.main.temp} &deg;</li>
      <li className={styles.temps}>
        {/* Maximum temperature */}
        <span className={styles.maxTemp}>
          {weather.main.temp_max} &deg;{" "}
        </span>{" "}
        {/* Minimum temperature  */}
        <span className={styles.minTemp}>{weather.main.temp_min} &deg;</span>
      </li>
      {/* Weather condition and description */}
      <li className={styles.description}>{weather.weather[0].description}</li>
    </ul>
  ) : null;

  const errorReport = (
    <div className={styles.errorContainer}>
      <p>{error}!</p>
    </div>
  );

  const spinner = (
    <div className={styles.spinnerContainer}>
      <Spinner animation="border" variant="light" />
    </div>
  );

  return fetching ? spinner : error ? errorReport : weatherReport;
};

export default Report;
