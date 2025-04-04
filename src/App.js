import Home from "./Home";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import BPADetails from "./BPADetails";

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/bpa/:id" element={<BPADetails />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
