import { useState } from "react";
import "./App.css";
import { MyRoutes } from "./routers/routes";
import { NavBar } from "./components/NavBar";
import { Router } from "react-router-dom";
import { UpcomingSection } from "./pages/UpcomingSection";

function App() {
  const [count, setCount] = useState(0);

  return (
    // <Router>
    <div>
      <div className="app-container">
        <header>
          <NavBar />
        </header>
        <main>
          <div className="content">
            <div className="sidebar">
              <UpcomingSection />
            </div>
            <div className="main-content">
              <MyRoutes />
            </div>
          </div>
        </main>
      </div>
    </div>
    // </Router>
  );
}

export default App;
