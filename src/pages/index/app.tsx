import placeholderImg from "@/assets/images/placeholder.jpg";
import InfoIntroduction from "./components/info-introduction/info-introduction";

import styles from "./app.module.scss";
import Experience from "./components/experience/experience";
import InfoAbout from "./components/info-about/info-about";
import hashNavigation from "./hash-navigation";

function App() {
  return (
    <>
      <InfoIntroduction
        className={styles.info_introduction}
        id={hashNavigation["general"]}
      />
      <img src={placeholderImg} className={styles.info_picture} />
      <InfoAbout className={styles.about} id={hashNavigation["about"]} />
      <Experience
        className={styles.experience}
        id={hashNavigation["experience"]}
      />
    </>
  );
}

export default App;
