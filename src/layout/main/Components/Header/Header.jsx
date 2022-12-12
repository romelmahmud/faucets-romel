import React, { useState } from "react";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import UserProfile from "./Components/UserProfile/UserProfile";
import { FaWallet } from "react-icons/fa";
import styles from "./Header.module.css";
import WalletModal from "./Components/WalletModal/WalletModal";
import { Container } from "../../../../shared";

const Header = () => {
  const [modalShow, setModalShow] = useState(false);

  return (
    <header className={styles.header_wrapper}>
      <Container>
        <div className={styles.header_content_container}>
          <div className={styles.header_logo_container}>
            <Link to="/">
              <h2 className={styles.header_logo}>Faucets</h2>
            </Link>
          </div>
          <div className={styles.header_right_content}>
            <div className={styles.network_button_container}>
              <div className={styles.network_lists_select}></div>
              <div className={styles.connect_wallet_button}>
                <FaWallet
                  className={styles.wallet_icon}
                  onClick={() => setModalShow(true)}
                />
                <Button
                  className={styles.wallet_button}
                  onClick={() => setModalShow(true)}
                >
                  <FaWallet /> <span>Connect Wallet</span>
                </Button>

                <WalletModal
                  show={modalShow}
                  onHide={() => setModalShow(false)}
                />
              </div>
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
