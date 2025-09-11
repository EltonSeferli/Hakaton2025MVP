import React, { useEffect, useState } from "react";
import styles from "./Prompt.module.css";
import ArrowUpwardIcon from "@mui/icons-material/ArrowUpward";
import { Link } from "react-router-dom";

export default function Prompt({ tables, setTables }) {
  const tables1 = [
    {
      id: Date.now(),
      tableName: "Table 1",
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
      <div className={styles.container}>
        <div className={styles.header}>
          <h1 className={styles.title}>What can we help you build?</h1>
          <p className={styles.subtitle}>
            Describe your idea and let AI build it for you in minutes. <br />
            Use our <span className={styles.link}>prompt guide</span> to get
            better results.
          </p>
        </div>

        <div className={styles.inputContainer}>
          <textarea
            className={styles.textarea}
            onChange={(e) => setText(e.target.value)}
            value={text}
            placeholder="A discovery app for food lovers to find nearby restaurants and read reviews."
          />
          <Link to={"/preview"}>
            <button className={styles.sendButton} disabled={text.length === 0}>
              <ArrowUpwardIcon />
            </button>
          </Link>
        </div>

        <div className={styles.categories}>
          <button
            className={styles.categoryBtn}
            onClick={() =>
              setText(
                "An online store where users can browse and purchase products securely."
              )
            }
          >
            E-commerce
          </button>
          <button
            className={styles.categoryBtn}
            onClick={() =>
              setText(
                "A platform where users can share posts, follow others, and interact in real time."
              )
            }
          >
            Social Media
          </button>
          <button
            className={styles.categoryBtn}
            onClick={() =>
              setText(
                "A website for writers to publish articles, add tags, and allow comments."
              )
            }
          >
            Blog Platform
          </button>
          <button
            className={styles.categoryBtn}
            onClick={() =>
              setText(
                "An app for managing tasks, setting deadlines, and tracking progress."
              )
            }
          >
            Task Manager
          </button>
          <button
            className={styles.categoryBtn}
            onClick={() =>
              setText(
                "A fitness tracking app to log workouts, track calories, and set goals."
              )
            }
          >
            Fitness App
          </button>
        </div>
      </div>
    </div>
  );
}
