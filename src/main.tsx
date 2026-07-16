import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router";
import "./index.scss";
import PageLayout from "./layout.tsx";
import App from "./pages/App.tsx";

createRoot(document.getElementById("root")!).render(
  <BrowserRouter>
    <StrictMode>
      <Routes>
        <Route element={<PageLayout />}>
          <Route path="/" element={<App />} />
        </Route>
      </Routes>
    </StrictMode>
  </BrowserRouter>,
);
