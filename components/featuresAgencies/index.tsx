import React from "react";
import styles from "./styles.module.css";
import Feature from "@/svgs/features";
import Image from "next/image";
import { platformFeatures } from "@/utils/platformFeature";
import Check2 from "@/svgs/check2";

const FeaturesAgency = () => {
  return (
    <div className={styles.container} id="features">
      <div className={styles.contain}>
        <div className={styles.heroTexts}>
          <div className={styles.heroBtn}>
            <Feature />
            <p>Features</p>
          </div>
          <h2>Built to Simplify How You Work.</h2>
          <p>Automate, collaborate, and deliver with speed and clarity.</p>
        </div>
        <section className={styles.featuresSection}>
          {platformFeatures.map((feature, index) => (
            <div
              key={index}
              className={`${styles.featureRow} ${
                feature.layout === "right" ? styles.reverse : ""
              }`}
            >
              <div className={styles.imageContainer}>
                <Image
                  src={feature.image}
                  alt={feature.imageAlt}
                  width={595}
                  height={378}
                  className={styles.featureImage}
                />
              </div>
              <div className={styles.contentContainer}>
                <h2 className={styles.title}>{feature.title}</h2>
                <p className={styles.description}>{feature.description}</p>
                <ul className={styles.featureList}>
                  {feature.features.map((item, idx) => (
                    <li key={idx} className={styles.featureItem}>
                      <Check2 />
                      {item}
                    </li>
                  ))}
                </ul>
                <a href={feature.ctaLink} className={styles.ctaButton}>
                  {feature.ctaText} &nbsp; &rarr;
                </a>
              </div>
            </div>
          ))}
        </section>
      </div>
    </div>
  );
};

export default FeaturesAgency;
