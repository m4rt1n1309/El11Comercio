import React from "react";
import { Header } from "../sections/Header";
import Hero from "../sections/Hero";
import PopularProducts from "../sections/PopularProducts";
import SuperQuality from "../sections/SuperQuality";
import Services from "../sections/Services";
import SpecialOffer from "../sections/SpecialOffer";
import CustomerReviews from "../sections/CustomerReviews";

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
      <section className="padding">
        <SpecialOffer />
      </section>
      <section className="padding">
        <CustomerReviews />
      </section>
    </>
  );
};
