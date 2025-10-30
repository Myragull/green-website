"use client";

import { contactInfoItems, contactFormData } from "@/constants";
import { BiMap, BiEnvelope, BiPhoneCall } from "react-icons/bi";
const iconMap = {
  BiMap: BiMap,
  BiEnvelope: BiEnvelope,
  BiPhoneCall: BiPhoneCall,
};

const Contact = () => {
  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("Form submitted (no action configured)");
  };

  return (
    // Section wrapper with global container
    <div className="contact-section container-global">
      {/* 1. Section Header */}
      <div className="contact-header">
        <h2 className="contact-title">Contact</h2>
        <div className="contact-divider">
          <div className="contact-divider-line-left"></div>
          <div className="contact-divider-line-center"></div>
          <div className="contact-divider-line-right"></div>
        </div>
        <p className="contact-subtitle">
          Necessitatibus eius consequatur ex aliquid fuga eum quidem sint
          consectetur velit
        </p>
      </div>

      {/* 2. Main Content Grid */}
      <div className="contact-grid">
        {/* Left Column  */}
        <div className="contact-info-wrap">
          {contactInfoItems.map((item, index) => {
            const IconComponent = iconMap[item.iconName];
            return (
              <div
                key={item.id}
                className="contact-info-item group"
                style={{ animationDelay: `${index * 0.1 + 0.1}s` }}
              >
                {IconComponent ? (
                  <div className="contact-info-icon ">
                    <span className="icon-bg bg-accent/10">
                      <IconComponent />
                    </span>
                  </div>
                ) : null}
                <div>
                  <h3 className="contact-info-title">{item.title}</h3>
                  <p className="contact-info-text">{item.text}</p>
                </div>
              </div>
            );
          })}
          <div className="contact-map">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3024.361281144498!2d-74.00811238459483!3d40.71000677933203!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c25a22a3bda22d%3A0xD1b3a32A6E7199!2sDowntown%20Conference%20Center!5e0!3m2!1sen!2sus!4v1605 Downtown Conference Center"
              frameBorder="0"
              style={{ border: 0, width: "100%", height: "290px" }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Google Maps Location"
            ></iframe>
          </div>
        </div>

        {/* Right Column (Form)*/}
        <form onSubmit={handleSubmit} className="contact-form">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Name Field */}
            <div>
              <label htmlFor="name" className="contact-label">
                Your Name
              </label>
              <input
                type="text"
                name="name"
                id="name"
                className="contact-input"
                required
              />
            </div>

            {/* Email Field (UPDATED) */}
            <div>
              <label htmlFor="email" className="contact-label">
                Your Email
              </label>
              <input
                type="email"
                name="email"
                id="email"
                className="contact-input"
                required
              />
            </div>
          </div>

          {/* Subject Field (UPDATED)*/}
          <div className="mt-6">
            <label htmlFor="subject" className="contact-label">
              Subject
            </label>
            <input
              type="text"
              name="subject"
              id="subject"
              className="contact-input"
              required
            />
          </div>

          {/* Message Field*/}
          <div className="mt-6">
            <label htmlFor="message" className="contact-label">
              Message
            </label>
            <textarea
              name="message"
              id="message"
              rows={12}
              className="contact-textarea"
              required
            ></textarea>
          </div>

          <div className="text-center mt-6">
            <button type="submit" className="contact-submit-btn">
              {contactFormData.buttonText}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Contact;
