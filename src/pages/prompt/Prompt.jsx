import React, { useEffect, useState } from "react";
import styles from "./Prompt.module.css";
import ArrowUpwardIcon from "@mui/icons-material/ArrowUpward";
import { Link } from "react-router-dom";
import BackButton from "../../components/buttons/backButton/BackButton";
import Footer from "../../components/footer/Footer";
import lang from "./lang"; // import translations
import LangToggle from "../../components/langToggle/LangToggle";

export default function Prompt({ tables, setTables, language, setLanguage }) {
  const t = lang[language];

  const tables1 = [
    {
      id: Date.now(),
      tableName: "",
      rows: [
        {
          id: Date.now() + 1,
          field: "Field 1",
          type: "String",
          size: "",
          required: true,
          unique: false,
          default: "",
        },
        {
          id: Date.now() + 1,
          field: "Field 2",
          type: "Integer",
          size: "",
          required: true,
          unique: true,
          default: "",
        },
      ],
    },
    {
      id: Date.now(),
      tableName: "Table 2",
      rows: [
        {
          id: Date.now() + 2,
          field: "Field 1",
          type: "String",
          size: "",
          required: true,
          unique: false,
          default: "",
        },
        {
          id: Date.now() + 1,
          field: "Field 2",
          type: "Integer",
          size: "",
          required: true,
          unique: true,
          default: "",
        },
      ],
    },
  ];

  useEffect(() => {
    setTables(tables1);
  }, []);

  const [text, setText] = useState("");

  return (
    <div className={styles.screen}>
      <LangToggle setLanguage={setLanguage} />

      <BackButton language={language} />
      <Footer />
      <div className={styles.container}>
        <div className={styles.header}>
          <h1 className={styles.title}>{t.promptTitle}</h1>
          <p className={styles.subtitle}>{t.promptSubtitle}</p>
        </div>

        <div className={styles.inputContainer}>
          <textarea
            className={styles.textarea}
            onChange={(e) => setText(e.target.value)}
            value={text}
            placeholder={t.promptPlaceholder}
          />
          <Link to={"/preview"}>
            <button className={styles.sendButton} disabled={text?.length === 0}>
              <ArrowUpwardIcon />
            </button>
          </Link>
        </div>

        <div className={styles.categories}>
          <button
            className={styles.categoryBtn}
            onClick={() => setText(t.assetsAppPrompt)}
          >
            {t.assetsApp}
          </button>
          <button
            className={styles.categoryBtn}
            onClick={() => setText(t.stockAppPrompt)}
          >
            {t.stockApp}
          </button>
          <button
            className={styles.categoryBtn}
            onClick={() => setText(t.docAppPrompt)}
          >
            {t.docApp}
          </button>
          <button
            className={styles.categoryBtn}
            onClick={() => setText(t.universityAppPrompt)}
          >
            {t.universityApp}
          </button>
          <button
            className={styles.categoryBtn}
            onClick={() => setText(t.restaurantAppPrompt)}
          >
            {t.restaurantApp}
          </button>
          <button
            className={styles.categoryBtn}
            onClick={() => setText(t.hrAppPrompt)}
          >
            {t.hrApp}
          </button>
        </div>
      </div>
    </div>
  );
}
