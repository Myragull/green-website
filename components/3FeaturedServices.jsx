"use client";
import { TbActivityHeartbeat } from "react-icons/tb";
import { LiaVectorSquareSolid } from "react-icons/lia";
import { IoCalendarOutline } from "react-icons/io5";
import { BsBroadcast } from "react-icons/bs";
import { featuredServices } from "@/constants";

const iconMap = {
  heartbeat: <TbActivityHeartbeat className="text-[36px] text-[var(--accent-color)]" />,
  vector: <LiaVectorSquareSolid className="text-[36px] text-[var(--accent-color)]" />,
  calendar: <IoCalendarOutline className="text-[36px] text-[var(--accent-color)]" />,
  broadcast: <BsBroadcast className="text-[36px] text-[var(--accent-color)]" />,
};

function FeaturedServices() {
  return (
    <section className="featured-services-section">
      <div className="container-global">
        {/* featured Services grid */}
        <div className="featured-services-grid">
          {featuredServices.map((service, index) => (
            // featured-services-wrapper
            <div
              key={service.id}
              className="featured-services-wrapper"
              style={{
                animationDelay: `${index * 0.2}s`,
                animationFillMode: "forwards",
              }}
            >
              {/* featured-service-card */ }
              <div
                className="featured-service-card p-[50px_30px] text-left transition-all duration-400 hover:-translate-y-[13px]"
              >
                <div className="featured-services-icon">
                  {iconMap[service.icon]}
                </div>
                <h4 className="featured-services-text">
                  <a
                    href="#"
                    className="featured-services-link"
                  >
                    {service.title}
                  </a>
                </h4>
                <p className="featured-services-description ">{service.text}</p>
              </div>
            </div>
          ))}
        </div>
        
      </div>
    </section>
  );
}

export default FeaturedServices;
