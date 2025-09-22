import { Routes, Route, Router } from "react-router-dom";
import Login from "./pages/login/Login";
import SelectionPage from "./pages/dashboard/SelectionPage";
import Prompt from "./pages/prompt/Prompt";
import TableStructure from "./pages/tableStructure/TableStructure";
import Preview from "./pages/preview/Preview";
import { useState } from "react";
import ResultPage from "./pages/result/ResultPage";
export default function App() {
  const [tables, setTables] = useState([]);
  const [language, setLanguage] = useState("en");
  localStorage.setItem("lang", "en");
  return (
    <Routes>
      <Route
        path="/"
        element={<Login language={language} setLanguage={setLanguage} />}
      />
      <Route
        path="/selection"
        element={
          <SelectionPage language={language} setLanguage={setLanguage} />
        }
      />
      <Route
        path="/prompt"
        element={
          <Prompt
            tables={tables}
            setTables={setTables}
            language={language}
            setLanguage={setLanguage}
          />
        }
      />
      <Route
        path="/manual"
        element={
          <TableStructure
            tables={tables}
            setTables={setTables}
            language={language}
            setLanguage={setLanguage}
          />
        }
      />
      <Route
        path="/preview"
        element={
          <Preview
            tables={tables}
            language={language}
            setLanguage={setLanguage}
          />
        }
      />
      <Route
        path="/result"
        element={
          <ResultPage
            tables={tables}
            language={language}
            setLanguage={setLanguage}
          />
        }
      />
    </Routes>
  );
}
