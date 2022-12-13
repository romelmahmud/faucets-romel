import React from "react";
import { Container } from "../../shared";
import styles from "./FAQ.module.css";
import faqData from "./data/faqData";
import Accordion from "./Components/Accordion";

const FAQ = () => {
  return (
    <div>
      <Container>
        <div className={styles.faq_content}>
          <div className={styles.faq_title}>
            <h2>Frequently asked questions</h2>
          </div>
          <div className={styles.faq_accordion_container}>
            {faqData.map((faq) => (
              <Accordion key={faq.id} data={faq} />
            ))}
          </div>
        </div>
      </Container>
    </div>
  );
};

export default FAQ;
