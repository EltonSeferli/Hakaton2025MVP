import React from "react";
import styles from "./SelectionPage.module.css";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import Footer from "../../components/footer/Footer";

const Dashboard = () => {
  let navigate = useNavigate();
  return (
    <div className={styles.screen}>
      <Footer />
      <div className={styles.container}>
        <div className={styles.cards}>
          {/* AI Card */}
          <div
            className={styles.card}
            onClick={() => {
              navigate("/prompt");
            }}
          >
            <div className={styles.cardIcon}>🤖</div>
            <h3 className={styles.cardTitle}>With AI</h3>
            <p className={styles.cardDesc}>
              Let our advanced AI generate your database structure automatically
              with just a simple description of your needs.
            </p>
          </div>

          {/* Manual Card */}
          <div
            className={styles.card}
            onClick={() => {
              navigate("/manual");
            }}
          >
            <div className={styles.cardIcon}>🛠️</div>
            <h3 className={styles.cardTitle}>Manual</h3>
            <p className={styles.cardDesc}>
              Build your database structure manually with full control over
              every table, field, and relationship.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
