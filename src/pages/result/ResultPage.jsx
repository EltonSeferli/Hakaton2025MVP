import React, { useState, useEffect } from "react";
import styles from "./ResultPage.module.css";
import LinearDeterminate from "../../components/LinearDeterminate/LinearDeterminate";
import { Link } from "react-router-dom";
import Footer from "../../components/footer/Footer";

const ResultPage = ({ tables }) => {
  const [progress, setProgress] = useState({
    backend: false,
    web: false,
    mobile: false,
    desktop: false,
    deploy: false,
  });

  useEffect(() => {
    const backendTimer = setTimeout(() => {
      setProgress((prev) => ({ ...prev, backend: true }));
    }, 1500);

    const webTimer = setTimeout(() => {
      setProgress((prev) => ({ ...prev, web: true }));
    }, 3000);

    const mobileTimer = setTimeout(() => {
      setProgress((prev) => ({ ...prev, mobile: true }));
    }, 4500);

    const desktopTimer = setTimeout(() => {
      setProgress((prev) => ({ ...prev, desktop: true }));
    }, 6000);
    const deployinTimer = setTimeout(() => {
      setProgress((prev) => ({ ...prev, deploy: true }));
    }, 7500);
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
      <Footer />
      <div className={styles.container}>
        <h1>Generation Process</h1>
        {progress.deploy && (
          <div className={styles.results}>
            <h2>Generated Project</h2>
            <div className={styles.projectLink}>
              <p>Your project is ready: </p>
              <a
                href="https://your-generated-project.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                https://your-generated-project.com
              </a>
            </div>

            <div className={styles.finalActions}>
              <Link to={"/selection"}>
                <button className={styles.regenerateButton}>
                  <b>Regenerate</b>
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
              <h3>Backend Generating</h3>
              <p>{progress.backend ? "Generated" : "Generating..."}</p>
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
              <h3>Web App Generating</h3>
              <p>{progress.web ? "Generated" : "Generating..."}</p>
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
              <h3>Mobile App Generating</h3>
              <p>{progress.mobile ? "Generated" : "Generating..."}</p>
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
              <h3>Desktop App Generating</h3>
              <p>{progress.desktop ? "Generated" : "Generating..."}</p>
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
              <h3>Deploying to Server Completing</h3>
              <p>{progress.deploy ? "Completed" : "Completing..."}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ResultPage;
