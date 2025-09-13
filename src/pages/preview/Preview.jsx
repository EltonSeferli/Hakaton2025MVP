import React from "react";
import styles from "./Preview.module.css";
import { Link, useNavigate } from "react-router-dom";
import BackButton from "../../components/buttons/backButton/BackButton";
import Footer from "../../components/footer/Footer";
import lang from "./lang";
import LangToggle from "../../components/langToggle/LangToggle";

const Preview = ({ tables, language = "en", setLanguage }) => {
  const navigate = useNavigate();
  const t = lang[language]; // seçilmiş dil

  return (
    <div className={styles.screen}>
      <LangToggle setLanguage={setLanguage} />
      <BackButton language={language} />
      <Footer />
      <div className={styles.container}>
        <h1>{t.previewTitle}</h1>
        <p>{t.previewSubtitle}</p>

        <Link to={"/result"}>
          <button className={styles.generateButton}>
            <b>{t.generateButton}</b>
          </button>
        </Link>

        <div className={styles.tablesContainer}>
          {tables?.map((table) => (
            <div key={table.id} className={styles.table}>
              <h3>{table.tableName}</h3>
              <table className={styles.tableStructure}>
                <thead>
                  <tr>
                    <th>{t.field}</th>
                    <th>{t.type}</th>
                    <th>{t.size}</th>
                    <th>{t.required}</th>
                    <th>{t.unique}</th>
                    <th>{t.default}</th>
                  </tr>
                </thead>
                <tbody>
                  {table.rows.map((row) => (
                    <tr key={row.id}>
                      <td>{row.field}</td>
                      <td>{row.type}</td>
                      <td>{row.size}</td>
                      <td>{row.required ? t.yes : t.no}</td>
                      <td>{row.unique ? t.yes : t.no}</td>
                      <td>{row.default}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Preview;
