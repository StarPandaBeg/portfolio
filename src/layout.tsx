import { Outlet } from "react-router";
import Header from "./components/header";

export default function PageLayout() {
  return (
    <>
      <Header />
      <main>
        <Outlet />
      </main>
    </>
  );
}
