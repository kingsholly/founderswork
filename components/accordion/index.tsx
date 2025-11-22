"use client";
import React, { useState } from "react";
import styles from "./styles.module.css";
import Open from "@/svgs/open";
import Close from "@/svgs/close";

interface AccordionItem {
  question: string;
  answer: string;
}

interface AccordionProps {
  items: AccordionItem[];
  allowMultiple?: boolean;
  defaultOpen?: number[];
}

const Accordion: React.FC<AccordionProps> = ({
  items,
  allowMultiple = false,
  defaultOpen = [],
}) => {
  const [openIndexes, setOpenIndexes] = useState<number[]>(defaultOpen);

  const toggleItem = (index: number) => {
    if (allowMultiple) {
      setOpenIndexes((prev) =>
        prev.includes(index)
          ? prev.filter((i) => i !== index)
          : [...prev, index]
      );
    } else {
      setOpenIndexes((prev) => (prev.includes(index) ? [] : [index]));
    }
  };

  const isOpen = (index: number) => openIndexes.includes(index);

  return (
    <div className={styles.accordionContainer}>
      {items.map((item, index) => (
        <div
          key={index}
          className={`${styles.accordionItem} ${
            isOpen(index) ? styles.open : ""
          }`}
        >
          <button
            className={styles.accordionHeader}
            onClick={() => toggleItem(index)}
            aria-expanded={isOpen(index)}
          >
            <span className={styles.accordionQuestion}>{item.question}</span>
            {isOpen(index) ? <Open /> : <Close />}
          </button>

          <div className={styles.accordionContent}>
            <p className={styles.accordionAnswer}>{item.answer}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Accordion;
