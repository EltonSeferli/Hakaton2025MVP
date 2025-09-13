import React, { useState } from "react";
import styles from "./SelectionPage.module.css";
import { useNavigate } from "react-router-dom";
import Footer from "../../components/footer/Footer";
import lang from "./lang";
import LangToggle from "../../components/langToggle/LangToggle";

const Dashboard = ({ language, setLanguage }) => {
  let navigate = useNavigate();
  const t = lang[language];

  return (
    <div className={styles.screen}>
      <LangToggle setLanguage={setLanguage} />

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
            <h3 className={styles.cardTitle}>{t.withAiTitle}</h3>
            <p className={styles.cardDesc}>{t.withAiDesc}</p>
          </div>

          {/* Manual Card */}
          <div
            className={styles.card}
            onClick={() => {
              navigate("/manual");
            }}
          >
            <div className={styles.cardIcon}>🛠️</div>
            <h3 className={styles.cardTitle}>{t.manualTitle}</h3>
            <p className={styles.cardDesc}>{t.manualDesc}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
