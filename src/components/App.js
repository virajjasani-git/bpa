import React from "react";
import { Routes, Route } from "react-router-dom";
import LeftNavPanel from "./LeftNavPanel";
import Home from "./Home";
import BPADetails from "./BPADetails";
import CreateBPAForm from "./CreateBPAForm";

const App = () => {
  return (
    <div style={{ display: "flex" }}>
      <LeftNavPanel />
      <main style={{ marginLeft: 240, padding: "1rem" }}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/details/:id" element={<BPADetails />} />
          <Route path="/create" element={<CreateBPAForm />} />
        </Routes>
      </main>
    </div>
  );
};

export default App;
