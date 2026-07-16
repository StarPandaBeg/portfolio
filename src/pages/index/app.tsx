import InfoIntroduction from "./components/info-introduction";

import styles from "./app.module.scss";

function App() {
  return (
    <>
      <InfoIntroduction className={styles.info_introduction} />
      <div className={styles.info_picture}></div>
    </>
  );
}

export default App;
