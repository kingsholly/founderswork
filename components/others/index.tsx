import React from "react";
import styles from "./styles.module.css";
import Image from "next/image";
import Consultant from "@/svgs/consultant";
import Arrow from "@/svgs/arrow";

const Others = () => {
  return (
    <div className={styles.container}>
      <div className={styles.contain}>
        <div className={styles.colOne}>
          <Image
            src="/assets/launch.png"
            width={500}
            height={500}
            alt="launch"
          />
        </div>
        <div className={styles.colTwo}>
          <Image
            src="/assets/people.png"
            width={500}
            height={500}
            alt="people"
          />
          <h2>
            We have helped 50+ founders launch validated products using
            AI-driven PRDs
          </h2>
          <div className={styles.ctaButton}>
            <button className={styles.ctaOne}>
              <Consultant />
              Try the AI Consultant
            </button>
            <button className={styles.ctaTwo}>
              Get Started for Free <Arrow />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Others;
