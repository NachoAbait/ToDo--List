import React from "react";
import "./App.css";
import Navbar from "./COMPONENTS/Navbar/Navbar.jsx";
import List from "./COMPONENTS/List/List.jsx";
import Footer from "./COMPONENTS/Footer/Footer.jsx";

const HOST = process.env;

function App() {
  return (
    <div className="App">
      <Navbar></Navbar>
      <List></List>
      <Footer></Footer>
    </div>
  );
}

export default App;
