import React from "react";
import styles from "./FormFooter.module.css";
import { Link } from "react-router-dom";
import { FaGoogle, FaFacebook, FaInstagram } from "react-icons/fa";

const FormFooter = ({ text, linkText, route }) => {
  return (
    <div className={styles.form_footer}>
      <p>
        {text}{" "}
        <Link to={`/${route}`} className={styles.sign_up}>
          {linkText}
        </Link>{" "}
      </p>
      <div className={styles.social_login}>
        <p>Or</p>
        <div className={styles.social_login_icons}>
          <FaGoogle />
          <FaFacebook />
          <FaInstagram />
        </div>
      </div>
    </div>
  );
};

export default FormFooter;
