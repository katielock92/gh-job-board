import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";

import HeaderComponent from "./components/HeaderComponent";
// Imports:
import MainApiProvider from "./contexts/MainApiContext";
import FooterComponent from "./components/FooterComponent";
import JobPage from "./pages/JobPage";
import HomePage from "./pages/HomePage";
import "./styles/fonts.css";
import "./styles/header.css";
import "./styles/footer.css";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <MainApiProvider>
    <BrowserRouter>
      <HeaderComponent />
      <Routes>
        {/* Route for homepage: */}
        <Route path="/" element={<HomePage />} />
        {/* Route for job page based on id: */}
        <Route path="/jobs/:id" element={<JobPage />} />
        {/* Redirects invalid paths back to the homepage: */}
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
      <FooterComponent />
    </BrowserRouter>
  </MainApiProvider>
);
