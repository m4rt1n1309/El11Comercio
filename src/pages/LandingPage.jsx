import React from "react";
import { Header } from "../sections/Header";
import Hero from "../sections/Hero";
import PopularProducts from "../sections/PopularProducts";
import SuperQuality from "../sections/SuperQuality";
import Services from "../sections/Services";

export const LandingPage = () => {
  return (
    <>
      <Hero />
      <section className="padding">
        <PopularProducts />
      </section>
      <section className="padding">
        <SuperQuality />
      </section>
      <section className="padding">
        <Services />
      </section>
    </>
  );
};
