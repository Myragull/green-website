"use client";

import Image from "next/image";
import { aboutData } from "@/constants";
import { IoCheckmarkDoneOutline } from "react-icons/io5";

const About = () => {
  return (
    <div className="about-section container-global">
      {/* === Section Header === */}
      <div className="about-header ">
        <h2 className="about-title">About Us</h2>

        <div className="about-divider">
          <div className="about-divider-line-left "></div>
          <div className="about-divider-line-center"></div>
          <div className="about-divider-line-right"></div>
        </div>

        <p className="about-subtitle">{aboutData.preTitle}</p>
      </div>

      {/* === Main Content Grid === */}
      <div className="about-content-grid">
        {/* === Left Column: Image === */}
        <div className="about-image-wrapper">
          <Image
            src="/about.jpg"
            alt="Our team working in the office"
            fill
            className="about-image"
            sizes="(max-width: 1000px) 100vw, 50vw"
          />
        </div>

        {/* === Right Column: Content === */}
        <div className="about-content">
          <h3 className="about-heading">{aboutData.title}</h3>

          <p className="about-intro">{aboutData.introParagraph}</p>

          <ul className="about-list">
            {aboutData.listItems.map((item, index) => (
              <li key={index} className="about-list-item">
                <IoCheckmarkDoneOutline
                  className="about-icon"
                  aria-hidden="true"
                />
                <span className="about-list-text ">{item}</span>
              </li>
            ))}
          </ul>

          <p className="about-conclusion">{aboutData.concludingParagraph}</p>
        </div>
      </div>
    </div>
  );
};

export default About;
