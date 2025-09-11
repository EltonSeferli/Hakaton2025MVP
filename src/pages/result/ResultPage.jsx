import React, { useState, useEffect } from "react";
import styles from "./ResultPage.module.css";
import LinearDeterminate from "../../components/LinearDeterminate/LinearDeterminate";

const ResultPage = ({ tables }) => {
  const [progress, setProgress] = useState({
    backend: false,
    frontend: false,
    mobile: false,
    web: false,
  });

  useEffect(() => {
    // Backend generating
    const backendTimer = setTimeout(() => {
      setProgress((prev) => ({ ...prev, backend: true }));
    }, 2000);

    // Frontend generating
    const frontendTimer = setTimeout(() => {
      setProgress((prev) => ({ ...prev, frontend: true }));
    }, 4000);

    // Mobile app generating
    const mobileTimer = setTimeout(() => {
      setProgress((prev) => ({ ...prev, mobile: true }));
    }, 6000);

    // Web app generating
    const webTimer = setTimeout(() => {
      setProgress((prev) => ({ ...prev, web: true }));
    }, 8000);

    return () => {
      clearTimeout(backendTimer);
      clearTimeout(frontendTimer);
      clearTimeout(mobileTimer);
      clearTimeout(webTimer);
    };
  }, []);

  return (
    <div className={styles.screen}>
      <div className={styles.container}>
        <h1>Generation Process</h1>

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
              {/* <LinearDeterminate /> */}
            </div>
          </div>

          <div className={styles.progressItem}>
            <div
              className={`${styles.progressIcon} ${
                progress.frontend ? styles.completed : styles.pending
              }`}
            >
              {progress.frontend ? "✓" : "..."}
            </div>
            <div className={styles.progressText}>
              <h3>Frontend Generating</h3>
              <p>{progress.frontend ? "Generated" : "Generating..."}</p>
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
        </div>

        {progress.web && (
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

            <div className={styles.tablesPreview}>
              <h3>Generated Tables:</h3>
              {tables?.map((table) => (
                <div key={table.id} className={styles.tablePreview}>
                  <h4>{table.tableName}</h4>
                  <ul>
                    {table.rows.map((row) => (
                      <li key={row.id}>
                        {row.field} ({row.type}) {row.required && " *"}{" "}
                        {row.unique && " [UNIQUE]"}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>

            <div className={styles.finalActions}>
              <button className={styles.backButton}>
                <b>Create New Table</b>
              </button>
              <button className={styles.regenerateButton}>
                <b>Regenerate</b>
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default ResultPage;
