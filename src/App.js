import "./App.css";
import Alert from "./components/Alert";
// import About from "./components/About";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";
import React, { useState } from "react";
// import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

function App() {
  const [mode, setmode] = useState("light");

  const [alert, setalert] = useState(null);
  const showAlert = (messege, type) => {
    setalert({
      msg: messege,
      type: type,
    });
    setTimeout(() => {
      setalert(null);
    }, 1500);
  };

  const toggleMode = () => {
    if (mode === "light") {
      setmode("dark");
      document.body.style.backgroundColor = "rgb(65 64 64)";
      showAlert("Dark mode has been enabled", "success");
      document.title = "TextUtils - DarkMode";
      // setInterval(() => {
      //   document.title='TextUtils is Amazing Mode';
      // },2000);
      // setInterval(() => {
      //   document.title ='Install TextUtils Now';
      // }, 1500);
    } else {
      setmode("light");
      document.body.style.backgroundColor = "white";
      showAlert("Light mode has been enabled", "success");
      document.title = "TextUtils - LightMode";
    }
  };
  const toggleMode1 = () => {
    if (mode === "light") {
      setmode("Green");
      document.body.style.backgroundColor = "#00ab41";
      showAlert("Green mode has been enabled", "success");
      document.title = "TextUtils - Green-Mode";
    } else {
      setmode("light");
      document.body.style.backgroundColor = "white";
      showAlert("Light mode has been enabled", "success");
      document.title = "TextUtils - LightMode";
    }
  };
  const toggleMode2 = () => {
    if (mode === "light") {
      setmode("Blue");
      document.body.style.backgroundColor = "#0082cb";
      showAlert("Blue mode has been enabled", "success");
      document.title = "TextUtils - Blue Mode";
    } else {
      setmode("light");
      document.body.style.backgroundColor = "white";
      showAlert("Light mode has been enabled", "success");
      document.title = "TextUtils - LightMode";
    }
  };
  return (
    <>
      {/* <Navbar title="Unicorn" aboutText="AurJane"/> */}
      {/* <Router>  */}
        <Navbar mode={mode} toggleMode={toggleMode} toggleMode1={toggleMode1} toggleMode2={toggleMode2} />
        <Alert alert={alert} />
        <div className="container my-3">
          {/* <Routes> */}
            {/* <Route exact path="/about" element={<About />} />  */}
            {/* <Route */}
               {/* exact path="/" */}
              {/* element={ */}
                <TextForm
                  showAlert={showAlert}
                  heading="Enter text here and analyze below"
                  mode={mode}
                />
              {/* } */}
            {/* // /> */}
          {/* </Routes> */}
        </div>
      {/* </Router> */}
    </>
  );
}

export default App;
