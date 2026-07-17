import placeholderImg from "@/assets/images/placeholder.jpg";
import InfoIntroduction from "./components/info-introduction";

import styles from "./app.module.scss";
import hashNavigation from "./hash-navigation";

function App() {
  return (
    <>
      <InfoIntroduction
        className={styles.info_introduction}
        id={hashNavigation["general"]}
      />
      <img src={placeholderImg} className={styles.info_picture} />
    </>
  );
}

export default App;
