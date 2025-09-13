import React from "react";
import styles from "./BackButton.module.css";
import { useNavigate } from "react-router-dom";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import lang from "./lang";
function BackButton({ language = "en" }) {
  const navigate = useNavigate();
  const t = lang[language];
  return (
    <button className={styles.back_button} onClick={() => navigate(-1)}>
      <ArrowBackIcon /> {t.backButton}
    </button>
  );
}

export default BackButton;
