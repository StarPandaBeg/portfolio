import { Outlet } from "react-router";
import Header from "./components/header";
import ScrollToRoute from "./components/scroll-to-route";

import styles from "./layout.module.scss";

export default function PageLayout() {
  return (
    <>
      <ScrollToRoute />
      <Header />
      <main className={styles.content}>
        <Outlet />
      </main>
    </>
  );
}
