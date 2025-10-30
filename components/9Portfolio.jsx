"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { portfolioFilters, portfolioItems } from "@/constants";

const Portfolio = () => {
  const [activeFilter, setActiveFilter] = useState("All");
  const filteredItems = portfolioItems.filter((item) =>
    activeFilter === "All" ? true : item.category === activeFilter
  );

  return (
    <div className="portfolio-section container-global">
      {/* 1. Section Header */}
      <div className="portfolio-header">
        <h2 className="portfolio-title">Portfolio</h2>

        {/* Divider */}
        <div className="portfolio-divider">
          <div className="portfolio-divider-line-left"></div>
          <div className="portfolio-divider-line-center"></div>
          <div className="portfolio-divider-line-right"></div>
        </div>

        <p className="portfolio-subtitle">
          Necessitatibus eius consequatur ex aliquid fuga eum quidem sint
          consectetur velit
        </p>
      </div>

      {/* 2. Filter Buttons */}
      <ul className="portfolio-filters">
        {portfolioFilters.map((filter) => (
          <li
            key={filter}
            className={`portfolio-filter-item ${
              activeFilter === filter ? "filter-active" : ""
            }`}
            onClick={() => setActiveFilter(filter)}
          >
            {filter}
          </li>
        ))}
      </ul>

      {/* 3. Portfolio Grid */}
      <div className="portfolio-grid">
        {filteredItems.map((item, index) => (
          <div
            key={item.id}
            className="portfolio-item group"
            style={{ animationDelay: `${index * 0.05}s` }}
          >
            {/* Image container with hover effect */}
            <div className="portfolio-image-wrapper">
              <Image
                src={item.image}
                alt={item.title}
                width={500}
                height={400}
                className="portfolio-image"
              />
            </div>

            {/* Info box below the image */}
            <div className="portfolio-info">
              <h4>
                <Link href="#" className="portfolio-info-title">
                  {item.title}
                </Link>
              </h4>
              <p className="portfolio-info-description">{item.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Portfolio;
