import { Outlet } from "react-router";
import Contacts from "./components/contacts/contacts";
import Header from "./components/header";
import ScrollToRoute from "./components/scroll-to-route";
import hashNavigation from "./pages/index/hash-navigation";

import styles from "./layout.module.scss";

export default function PageLayout() {
  return (
    <>
      <ScrollToRoute />
      <Header />
      <main className={styles.content}>
        <Outlet />
        <Contacts className={styles.contacts} id={hashNavigation["contacts"]} />
      </main>
    </>
  );
}
