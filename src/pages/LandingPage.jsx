import React from "react";
import { Header } from "../sections/Header";
import Hero from "../sections/Hero";
import PopularProducts from "../sections/PopularProducts";

export const LandingPage = () => {
  return (
    <>
      <Hero />
      <section className="padding">
        <PopularProducts />
      </section>
    </>
  );
};
