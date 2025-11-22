import React from "react";
import styles from "./styles.module.css";
import TransformTwo from "@/svgs/transformTwo";
import { steps } from "@/utils/data";
import LongArrow from "@/svgs/longArrow";

const ProductCycle = () => {
  return (
    <div className={styles.container}>
      <div className={styles.contain}>
        <div className={styles.glowBorder}>
          <div className={styles.innerContainer}>
            <div className={styles.titleBadge}>
              <TransformTwo />
              <h2>The Product Journey</h2>
            </div>

            {/* desktop side arrows — keep as-is (hidden on mobile via CSS) */}
            <div className={styles.stepSvg}>
              <LongArrow />
            </div>
            <div className={styles.stepSvgTwo}>
              <LongArrow />
            </div>

            <div className={styles.contentCard}>
              {steps.map((item, index) => (
                <React.Fragment key={index}>
                  <div className={styles.step}>
                    {item.icon}
                    <p>{item.title}</p>
                  </div>
                </React.Fragment>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductCycle;
