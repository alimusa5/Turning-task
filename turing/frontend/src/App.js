import React from "react";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import Login from "./Login";
import Main from "../src/components/Main/Main";

function App() {
  return (
    <main>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/Main" element={<Main />} />
      </Routes>
    </main>
  );
}

export default App;
