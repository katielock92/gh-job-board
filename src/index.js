import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import reportWebVitals from "./reportWebVitals";

import HeaderComponent from "./components/HeaderComponent";
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
        {/* Redirects invalid paths to the homepage: */}
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
      <FooterComponent />
    </BrowserRouter>
  </MainApiProvider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
