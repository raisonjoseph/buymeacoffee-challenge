import React from "react";
import Features from "../../components/Feature";
import Footer from "../../components/Footer";
import Hero from "../../components/Hero";
import Testimonials from "../../components/Testimonials";

type Props = {};

const Home = (props: Props) => {
  return (
    <React.Fragment>
      <Hero />
      <Features />
      <Testimonials />
      <Footer />
    </React.Fragment>
  );
};

export default Home;
