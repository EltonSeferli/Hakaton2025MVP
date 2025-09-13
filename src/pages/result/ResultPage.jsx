import React, { useState, useEffect } from "react";
import styles from "./ResultPage.module.css";
import { Link } from "react-router-dom";
import Footer from "../../components/footer/Footer";
import lang from "./lang";
import LangToggle from "../../components/langToggle/LangToggle";

const ResultPage = ({ tables, language = "en", setLanguage }) => {
  const [progress, setProgress] = useState({
    backend: false,
    web: false,
    mobile: false,
    desktop: false,
    deploy: false,
  });

  const t = lang[language]; // dil seçimi

  useEffect(() => {
    const backendTimer = setTimeout(
      () => setProgress((prev) => ({ ...prev, backend: true })),
      1500
    );
    const webTimer = setTimeout(
      () => setProgress((prev) => ({ ...prev, web: true })),
      3000
    );
    const mobileTimer = setTimeout(
      () => setProgress((prev) => ({ ...prev, mobile: true })),
      4500
    );
    const desktopTimer = setTimeout(
      () => setProgress((prev) => ({ ...prev, desktop: true })),
      6000
    );
    const deployinTimer = setTimeout(
      () => setProgress((prev) => ({ ...prev, deploy: true })),
      7500
    );
    return () => {
      clearTimeout(backendTimer);
      clearTimeout(webTimer);
      clearTimeout(mobileTimer);
      clearTimeout(desktopTimer);
      clearTimeout(deployinTimer);
    };
  }, []);

  return (
    <div className={styles.screen}>
      <LangToggle setLanguage={setLanguage} />
      <Footer />
      <div className={styles.container}>
        <h1>{t.generationProcess}</h1>

        {progress.deploy && (
          <div className={styles.results}>
            <h2>{t.generatedProject}</h2>
            <div className={styles.projectLink}>
              <p>{t.projectReady} </p>
              <a
                href="https://dev-blank.nsp.solutions"
                target="_blank"
                rel="noopener noreferrer"
              >
                https://dev-blank.nsp.solutions
              </a>
            </div>

            <div className={styles.finalActions}>
              <Link to={"/selection"}>
                <button className={styles.regenerateButton}>
                  <b>{t.regenerate}</b>
                </button>
              </Link>
            </div>
          </div>
        )}

        <br />

        <div className={styles.progressContainer}>
          <div className={styles.progressItem}>
            <div
              className={`${styles.progressIcon} ${
                progress.backend ? styles.completed : styles.pending
              }`}
            >
              {progress.backend ? "✓" : "..."}
            </div>
            <div className={styles.progressText}>
              <h3>{t.backendTitle}</h3>
              <p>
                {progress.backend
                  ? t.backendStatus.generated
                  : t.backendStatus.generating}
              </p>
            </div>
          </div>

          <div className={styles.progressItem}>
            <div
              className={`${styles.progressIcon} ${
                progress.web ? styles.completed : styles.pending
              }`}
            >
              {progress.web ? "✓" : "..."}
            </div>
            <div className={styles.progressText}>
              <h3>{t.webTitle}</h3>
              <p>
                {progress.web ? t.webStatus.generated : t.webStatus.generating}
              </p>
            </div>
          </div>

          <div className={styles.progressItem}>
            <div
              className={`${styles.progressIcon} ${
                progress.mobile ? styles.completed : styles.pending
              }`}
            >
              {progress.mobile ? "✓" : "..."}
            </div>
            <div className={styles.progressText}>
              <h3>{t.mobileTitle}</h3>
              <p>
                {progress.mobile
                  ? t.mobileStatus.generated
                  : t.mobileStatus.generating}
              </p>
            </div>
          </div>

          <div className={styles.progressItem}>
            <div
              className={`${styles.progressIcon} ${
                progress.desktop ? styles.completed : styles.pending
              }`}
            >
              {progress.desktop ? "✓" : "..."}
            </div>
            <div className={styles.progressText}>
              <h3>{t.desktopTitle}</h3>
              <p>
                {progress.desktop
                  ? t.desktopStatus.generated
                  : t.desktopStatus.generating}
              </p>
            </div>
          </div>

          <div className={styles.progressItem}>
            <div
              className={`${styles.progressIcon} ${
                progress.deploy ? styles.completed : styles.pending
              }`}
            >
              {progress.deploy ? "✓" : "..."}
            </div>
            <div className={styles.progressText}>
              <h3>{t.deployTitle}</h3>
              <p>
                {progress.deploy
                  ? t.deployStatus.completed
                  : t.deployStatus.completing}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ResultPage;
