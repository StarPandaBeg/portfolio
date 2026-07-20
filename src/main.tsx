import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router";
import PageLayout from "./layout.tsx";
import App from "./pages/index/app.tsx";
import NewsPage from "./pages/news/news.tsx";
import ProjectDetailsPage from "./pages/projects/project-details.tsx";
import ProjectsPage from "./pages/projects/projects.tsx";

import "./index.scss";

createRoot(document.getElementById("root")!).render(
  <BrowserRouter basename={import.meta.env.BASE_URL}>
    <StrictMode>
      <Routes>
        <Route element={<PageLayout />}>
          <Route path="/" element={<App />} />
          <Route path="/projects" element={<ProjectsPage />} />
          <Route path="/projects/:slug" element={<ProjectDetailsPage />} />
          <Route path="/news/:slug" element={<NewsPage />} />
        </Route>
      </Routes>
    </StrictMode>
  </BrowserRouter>,
);
