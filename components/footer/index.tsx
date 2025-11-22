import React from "react";
import styles from "./styles.module.css";
import Image from "next/image";
import Twitter from "@/svgs/twittter";
import Linkedln from "@/svgs/linkedln";
import Facebook from "@/svgs/facebook";
import Instagram from "@/svgs/instagram";

const Footer = () => {
  return (
    <div className={styles.footer} id="contact">
      <div className={styles.footerContent}>
        <Image src="/assets/logo.png" alt="Logo" width={150} height={50} />
        <div className={styles.links}>
          <p>How it Works</p>
          <p>Features</p>
          <p>Contact Us</p>
        </div>
        <div className={styles.socials}>
          <Twitter />
          <Linkedln />
          <Facebook />
          <Instagram />
        </div>
      </div>
    </div>
  );
};

export default Footer;
