import styles from "./styles.module.css";
import { aboutAgency } from "@/utils/data";

const AboutAgencies = () => {
  return (
    <div className={styles.container}>
      <div className={styles.contain}>
        <h2>Everything Your Agency Needs in One Platform</h2>
        <div className={styles.aboutUs}>
          {aboutAgency.map((items, index) => {
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

export default AboutAgencies;
