"use client";

import React, { useRef, useState } from "react";
import styles from "./styles.module.css";
import Feature from "@/svgs/features";
import { featuresData } from "@/utils/data";
import Arrow from "@/svgs/arrow";

const Features = () => {
  const sliderRef = useRef<HTMLDivElement | null>(null);
  const [activeIndex, setActiveIndex] = useState(0);

  // Track manual scrolling (mobile only)
  const handleScroll = (e: React.UIEvent<HTMLDivElement>) => {
    const container = e.currentTarget;
    const cardWidth = container.offsetWidth * 1; // Matches CSS

    const index = Math.round(container.scrollLeft / cardWidth);
    setActiveIndex(index);
  };

  return (
    <div className={styles.container} id="features">
      <div className={styles.contain}>
        {/* HEADINGS */}
        <div className={styles.headings}>
          <div className={styles.heroBtn}>
            <Feature />
            <p>Features</p>
          </div>
          <h2>Everything You Need to Build Bold Ideas</h2>
        </div>

        {/* SLIDER */}
        <div
          className={styles.featuresGrid}
          ref={sliderRef}
          onScroll={handleScroll}
        >
          {featuresData.map((feature, index) => (
            <div className={styles.featureCard} key={index}>
              <div className={styles.badge}>
                <span className={styles.badgeIcon}>{feature.badge.icon}</span>
                <span className={styles.badgeText}>{feature.badge.text}</span>
              </div>

              <h3 className={styles.featureTitle}>{feature.title}</h3>
              <p className={styles.featureDescription}>{feature.description}</p>

              <a href="#" className={styles.ctaLink}>
                {feature.cta}
                <Arrow />
              </a>
            </div>
          ))}
        </div>

        {/* DOT NAVIGATION */}
        <div className={styles.dotsContainer}>
          {featuresData.map((_, i) => (
            <span
              key={i}
              className={`${styles.dot} ${
                activeIndex === i ? styles.activeDot : ""
              }`}
            ></span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Features;
