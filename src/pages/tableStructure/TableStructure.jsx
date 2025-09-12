import React, { useEffect, useRef, useState } from "react";
import styles from "./TableStructure.module.css";
import { useNavigate } from "react-router-dom";
import EditIcon from "@mui/icons-material/Edit";
import BackButton from "../../components/buttons/backButton/BackButton";
import Footer from "../../components/footer/Footer";

const TableStructure = ({ tables, setTables }) => {
  const [activeTable, setActiveTable] = useState(null);
  const navigate = useNavigate();

  const addTable = () => {
    const newTable = {
      id: Date.now(),
      tableName: "",
      rows: [
        {
          id: Date.now() + 1,
          field: "",
          type: "String",
          size: "",
          required: false,
          unique: false,
          default: "",
        },
      ],
    };

    setTables([...tables, newTable]);
    setActiveTable(newTable.id);
  };

  const removeTable = (tableId) => {
    setTables(tables.filter((table) => table.id !== tableId));
    if (activeTable === tableId) {
      setActiveTable(tables.length > 1 ? tables[0].id : null);
    }
  };

  const updateTableName = (tableId, value) => {
    setTables(
      tables.map((table) =>
        table.id === tableId ? { ...table, tableName: value } : table
      )
    );
  };

  const addRow = (tableId) => {
    setTables(
      tables.map((table) =>
        table.id === tableId
          ? {
              ...table,
              rows: [
                ...table.rows,
                {
                  id: Date.now(),
                  field: "",
                  type: "String",
                  size: "",
                  required: false,
                  unique: false,
                  default: "",
                },
              ],
            }
          : table
      )
    );
  };

  const removeRow = (tableId, rowId) => {
    setTables(
      tables.map((table) =>
        table.id === tableId
          ? {
              ...table,
              rows: table.rows.filter((row) => row.id !== rowId),
            }
          : table
      )
    );
  };

  const updateRow = (tableId, rowId, key, value) => {
    setTables(
      tables.map((table) =>
        table.id === tableId
          ? {
              ...table,
              rows: table.rows.map((row) =>
                row.id === rowId ? { ...row, [key]: value } : row
              ),
            }
          : table
      )
    );
  };

  const toggleActiveTable = (tableId) => {
    setActiveTable(activeTable === tableId ? null : tableId);
  };

  return (
    <div className={styles.screen}>
      <BackButton />
      <Footer />
      <div className={styles.container}>
        <div className={styles.header}>
          <h2 className={styles.title}>Database Schema Builder</h2>
          <p className={styles.subtitle}>
            Design your database tables with a structured approach. Define table
            names, fields, data types, and constraints for your application.
          </p>
        </div>

        <div className={styles.actions}>
          <button className={styles.primaryButton} onClick={addTable}>
            + Add Table
          </button>
        </div>

        {tables.length === 0 ? (
          <div className={styles.emptyState}>
            <div className={styles.emptyIcon}>
              <img src="src\assets\1994825.png" alt="" />
            </div>
            <h3>No tables created yet</h3>
            <p>Click "Add Table" to start designing your database schema</p>
          </div>
        ) : (
          <div className={styles.tablesContainer}>
            {tables.map((table) => (
              <div
                className={`${styles.tableBox} ${
                  activeTable === table.id ? styles.active : ""
                }`}
                key={table.id}
              >
                <div
                  className={styles.tableHeader}
                  onClick={() => toggleActiveTable(table.id)}
                >
                  <div className={styles.tableTitle}>
                    <span className={styles.tableIcon}>📋</span>
                    <input
                      className={styles.tableName}
                      type="text"
                      placeholder="Table Name"
                      value={table.tableName}
                      onClick={(e) => e.stopPropagation()}
                      required
                      onChange={(e) =>
                        updateTableName(table.id, e.target.value)
                      }
                    />
                    <button className={styles.editTableNameButton}>
                      {" "}
                      <EditIcon />
                    </button>
                  </div>
                  <div className={styles.tableActions}>
                    <button
                      className={styles.removeButton}
                      onClick={(e) => {
                        e.stopPropagation();
                        removeTable(table.id);
                      }}
                    >
                      ×
                    </button>
                  </div>
                </div>

                {activeTable === table.id && (
                  <>
                    <div className={styles.tableContent}>
                      <table className={styles.dataTable}>
                        <thead>
                          <tr>
                            <th>Field Name</th>
                            <th>Data Type</th>
                            <th>Size</th>
                            <th>Required</th>
                            <th>Unique</th>
                            <th>Default Value</th>
                            <th>Actions</th>
                          </tr>
                        </thead>
                        <tbody>
                          {table.rows.map((row) => (
                            <tr key={row.id}>
                              <td>
                                <input
                                  type="text"
                                  placeholder="Field name"
                                  value={row.field}
                                  onChange={(e) =>
                                    updateRow(
                                      table.id,
                                      row.id,
                                      "field",
                                      e.target.value
                                    )
                                  }
                                />
                              </td>

                              <td>
                                <select
                                  value={row.type}
                                  onChange={(e) =>
                                    updateRow(
                                      table.id,
                                      row.id,
                                      "type",
                                      e.target.value
                                    )
                                  }
                                >
                                  <option value="String">String</option>
                                  <option value="Integer">Integer</option>
                                  <option value="Double">Double</option>
                                  <option value="Boolean">Boolean</option>
                                  <option value="Date">Date</option>
                                  <option value="Text">Text</option>
                                  <option value="UUID">UUID</option>
                                </select>
                              </td>

                              <td>
                                <input
                                  type="text"
                                  placeholder="Size"
                                  value={row.size}
                                  onChange={(e) =>
                                    updateRow(
                                      table.id,
                                      row.id,
                                      "size",
                                      e.target.value
                                    )
                                  }
                                />
                              </td>

                              <td>
                                <label className={styles.checkboxContainer}>
                                  <input
                                    type="checkbox"
                                    checked={row.required}
                                    onChange={(e) =>
                                      updateRow(
                                        table.id,
                                        row.id,
                                        "required",
                                        e.target.checked
                                      )
                                    }
                                  />
                                  <span className={styles.checkmark}></span>
                                </label>
                              </td>

                              <td>
                                <label className={styles.checkboxContainer}>
                                  <input
                                    type="checkbox"
                                    checked={row.unique}
                                    onChange={(e) =>
                                      updateRow(
                                        table.id,
                                        row.id,
                                        "unique",
                                        e.target.checked
                                      )
                                    }
                                  />
                                  <span className={styles.checkmark}></span>
                                </label>
                              </td>

                              <td>
                                <input
                                  type="text"
                                  placeholder="Default value"
                                  value={row.default}
                                  onChange={(e) =>
                                    updateRow(
                                      table.id,
                                      row.id,
                                      "default",
                                      e.target.value
                                    )
                                  }
                                />
                              </td>

                              <td>
                                <button
                                  className={styles.removeRowButton}
                                  onClick={() => removeRow(table.id, row.id)}
                                >
                                  ×
                                </button>
                              </td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>

                    <button
                      className={styles.addRowButton}
                      onClick={() => addRow(table.id)}
                    >
                      + Add Field
                    </button>
                  </>
                )}
              </div>
            ))}
          </div>
        )}
        {tables.length > 0 ? (
          <button
            style={{ marginTop: "100px" }}
            className={styles.primaryButton}
            onClick={() => {
              navigate("/preview");
            }}
          >
            Preview
          </button>
        ) : null}
      </div>
    </div>
  );
};

export default TableStructure;
