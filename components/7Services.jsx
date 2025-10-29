"use client";

import { servicesData } from "@/constants";
import {BiNetworkChart,BiRss, BiArch, BiRectangle, BiWindow,BiChat,} from "react-icons/bi";

const iconMap = {
  BiNetworkChart: BiNetworkChart,
  BiRss: BiRss,
  BiArch: BiArch,
  BiRectangle: BiRectangle,
  BiWindow: BiWindow,
  BiChat: BiChat,
};

const Services = () => {
  return (
    <div className="services-section container-global">
      {/* Section Header */}
      <div className="services-header">
        <h2 className="services-title">Services</h2>
        <div className="services-divider">
          <div className="services-divider-line-left"></div>
          <div className="services-divider-line-center"></div>
          <div className="services-divider-line-right"></div>
        </div>
        <p className="services-subtitle">
          Necessitatibus eius consequatur ex aliquid fuga eum quidem sint
          consectetur velit
        </p>
      </div>

      {/* Services Grid */}
      <div className="services-grid">
        {servicesData.map((service, index) => {
          const IconComponent = iconMap[service.iconName];

          return (
        
            <div
           key={service.id}
            className={`service-item ${service.colorClass} group animate-fadeInUpSoft`}
            style={{ animationDelay: `${index * 0.1}s` }}
          >
            <div className="service-icon-wrapper">
              {IconComponent ? (
                <IconComponent className="service-icon" />
              ) : null}
            </div>

            <h3 className="service-title">
              <a>{service.title}</a>
            </h3>

            <p className="service-description">{service.description}</p>
            
          </div>
          );
        })}
      </div>
    </div>
  );
};

export default Services;
