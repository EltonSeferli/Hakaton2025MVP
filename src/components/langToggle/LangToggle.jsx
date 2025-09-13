import React from "react";
import styles from "./LangToggle.module.css";
function LangToggle({ setLanguage }) {
  const handleChange = (e) => {
    setLanguage(e.target.value);
    localStorage.setItem("lang", e.target.value);
  };
  return (
    <div style={{ position: "absolute", top: 10, right: 10 }}>
      <select onChange={handleChange} className={styles.select}>
        <option value="en">
          <span>EN</span>
        </option>
        <option value="az">
          <span>AZE</span>
        </option>
      </select>
    </div>
  );
}

export default LangToggle;
