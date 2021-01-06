import Head from "next/head";
import Form from "../components/form";
import Report from "../components/report";
import styles from "../styles/Home.module.scss";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Open Weather API</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        {/* Headers */}
        <h1 className={styles.header}>Just Type The City's Name</h1>
        <p className={styles.info}>You Must Spell Correctly</p>
        {/* Form to input location */}
        <Form />
        {/* Report to show to the user */}
        <Report />
      </main>
    </div>
  );
}
