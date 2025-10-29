"use client";

import About from "@/components/4About";
import Portfolio from "@/components/Portfolio";
import Dropdown from "@/components/Dropdown";
import Hero from "@/components/2Hero";
import Team from "@/components/Team";
import Services from "@/components/7Services";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import Header from "@/components/1Header";
import FeaturedServices from "@/components/3FeaturedServices";
import WhyUsSection from "@/components/5WhyusSection";
import Clients from "@/components/6Clients";

export default function Home() {
  return (
    <main className="scroll-smooth ">
      <Header />
      <section id="home">
        <Hero />
      </section>

      <section id="featured">
        <FeaturedServices />
      </section>

 <section id="about">
        <About />
      </section>

      <section id="why-us">
        <WhyUsSection />
      </section>

      <section id="clients">
        <Clients />
      </section>

      <section id="services">
        <Services />
      </section>

      <section id="portfolio">
        <Portfolio />
      </section>

       <section id="team">
        <Team />
      </section>

       <section id="dropdown">
        <Dropdown />
      </section>

      <section id="contact">
        <Contact />
      </section> 

      <Footer /> 
    </main>
  );
}
