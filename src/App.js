import About from "./components/about/About";
import Intro from "./components/intro/Intro";
import Topbar from "./components/topbar/Topbar";
import { useState,useContext } from "react";
import Menubar from "./components/menubar/Menubar";
import Contact from "./components/contact/Contact";
import Sidebar from "./components/sidebar/Sidebar";
import "./app.css"
import Skills from "./components/skills/Skills";
import Projects from "./components/projects/Projects";
import 'bootstrap/dist/css/bootstrap.min.css';
import React from "react";
import { ThemeContext } from "./context";
import Toggle from "./components/toggle/Toggle";



const App = () => {
  const theme  = useContext(ThemeContext)
  const darkMode = theme.state.darkMode
  const [menuOpen, setMenuOpen] = useState(false)
  return (
    <div className="App" style={{backgroundColor:darkMode ? "var(--black)" : "var(--white)", color:darkMode && "var(--white)"}}>
        <Toggle/>
        <Sidebar/>
        <Topbar menuOpen={menuOpen} setMenuOpen={setMenuOpen}/>
        <Menubar menuOpen={menuOpen} setMenuOpen={setMenuOpen}/>
        <div className="section">
          <Intro/>
          <About/>
          <Skills/>
          <Projects/>
          <Contact/>
        </div>
    </div>
  );
}



export default App;
