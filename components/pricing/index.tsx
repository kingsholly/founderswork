"use client";
import { pricingData } from "@/utils/pricingPlans";
import styles from "./styles.module.css";
import PricingPlan from "@/svgs/pricingPlan";
import Check2 from "@/svgs/check2";

const Pricing = () => {
  return (
    <div className={styles.container}>
      <div className={styles.contain}>
        <div className={styles.heroTexts}>
          <div className={styles.heroBtn}>
            <PricingPlan />
            <p>Pricing</p>
          </div>
          <h2>Pricing Built for Agency Workflows</h2>
          <p>
            From client management to project delivery, get the tools your
            agency needs without paying for what you don’t
          </p>
        </div>
        <div className={styles.pricingContainer}>
          <div className={styles.pricingGrid}>
            {pricingData.map((plan) => (
              <div
                key={plan.id}
                className={`${styles.pricingCard} ${
                  plan.isPopular ? styles.popular : ""
                }`}
              >
                {plan.isPopular && (
                  <div className={styles.popularBadge}>Most popular</div>
                )}

                <div className={styles.cardContent}>
                  <h2 className={styles.planName}>{plan.name}</h2>
                  <p className={styles.planDescription}>{plan.description}</p>

                  <div className={styles.priceSection}>
                    <span className={styles.price}>${plan.price}</span>
                    <span className={styles.period}>/ month</span>
                  </div>

                  <button className={styles.ctaButton}>
                    Get Started for Free &rarr;
                  </button>

                  <ul className={styles.featuresList}>
                    {plan.features.map((feature: string, index: number) => (
                      <li key={index} className={styles.featureItem}>
                        <Check2 />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Pricing;
