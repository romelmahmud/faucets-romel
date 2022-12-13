import React from "react";
import styles from "./TextContent.module.css";
const TextContent = () => {
  return (
    <div className={styles.text_content}>
      <h2>Request testnet LINK</h2>
      <p>
        Get testnet LINK for an account on one of the supported blockchain
        testnets so you can create and test your own oracle and Chainlinked
        smart contract
      </p>
    </div>
  );
};

export default TextContent;
