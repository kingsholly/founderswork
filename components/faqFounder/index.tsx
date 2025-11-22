import React from "react";
import styles from "./styles.module.css";
import Star from "@/svgs/star";
import Accordion from "../accordion";
import { faqData } from "@/utils/data";

const FaqFounder = () => {
  return (
    <div className={styles.container}>
      <div className={styles.contain}>
        <div className={styles.heroTexts}>
          <div className={styles.heroBtn}>
            <Star />
            <p>FAQs</p>
          </div>
          <h2>We’ve got the answers</h2>
        </div>
        <Accordion items={faqData} defaultOpen={[0]} />
        <p className={styles.contact}>
          Still have more questions? Contact our <span>help center</span>
        </p>
      </div>
    </div>
  );
};

export default FaqFounder;
