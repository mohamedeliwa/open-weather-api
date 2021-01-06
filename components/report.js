import styles from "../styles/Report.module.scss";

const Report = () => {
  return (
    <ul className={styles.list}>
      {/* City Name */}
      <li className={styles.cityName}>Polan, US</li>
      {/* Weather Icon */}
      <li className={styles.icon}>
        <img src="https://openweathermap.org/img/wn/01d@2x.png" />
      </li>
      {/* Weather Parameter */}
      <li className={styles.paramter}>Clear</li>
      {/* Main Temperature */}
      <li className={styles.temp}>-4.76 &deg;</li>
      <li className={styles.temps}>
        {/* Maximum temperature */}
        <span className={styles.maxTemp}>-5.85 &deg; </span>{" "}
        {/* Minimum temperature  */}
        <span className={styles.minTemp}>-3.29 &deg;</span>
      </li>
      {/* Weather condition and description */}
      <li className={styles.description}>clear sky</li>
    </ul>
  );
};

export default Report;
