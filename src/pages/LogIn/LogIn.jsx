import React from "react";
import { Link } from "react-router-dom";
import { FaGoogle, FaFacebook, FaInstagram, FaEyeSlash } from "react-icons/fa";
import styles from "./LogIn.module.css";

const LogIn = () => {
  return (
    <div className={styles.login_container_wrapper}>
      <div className={styles.login_container}>
        <div className={styles.login_form}>
          <div className={styles.login_form_title}>
            <h2>Login</h2>
          </div>
          <form>
            <div className={styles.form_group}>
              <label htmlFor="email">Email</label>
              <input type="email" name="email" placeholder="Enter your email" />
            </div>
            <div className={styles.form_group}>
              <label htmlFor="password">Password</label>
              <input
                type="password"
                name="password"
                placeholder="Enter your password"
              />
              <span className={styles.eye_slash}>
                <FaEyeSlash />
              </span>
            </div>
            <div className={styles.form_group}>
              <button type="submit">Login</button>
            </div>
          </form>
          <div className={styles.form_footer}>
            <p>
              Don't have an account?{" "}
              <Link to="/signup" className={styles.sign_up}>
                Signup
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
        </div>
      </div>
    </div>
  );
};

export default LogIn;
