import React from "react";
import styles from "./BackButton.module.css";
import { useNavigate } from "react-router-dom";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
function BackButton() {
  const navigate = useNavigate();
  return (
    <button className={styles.back_button} onClick={() => navigate(-1)}>
      <ArrowBackIcon /> Back
    </button>
  );
}

export default BackButton;
