"use client";

import Link from "next/link";
import { ctaData } from "@/constants";

const CallToAction = () => {
  return (
    <div className="cta-section">
      <div className="container-global">
        <div className="cta-flex">
          {/* --- Left Column (Text) --- */}
          <div className="cta-content">
            <h3 className="cta-title">{ctaData.title}</h3>
            <p className="cta-description">{ctaData.description}</p>
          </div>

          {/* --- Right Column (Button) --- */}
          <div className="cta-btn-container">
            <Link href={ctaData.buttonLink} className="cta-btn">
              {ctaData.buttonText}
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CallToAction;
