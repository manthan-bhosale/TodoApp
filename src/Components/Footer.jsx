import React from "react";
import styles from "./footer.module.css";
function Footer({ completedTodods, totaltodos }) {
  return (
    <div className={styles.footer}>
      <span className={styles.item}>Completed Todos: {completedTodods}</span>
      <span className={styles.item}>Total Todos: {totaltodos}</span>
    </div>
  );
}

export default Footer;
