import React from "react";
import { FaExclamationTriangle } from "react-icons/fa";
import ReCAPTCHA from "react-google-recaptcha";

import styles from "./FormContent.module.css";

const FormContent = () => {
  return (
    <div className={styles.form_container}>
      <div className={styles.form_alert}>
        <FaExclamationTriangle />
        <p className={styles.form_alert_text}>
          Your wallet is connected to <span>Ethereum Kovan</span>, so you are
          requesting <span>Ethereum Kovan</span> Link/ETH.
        </p>
      </div>
      <div className={styles.wallet_form}>
        <form>
          <div className={`${styles.wallet_address} ${styles.form_group}`}>
            <div>
              <label htmlFor="wallet">Wallet Address</label>
            </div>
            <div className={styles.input_flex}>
              <input
                type="text"
                placeholder="Wallet Address..."
                name="wallet_address"
                className={styles.input_field}
              />
            </div>
          </div>
          <div className={styles.rqs_type}>
            <label htmlFor="wallet">Request Type</label>
            <div className={styles.double_input_fields}>
              <div
                className={`${styles.form_group} ${styles.rst_type_input} ${styles.input_flex}`}
              >
                <input
                  type="text"
                  placeholder="Test link"
                  name="test_link"
                  disabled=""
                  className={styles.input_field}
                  value="20 Test Link"
                />
              </div>
              <div className={`${styles.form_group} ${styles.input_flex}`}>
                <input
                  type="text"
                  placeholder="ETH"
                  name="eth"
                  disabled=""
                  className={styles.input_field}
                  value="0.5 ETH"
                />
              </div>
            </div>
          </div>
          <div className={styles.recaptcha_form}>
            <ReCAPTCHA sitekey={process.env.REACT_APP_SITE_KEY} />
          </div>
        </form>
      </div>
    </div>
  );
};

export default FormContent;
