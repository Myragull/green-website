"use client";

import Image from "next/image";
import Link from "next/link";
import { teamData } from "@/constants";

// --- 1. ICONS IMPORTED DIRECTLY HERE ---
import { FaXTwitter } from "react-icons/fa6";
import { FaFacebook, FaInstagram, FaLinkedin } from "react-icons/fa";

// --- 2. A "lookup map" to connect string names to imported icons ---
const socialIconMap = {
  FaTwitter: FaXTwitter,
  FaFacebookF: FaFacebook,
  FaInstagram: FaInstagram,
  FaLinkedinIn: FaLinkedin,
};

const Team = () => {
  return (
    // Section wrapper with light green background
    <div className="team-section">
      {/* Global container for padding */}
      <div className="container-global">
        
        {/* 1. Section Header */}
        <div className="team-header">
          <h2 className="team-title">Team</h2>
          
          {/* Divider (same as other sections) */}
          <div className="team-divider">
            <div className="team-divider-line-left"></div>
            <div className="team-divider-line-center"></div>
            <div className="team-divider-line-right"></div>
          </div>
          
          <p className="team-subtitle">
            Necessitatibus eius consequatur ex aliquid fuga eum quidem sint consectetur velit
          </p>
        </div>

        {/* 2. Team Grid */}
        <div className="team-grid">
          {teamData.map((member, index) => {
            return (
              <div
                key={member.id}
                className="team-member"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {/* Image (no padding) */}
                <Image
                  src={member.imageSrc}
                  alt={member.name}
                  width={400}
                  height={400}
                  className="team-member-image"
                />
                
                {/* Content (with padding) */}
                <div className="team-member-content">
                  <h4 className="team-member-name">{member.name}</h4>
                  <span className="team-member-role">{member.role}</span>
                  <p className="team-member-description">{member.description}</p>
                  
                  {/* Social Links */}
                  <div className="team-member-socials">
                    {member.socials.map((social) => {
                      const IconComponent = socialIconMap[social.iconName];
                      return (
                        <Link key={social.name} href={social.href} className="team-social-link">
                          {IconComponent ? (
                            <IconComponent className="team-social-icon" />
                          ) : null}
                        </Link>
                      );
                    })}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Team;