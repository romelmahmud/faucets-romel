import React from "react";
import { Container } from "react-bootstrap";
import { Link } from "react-router-dom";
import UserProfile from "./Components/UserProfile/UserProfile";
import styles from "./Header.module.css";

const Header = () => {
  return (
    <header className={styles.header_wrapper}>
      <Container>
        <div className={styles.header_content_container}>
          <div className={styles.header_logo_container}>
            <Link to="/">
              <p className={styles.header_logo}>Faucets</p>
            </Link>
          </div>
          <div className={styles.header_right_content}>
            <div className={styles.network_button_container}>
              <div className={styles.network_lists_select}></div>
              <div className={styles.connect_wallet_button}></div>
            </div>
            <div className={styles.user_icon_container}>
              <UserProfile />
            </div>
          </div>
        </div>
      </Container>
    </header>
  );
};

export default Header;
