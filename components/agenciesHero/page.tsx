import React from "react";
import styles from "./styles.module.css";
import Thunder from "@/svgs/thunder";
import Image from "next/image";

const AgencyHero = () => {
  return (
    <div className={styles.container}>
      <div className={styles.contain}>
        <div className={styles.textContain}>
          <div className={styles.heroBtn}>
            <Thunder />
            <p>Everything Your Agency Needs, Centralized.</p>
          </div>
          <h1>Manage Clients, Projects, & Payments in One Platform</h1>
          <p>
            Run your development agency with built-in project management, client
            workspaces, and automated PRD generation for every project
          </p>

          <div className={styles.ctaButton}>
            <button className={styles.ctaOne}>
              Get Started for Free &rarr;
            </button>
            <button className={styles.ctaTwo}>See How it Works</button>
          </div>
        </div>
        <div className={styles.imageContain}>
          <Image
            src="/assets/agencyHero.png"
            alt="agency hero"
            width={600}
            height={400}
          />
        </div>
      </div>
    </div>
  );
};

export default AgencyHero;
