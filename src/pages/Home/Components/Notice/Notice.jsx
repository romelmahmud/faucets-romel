import React from "react";
import { Container } from "../../../../shared";
import styles from "./Notice.module.css";

const Notice = () => {
  return (
    <div className={styles.notice_wrapper}>
      <Container>
        <div className={styles.notice_text}>
          <p>Notice Here</p>
        </div>
      </Container>
    </div>
  );
};

export default Notice;
