import React from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import { LandingPage} from "../pages/LandingPage";
import {AboutPage} from "../pages/AboutPage";
import {ContactPage} from "../pages/ContactPage";

export const AppRouter = () => {
  return (
    <Routes>
      <>
        <Route
          path="/"
          element={<LandingPage />}
        />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/*" element={<Navigate to="/" />} />
      </>
    </Routes>
  );
};
