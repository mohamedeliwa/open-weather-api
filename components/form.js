import styles from '../styles/Form.module.scss'

const Form = () => {
  return (
    <form className={styles.form}>
      <input className={styles.input} type="text" placeholder="e.g Poland" />
      <input className={styles.submitBtn} type="submit" value="Find" />
    </form>
  );
};

export default Form;
