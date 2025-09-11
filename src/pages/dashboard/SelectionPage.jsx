import React from "react";
import styles from "./SelectionPage.module.css";
import { useNavigate } from "react-router-dom";

const Dashboard = () => {
  let navigate = useNavigate();
  return (
    <div className={styles.screen}>
      <div className={styles.container}>
        <div className={styles.cards}>
          {/* AI Card */}
          <div className={styles.card}>
            <div className={styles.cardIcon}>🤖</div>
            <h3 className={styles.cardTitle}>With AI</h3>
            <p className={styles.cardDesc}>
              Let our advanced AI generate your database structure automatically
              with just a simple description of your needs.
            </p>
            <button
              className={styles.startBtn}
              onClick={() => navigate("/prompt")}
            >
              START
            </button>
          </div>

          {/* Manual Card */}
          <div className={styles.card}>
            <div className={styles.cardIcon}>🛠️</div>
            <h3 className={styles.cardTitle}>Manual</h3>
            <p className={styles.cardDesc}>
              Build your database structure manually with full control over
              every table, field, and relationship.
            </p>
            <button
              className={styles.startBtn}
              onClick={() => navigate("/manual")}
            >
              START
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
