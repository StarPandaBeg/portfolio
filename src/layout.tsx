import { Outlet } from "react-router";
import Header from "./components/header";

import styles from "./layout.module.scss";

export default function PageLayout() {
  return (
    <>
      <Header />
      <main className={styles.content}>
        <Outlet />
      </main>
    </>
  );
}
