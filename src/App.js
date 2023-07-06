import Navbar from "./Components/Navbar";
import "./App.css";
import TextForm from "./Components/TextForm";
import About from "./Components/About";
import { useState } from "react";
import Alerts from "./Components/Alerts";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
function App() {
  const [mode, setMode] = useState("light");
  const [alert, setAlert] = useState(null);
  const showAlert = (message, type) => {
    setAlert({ msg: message, type: type });
    setTimeout(() => {
      setAlert(null);
    }, 1500);
  };
  const toggleMode = () => {
    if (mode === "light") {
      setMode("dark");
      document.body.style.backgroundColor = "#121212";
      showAlert("Dark Mode has been enabled", "success");
    } else {
      setMode("light");
      showAlert("Dark Mode has been disabled", "success");

      document.body.style.backgroundColor = "white";
    }
  };

  return (
    <>
      <Router>
        <Navbar title="TextUtils" mode={mode} toggleMode={toggleMode} />
        <Alerts alert={alert} />
        <div className="container my=3">
          <Routes>
            <Route exact path="/about" element={<About mode={mode} />} />
            <Route
              exact
              path="/"
              element={<TextForm heading="Enter your text here " mode={mode} />}
            />
            <Route
              path="*"
              element={<TextForm heading="Enter your text here " mode={mode} />}
            />
          </Routes>
        </div>
      </Router>
    </>
  );
}

export default App;
