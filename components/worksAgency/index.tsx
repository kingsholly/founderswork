import React from "react";
import styles from "./styles.module.css";
import { workStepsTwo } from "@/utils/data";
import Airplance from "@/svgs/airplane";

const WorksAgency = () => {
  return (
    <div className={styles.container} id="how-it-works">
      <div className={styles.contain}>
        <div className={styles.heroTexts}>
          <div className={styles.heroBtn}>
            <Airplance />
            <p>How it works</p>
          </div>
          <div className={styles.otherTexts}>
            <h2>Run Your Agency in Four Easy Steps</h2>
            <p>
              From client onboarding to payments — everything happens in one
              seamless flow.
            </p>
          </div>
        </div>
        <div className={styles.steps}>
          {workStepsTwo.map((items, index) => {
            return (
              <div key={index} className={styles.step}>
                <div className={styles.circle}>
                  <div className={styles.numbers}>
                    <p>{items.number}</p>
                  </div>
                </div>
                <div className={styles.texts}>
                  <h4>{items.title}</h4>
                  <p>{items.description}</p>
                </div>
              </div>
            );
          })}
        </div>
        <div className={styles.btn}>
          <button>Get Started for Free &rarr;</button>
        </div>
      </div>
    </div>
  );
};

export default WorksAgency;
