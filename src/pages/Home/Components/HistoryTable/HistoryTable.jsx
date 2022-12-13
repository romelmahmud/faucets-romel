import React from "react";
import { Table } from "react-bootstrap";
import styles from "./HistoryTable.module.css";

const HistoryTable = ({ data }) => {
  return (
    <div className={styles.history_table}>
      <Table bordered className={styles.table}>
        <thead>
          <tr>
            <th>Sr</th>
            <th>Time</th>
            <th>Amount</th>
            <th>Hash</th>
          </tr>
        </thead>
        <tbody>
          {data.map((dt, i) => (
            <tr key={dt.id}>
              <td>{i + 1}</td>
              <td>{dt.time}</td>
              <td>{dt.amount}</td>
              <td>{dt.hash}</td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
};

export default HistoryTable;
