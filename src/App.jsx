import Home from "./components/Home";
import Header from "./components/Header";
import About from "./components/About";
import { useState } from "react";

function App() {
  const [currentPage, setCurrentPage] = useState("home");

  const handleNavigate = (page) => {
    setCurrentPage(page);
  };

  return (
    <div className="layout">
      <Header title="Our React App" onNavigate={handleNavigate} />

      {currentPage === "home" ? <Home /> : <About />}
    </div>
  );
}

export default App;
