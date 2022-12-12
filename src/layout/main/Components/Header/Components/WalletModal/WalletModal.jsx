import React from "react";
import Modal from "react-bootstrap/Modal";
import styles from "./WalletModal.module.css";
import MetaMask from "../../../../../../assets/MetaMask.svg";
import WalletConnect from "../../../../../../assets/WalletConnect.svg";

const WalletModal = (props) => {
  return (
    <Modal
      {...props}
      size="md"
      aria-labelledby="contained-modal-title-vcenter"
      centered
      className={styles.model_container}
    >
      <Modal.Header closeButton className={styles.modal_header}>
        <Modal.Title className={styles.modal_title}>
          Connect Your wallet
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <div className={styles.wallet_image_box_container}>
          <div className={styles.wallet_image_box}>
            <img src={MetaMask} alt="MetaMask" />
            <h3>MetaMask</h3>
          </div>
          <div className={styles.wallet_image_box}>
            <img src={WalletConnect} alt="WalletConnect" />
            <h3>WalletConnect</h3>
          </div>
        </div>
      </Modal.Body>
    </Modal>
  );
};

export default WalletModal;
