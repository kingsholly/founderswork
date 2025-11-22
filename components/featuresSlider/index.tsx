"use client";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import styles from "./styles.module.css";

interface SliderItem {
  badge: {
    icon: string;
    text: string;
  };
  title: string;
  description: string;
  cta: string;
}

interface SwiperMobileSliderProps {
  items: SliderItem[];
  ArrowComponent?: React.ComponentType;
  autoplay?: boolean;
  slidesPerView?: number;
  spaceBetween?: number;
}

const SwiperMobileSlider: React.FC<SwiperMobileSliderProps> = ({
  items,
  ArrowComponent,
  autoplay = false,
  slidesPerView = 1,
  spaceBetween = 20,
}) => {
  return (
    <div className={styles.swiperContainer}>
      <Swiper
        modules={[Pagination, Navigation, Autoplay]}
        spaceBetween={spaceBetween}
        slidesPerView={slidesPerView}
        pagination={{
          clickable: true,
          dynamicBullets: true,
        }}
        navigation={false}
        autoplay={
          autoplay
            ? {
                delay: 3000,
                disableOnInteraction: false,
              }
            : false
        }
        loop={true}
        className={styles.swiper}
      >
        {items.map((item, index) => (
          <SwiperSlide key={index} className={styles.swiperSlide}>
            <div className={styles.featureCard}>
              <div className={styles.badge}>
                <span className={styles.badgeIcon}>{item.badge.icon}</span>
                <span className={styles.badgeText}>{item.badge.text}</span>
              </div>
              <h3 className={styles.featureTitle}>{item.title}</h3>
              <p className={styles.featureDescription}>{item.description}</p>
              <a href="#" className={styles.ctaLink}>
                {item.cta}
                {ArrowComponent && <ArrowComponent />}
              </a>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default SwiperMobileSlider;
