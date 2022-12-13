import React, { useState } from "react";
import HistoryTable from "../HistoryTable/HistoryTable";
import styles from "./RequestHistory.module.css";
import ethData from "../../data/ethData";
import textLinkData from "../../data/textLinkData";

const RequestHistory = () => {
  const [activeTab, setActiveTab] = useState("eth");

  const activeData = activeTab === "eth" ? ethData : textLinkData;

  const [data, setData] = useState(ethData);
  const activeEthTabClass = activeTab === "eth" ? styles.activeTabClass : "";

  const activeTestLinkTabClass =
    activeTab === "testLink" ? styles.activeTabClass : "";

  return (
    <div className={styles.request_history_container}>
      <h3>Request History</h3>
      <div className={styles.tabs_button_container}>
        <span
          onClick={() => {
            setActiveTab("eth");
            setData(activeData);
          }}
          className={activeEthTabClass}
        >
          ETH Transaction History
        </span>
        <span
          onClick={() => {
            setActiveTab("testLink");
            setData(activeData);
          }}
          className={activeTestLinkTabClass}
        >
          TestLink Transaction History
        </span>
      </div>
      <div className={styles.history_data}>
        <div className={styles.history_table_container}>
          <HistoryTable activeTab={activeTab} data={data} />
        </div>
      </div>
    </div>
  );
};

export default RequestHistory;
