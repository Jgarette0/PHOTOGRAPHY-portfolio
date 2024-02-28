import React, { useState, useEffect } from "react";
import { Sun, Moon } from "lucide-react";
import GithubMode from "./Github";

function DarkModeToggle() {
  const [darkMode, setDarkMode] = useState(
    localStorage.getItem("darkMode") === "true"
  );

  useEffect(() => {
    localStorage.setItem("darkMode", darkMode);
    if (darkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [darkMode]);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  return (
    <div>
      <button className="darkmode" onClick={toggleDarkMode}>
        {darkMode ? (
          <Sun color="#d1d1d2" size={30} />
        ) : (
          <Moon color="black" size={27} />
        )}
      </button>
      <GithubMode color={darkMode ? "#d1d1d2" : "black"} />
    </div>
  );
}

export default DarkModeToggle;
