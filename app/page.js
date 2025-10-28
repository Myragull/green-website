"use client";

import About from "@/components/About";
import Portfolio from "@/components/Portfolio";
import Dropdown from "@/components/Dropdown";
import Hero from "@/components/Hero";
import Team from "@/components/Team";
import Services from "@/components/Services";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import Header from "@/components/Header"

export default function Home() {
  return (
    <main className="scroll-smooth ">
      <Header />
      <section id="home">
        <Hero />
      </section>

 <section id="about">
        <About />
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
