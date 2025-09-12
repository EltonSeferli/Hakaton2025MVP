import React, { useEffect, useState } from "react";
import styles from "./Prompt.module.css";
import ArrowUpwardIcon from "@mui/icons-material/ArrowUpward";
import { Link } from "react-router-dom";
import BackButton from "../../components/buttons/backButton/BackButton";
import Footer from "../../components/footer/Footer";

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
      <BackButton />
      <Footer />
      <div className={styles.container}>
        <div className={styles.header}>
          <h1 className={styles.title}>Just type you need</h1>
          <p className={styles.subtitle}>
            AI will build data structure for you
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
                "I want to create a table structure to manage company assets. Each asset should have a name, category, purchase date, value, and current status. I also want to keep track of maintenance history for every asset."
              )
            }
          >
            Assets App
          </button>
          <button
            className={styles.categoryBtn}
            onClick={() =>
              setText(
                "Build a table structure for managing stock in a store. I need products with name, SKU, quantity, supplier, unit price, and last updated date. Also add a table for stock transactions like incoming and outgoing items."
              )
            }
          >
            Stock App
          </button>
          <button
            className={styles.categoryBtn}
            onClick={() =>
              setText(
                "Give me a table structure for a document management system where I can upload files. Each document should have a title, description, file path, uploaded by user, upload date, and version number. I also want to organize them by categories."
              )
            }
          >
            Document Managemant System
          </button>
          <button
            className={styles.categoryBtn}
            onClick={() =>
              setText(
                "I need a table structure for a university system. It should have students with personal info, courses, professors, and enrollment tables. I also need to store grades, class schedules, and departments"
              )
            }
          >
            University Managemant System
          </button>
          <button
            className={styles.categoryBtn}
            onClick={() =>
              setText(
                "Create a table structure for a restaurant management app. I need tables for menus, menu items, customers, staff, reservations, and orders. Each order should link to customers and menu items."
              )
            }
          >
            Restaurant Managemant System
          </button>
          <button
            className={styles.categoryBtn}
            onClick={() =>
              setText(
                "I want a table structure for HR management. It should include employees, departments, positions, payroll, attendance, and leave requests. Also keep records of performance reviews and hiring dates."
              )
            }
          >
            HR Managemant System
          </button>
        </div>
      </div>
    </div>
  );
}
