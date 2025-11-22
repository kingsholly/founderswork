"use client";
import React, { useState } from "react";
import styles from "./styles.module.css";
import { menuItems } from "@/utils/data";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";

const Header = () => {
  const pathname = usePathname();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <>
      <section className={styles.bgContainer}>
        <div className={styles.container}>
          <div className={styles.logoContainer}>
            <div className={styles.logoImg}>
              <Image
                src="/assets/logo.png"
                alt="logo"
                width={107}
                height={32}
              />
            </div>
            <div className={styles.btnContain}>
              <Link
                href="/"
                className={`${styles.founderBtn} ${
                  pathname === "/" ? styles.active2 : ""
                }`}
              >
                For Founders
              </Link>
              <Link
                href="/for-agencies"
                className={`${styles.agenciesBtn} ${
                  pathname === "/for-agencies" ? styles.active2 : ""
                }`}
              >
                For Agencies
              </Link>
            </div>
          </div>

          {/* Hamburger Menu Button */}
          <button
            className={`${styles.hamburger} ${isMenuOpen ? styles.active : ""}`}
            onClick={toggleMenu}
            aria-label="Toggle menu"
          >
            <span></span>
            <span></span>
            <span></span>
          </button>
          {/* Desktop & Mobile Menu */}
          <div
            className={`${styles.menuContainer} ${
              isMenuOpen ? styles.mobileMenuOpen : ""
            }`}
          >
            <div className={styles.menuItems}>
              {menuItems.map((items, index) => {
                return (
                  <div key={index} className={styles.menuItem}>
                    <p>
                      <Link
                        href={items.link}
                        onClick={() => setIsMenuOpen(false)}
                      >
                        {items.title}
                      </Link>
                    </p>
                  </div>
                );
              })}
            </div>

            <div className={styles.menuBtn}>
              <button className={styles.loginBtn}>Login</button>
              <button className={styles.signupBtn}>Sign Up</button>
            </div>
          </div>
        </div>
      </section>
      <div className={styles.otherBtn}>
        <Link
          href="/"
          className={`${styles.otherBtn1} ${
            pathname === "/" ? styles.active : ""
          }`}
        >
          For Founder
        </Link>
        <Link
          href="/for-agencies"
          className={`${styles.otherBtn1} ${
            pathname === "/for-agencies" ? styles.active : ""
          }`}
        >
          For Agencies
        </Link>
      </div>
    </>
  );
};

export default Header;
