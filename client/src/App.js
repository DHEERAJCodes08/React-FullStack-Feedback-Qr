import React from "react";
import "./App.css";
import EditingDashboard from "./components/pages/EditingDashboard";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import TemplateSelection from "./components/pages/TemplateSelection";

function App() {
  return (
    <Router>
      <div>
        <Routes>
          <Route path="/" element={<TemplateSelection/>} />
          <Route path="/templates/dashboard/:id" element={<EditingDashboard/>} />
          <Route path="*" element={<div>404 Not Found</div>} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
