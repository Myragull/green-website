"use client";

import Link from "next/link";
import { footerData } from "@/constants";
import {
  FaXTwitter,
  FaFacebook,
  FaInstagram,
  FaLinkedin,
} from "react-icons/fa6";

const Footer = () => {
  const { greenColumn, usefulLinks, ourServices, contactUs, copyright } =
    footerData;

  // Map social names to their respective icons
  const socialIcons = {
    Twitter: FaXTwitter,
    Facebook: FaFacebook,
    Instagram: FaInstagram,
    LinkedIn: FaLinkedin,
  };

  return (
    <footer className="footer-section">
      <div className="footer-top container-global">
        <div className="footer-grid">
          {/* --- Column 1: Green --- */}
          <div className="footer-col-green">
            <Link href="/" className="footer-logo">
              {greenColumn.logoText}
            </Link>
            <p className="footer-description">{greenColumn.description}</p>
            <div className="footer-social-links">
              {greenColumn.socials.map((social) => {
                const Icon = socialIcons[social.name];
                return (
                  <Link
                    key={social.name}
                    href={social.href}
                    className="footer-social-link"
                  >
                    <Icon />
                  </Link>
                );
              })}
            </div>
          </div>

          {/* --- Column 2: Useful Links --- */}
          <div className="footer-col-links">
            <h4 className="footer-heading">{usefulLinks.title}</h4>
            <ul>
              {usefulLinks.links.map((link) => (
                <li key={link.name} className="footer-link-item">
                  <Link href={link.href} className="footer-link">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* --- Column 3: Our Services --- */}
          <div className="footer-col-links">
            <h4 className="footer-heading">{ourServices.title}</h4>
            <ul>
              {ourServices.links.map((link) => (
                <li key={link.name} className="footer-link-item">
                  <Link href={link.href} className="footer-link">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* --- Column 4: Contact Us --- */}
          <div className="footer-col-contact">
            <h4 className="footer-heading">{contactUs.title}</h4>
            <p
              className="footer-contact-text"
              dangerouslySetInnerHTML={{ __html: contactUs.address }}
            />
            <p className="footer-contact-text">
              <strong>Phone:</strong> {contactUs.phone}
              <br />
              <strong>Email:</strong> {contactUs.email}
            </p>
          </div>
        </div>
      </div>

      {/* === COPYRIGHT BAR === */}
      <div className="footer-copyright-bar">
        <div className="container-global footer-copyright-content">
          <p dangerouslySetInnerHTML={{ __html: copyright.text }} />
          <p
            className="footer-credits"
            dangerouslySetInnerHTML={{ __html: copyright.credits }}
          />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
