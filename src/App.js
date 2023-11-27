import React from "react";
import "./App.scss";
import "bootstrap/dist/css/bootstrap.min.css";
import { useState } from "react";
// import { Button, Navbar } from "react-bootstrap";
import MyNavbar from "./components/Navbar/MyNavbar";
import "bootstrap-icons/font/bootstrap-icons.css";
import ThemeContext from "./components/context/context";
import MyPart1 from "./components/Part1/MyPart1";
import MyPart2 from "./components/Part2/MyPart2";
import MyPart3 from "./components/Part3/MyPart3";
import MyPart4 from "./components/Part4/MyPart4";
import MyPart5 from "./components/Part5/MyPart5";
import MyPart6 from "./components/Part6/MyPart6";
import MyPart7 from "./components/Part7/MyPart7";
import MyPart8 from "./components/Part8/MyPart8";
import Footer from "./components/Footer/Footer";

const App = () => {
  const [theme, setTheme] = useState("dark");

  // const theme = useContext(ThemeContext);

  const darkBtn = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  console.log(theme);
  return (
    <ThemeContext.Provider value={theme}>
      <div className={`App ${theme === "light" ? "dark" : "light"}`}>
        <div className="container-fluid">
          <MyNavbar darkBtn={darkBtn} />
          <MyPart1 />
          <MyPart2 />
          <MyPart3 />
          <MyPart4 />
          <MyPart5 />
          <MyPart6 />
          <MyPart7 />
          <MyPart8 />
          <hr className="container" />
          <Footer />
        </div>
        {/* <button onClick={darkBtn}>Change</button> */}
      </div>
    </ThemeContext.Provider>
  );
};

export default App;
