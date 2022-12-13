import React from "react";
import { Container } from "../../shared";
import Notice from "./Components/Notice/Notice";
import styles from "./Home.module.css";
import TextContent from "./Components/TextContent/TextContent";
import FormContent from "./Components/FormContent/FormContent";

const Home = () => {
  return (
    <>
      <Notice />
      <div className={styles.home_wrapper}>
        <Container>
          <div className={styles.home_content_container}>
            <TextContent />
            <FormContent />
          </div>
        </Container>
      </div>
    </>
  );
};

export default Home;
