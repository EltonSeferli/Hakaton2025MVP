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
  return (
    <Routes>
      {" "}
      <Route path="/" element={<Login />} />
      <Route path="/selection" element={<SelectionPage />} />
      <Route
        path="/prompt"
        element={<Prompt tables={tables} setTables={setTables} />}
      />
      <Route
        path="/manual"
        element={<TableStructure tables={tables} setTables={setTables} />}
      />
      <Route path="/preview" element={<Preview tables={tables} />} />
      <Route path="/result" element={<ResultPage tables={tables} />} />
    </Routes>
  );
}
