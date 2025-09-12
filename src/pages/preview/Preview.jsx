import React, { useState } from "react";
import styles from "./Preview.module.css";
import { Link, useNavigate } from "react-router-dom";
import BackButton from "../../components/buttons/backButton/BackButton";
import Footer from "../../components/footer/Footer";

const Preview = ({ tables }) => {
  const navigate = useNavigate();
  return (
    <div className={styles.screen}>
      <BackButton />
      <Footer />
      <div className={styles.container}>
        <h1>Generated Tables</h1>
        <p>
          Below are the table structures you created. Click the button below to
          generate.
        </p>
        <Link to={"/result"}>
          <button className={styles.generateButton}>
            <b>Generate</b>
          </button>
        </Link>
        <div className={styles.tablesContainer}>
          {tables?.map((table) => (
            <div key={table.id} className={styles.table}>
              <h3>{table.tableName}</h3>
              <table className={styles.tableStructure}>
                <thead>
                  <tr>
                    <th>Field</th>
                    <th>Type</th>
                    <th>Size</th>
                    <th>Required</th>
                    <th>Unique</th>
                    <th>Default</th>
                  </tr>
                </thead>
                <tbody>
                  {table.rows.map((row) => (
                    <tr key={row.id}>
                      <td>{row.field}</td>
                      <td>{row.type}</td>
                      <td>{row.size}</td>
                      <td>{row.required ? "✓" : "✗"}</td>
                      <td>{row.unique ? "✓" : "✗"}</td>
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
