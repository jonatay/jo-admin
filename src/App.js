import { BrowserRouter as Router } from "react-router-dom";

import Sidebar from "./components/sidebar/Sidebar";
import Topbar from "./components/topbar/Topbar";

import "./app.css";
import Home from "./pages/home/Home";
function App() {
  return (
    <div>
      <Router>
        <Topbar />
        <div className="container">
          <Sidebar />
          <Home />
        </div>
      </Router>
    </div>
  );
}

export default App;
