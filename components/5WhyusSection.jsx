"use client";

import { whyUsData } from "@/constants";

const WhyUs = () => {
  return (
    <div className="why-us-section container-global">
      <div className="why-us-grid">
        {whyUsData.map((item) => (
          <div key={item.id} className="why-us-item">
            <span className="why-us-number">{item.id}</span>
            <h3 className="why-us-title">{item.title}</h3>
            <p className="why-us-description">{item.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default WhyUs;
