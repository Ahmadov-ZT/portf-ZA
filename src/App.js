import React from "react";
import "./App.css";
import { ToastContainer } from "react-toastify";
import PortfolioContainer from "../src/PortfolioContainer/PortfolioContainer";

function App() {
  return (
    <div className="app">
      <ToastContainer />
      <PortfolioContainer />
    </div>
  );
}

export default App;
