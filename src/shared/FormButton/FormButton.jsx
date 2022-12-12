import React from "react";
import styles from "./FormButton.module.css";
const FormButton = ({ text }) => {
  return (
    <div className={styles.input_group}>
      <button type="submit">{text}</button>
    </div>
  );
};

export default FormButton;
