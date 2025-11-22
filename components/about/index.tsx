import React from "react";
import styles from "./styles.module.css";
import { aboutItems } from "@/utils/data";

const AboutFounders = () => {
  return (
    <div className={styles.container}>
      <div className={styles.contain}>
        <h2>Every Founder’s Challenge, Solved in One Platform.</h2>
        <div className={styles.aboutUs}>
          {aboutItems.map((items, index) => {
            return (
              <div key={index} className={styles.aboutItems}>
                {items.icon}
                <div>
                  <h3>{items.header}</h3>
                  <p>{items.text}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default AboutFounders;
