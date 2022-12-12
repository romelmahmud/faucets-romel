import React from "react";
import styles from "./InputField.module.css";
import { FaEyeSlash } from "react-icons/fa";

const InputField = ({ type }) => {
  return (
    <div className={styles.input_group}>
      <label className={styles.label} htmlFor={type}>
        {type}
      </label>
      <input
        className={styles.input}
        type={type}
        name={type}
        placeholder={`Enter your ${type}`}
      />
      {
        type === 'password' && <span className={styles.eye_slash}>
        <FaEyeSlash />
      </span>
      }
    </div>
  );
};

export default InputField;
