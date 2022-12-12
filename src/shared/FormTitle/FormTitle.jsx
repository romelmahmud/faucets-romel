import React from "react";
import styles from "./FormTitle.module.css";
const FormTitle = ({ title }) => {
  return (
    <div className={styles.form_title}>
      <h2>{title}</h2>
    </div>
  );
};

export default FormTitle;
