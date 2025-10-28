"use client";

import { useState, useEffect } from "react";
import { PiEnvelopeLight } from "react-icons/pi";
import { CgSmartphone } from "react-icons/cg";
import { FaXTwitter } from "react-icons/fa6";
import { FaFacebook, FaInstagram, FaLinkedin } from "react-icons/fa";
import { RxHamburgerMenu, RxCross2 } from "react-icons/rx"; 
import { navItems } from "@/constants"; 


function Header() {
  const [activeSection, setActiveSection] = useState("home");
  const [menuOpen, setMenuOpen] = useState(false);

  // Highlight section on scroll
  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll("section[id]");
      let current = "home";
      sections.forEach((section) => {
        const rect = section.getBoundingClientRect();
        if (rect.top <= 150 && rect.bottom >= 150) current = section.id;
      });
      setActiveSection(current);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);


  //  Lock body scroll when menu open
  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "auto";
  }, [menuOpen]);


   //  Auto-close mobile menu when screen >= 1200px
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1200) {
        setMenuOpen(false);
      }
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);


  return (
    <header className="header  ">
      {/* Top bar */}
      <div className="top-bar ">
        <div className="top-bar-content container-global">
          <div className="contact-info ">
            <div className="email ">
              <PiEnvelopeLight className="text-base" />
              <span>contact@example.com</span>
            </div>
            <div className="phone ">
              <CgSmartphone className="text-base" />
              <span>+1 5589 55488 55</span>
            </div>
          </div>
          <div className="social-links">
            <a href="#" className="social-hover"><FaXTwitter /></a>
            <a href="#" className="social-hover"><FaFacebook /></a>
            <a href="#" className="social-hover"><FaInstagram /></a>
            <a href="#" className="social-hover"><FaLinkedin /></a>
          </div>
        </div>
      </div>


      {/* Navbar */}
      <div className="nav-bar">
        <div className="nav-bar-content ">
          {/* Logo */}
          <h1 className="logo">GREEN</h1>

          {/* Hamburger button */}
          {!menuOpen && (
          <button
            className=" hamburger-btn "
            onClick={() => setMenuOpen(true)}
          >
            <RxHamburgerMenu />
          </button>
          )}

          {/* Desktop Menu */}
          <nav className="desktop-nav">
            <ul className="desktop-ul">
              {navItems.map((item) => (
                <li key={item.id}>
                  <a
                    href={`#${item.id}`}
                    className={`transition duration-300 ${
                      activeSection === item.id
                        ? "text-[#5CB874]"
                        : "text-[#555555] hover:text-[#5CB874]"
                    }`}
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </div>

      {/* ✅ Mobile Menu Overlay */}
      {menuOpen && (
        <div className="mobile-menu-overlay"></div>
      )}

      {/* ✅ Mobile Menu Panel */}
      <div
       className={`mobile-menu-panel ${
    menuOpen ? "translate-y-0 opacity-100" : "translate-y-full opacity-0"
  }`}
      >
        {/* Close button */}
        <button
          className="close-btn"
          onClick={() => setMenuOpen(false)}
        >
          <RxCross2 />
        </button>

        {/* Nav Links */}
        <ul className="nav-links">
          {navItems.map((item) => (
            <li key={item.id}>
              <a
                href={`#${item.id}`}
                onClick={() => setMenuOpen(false)} // close menu on click
                className={`block transition duration-300 ${
                  activeSection === item.id
                    ? "text-[#5CB874]"
                    : "text-[#333] hover:text-[#5CB874]"
                }`}
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </header>
  );
}

export default Header;

