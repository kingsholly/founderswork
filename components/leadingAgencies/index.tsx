"use client";
import styles from "./styles.module.css";
import Image from "next/image";
import { leadAgencies } from "@/utils/data";

const LeadingAgencies = () => {
  // Duplicate images for infinite loop
  const images = [...leadAgencies, ...leadAgencies];

  return (
    <div className={styles.container}>
      <div className={styles.contain}>
        <h6>Trusted by leading agencies worldwide</h6>
        <div className={styles.marquee}>
          <div className={styles.track}>
            {images.map((item, index) => (
              <Image
                key={index}
                src={item.image}
                alt="logo"
                width={195}
                height={64}
                className={styles.logo}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default LeadingAgencies;
