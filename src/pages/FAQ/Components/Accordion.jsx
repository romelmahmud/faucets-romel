import React, { useState } from "react";
import styles from "./Accordion.module.css";
import { FaAngleDown, FaAngleUp } from "react-icons/fa";

const Accordion = ({ data }) => {
  const [open, setOpen] = useState(false);

  return (
    <div className={styles.accordion}>
      <div className={styles.accordion_qes} onClick={() => setOpen(!open)}>
        <h2>{data.qes}</h2>
        {!open && (
          <span className={styles.arrow_down}>
            <FaAngleDown />
          </span>
        )}

        {open && (
          <span className={styles.arrow_up}>
            <FaAngleUp />
          </span>
        )}
      </div>
      {open && (
        <div className={styles.accordion_ans}>
          <p>{data.answer}</p>
        </div>
      )}
    </div>
  );
};

export default Accordion;
