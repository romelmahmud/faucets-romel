import React from "react";
import { Link } from "react-router-dom";
import { Dropdown } from "react-bootstrap";
import { HiOutlineUserCircle } from "react-icons/hi2";
import styles from "./UserProfile.module.css";

const UserProfile = () => {
  return (
    <Dropdown>
      <Dropdown.Toggle
        id="dropdown-basic"
        className={styles.dropdown_icon_button}
      >
        <HiOutlineUserCircle />
      </Dropdown.Toggle>

      <Dropdown.Menu className={styles.navLink_container}>
        <Dropdown.Item className={styles.navItems}>
          <Link to="/login" className={styles.navLink}>
            Log In
          </Link>
        </Dropdown.Item>
        <Dropdown.Item className={styles.navItems}>
          <Link to="/signup" className={styles.navLink}>
            Sign Up
          </Link>
        </Dropdown.Item>
        <Dropdown.Item className={styles.navItems}>
          <Link to="/faq" className={styles.navLink}>
            FAQ
          </Link>
        </Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>
  );
};

export default UserProfile;
