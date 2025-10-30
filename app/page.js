"use client";

import About from "@/components/4About";
import Portfolio from "@/components/9Portfolio";
import Hero from "@/components/2Hero";
import Team from "@/components/10Team";
import Services from "@/components/7Services";
import Contact from "@/components/11Contact";
import Footer from "@/components/12Footer";
import Header from "@/components/1Header";
import FeaturedServices from "@/components/3FeaturedServices";
import WhyUsSection from "@/components/5WhyusSection";
import Clients from "@/components/6Clients";
import CallToUs from "@/components/8CallToAct";


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

      <section id="call-to-us">
        <CallToUs />
      </section>

      <section id="portfolio">
        <Portfolio />
      </section>

       <section id="team">
        <Team />
      </section>

      <section id="contact">
        <Contact />
      </section> 

      <Footer /> 
    </main>
  );
}
