import React from "react";
import "../styles/DarkModeButton.scss"

const DarkModeButton = ({ setDarkMode, darkMode }) => {
  return (
    <div onClick={setDarkMode}>
      <i className={darkMode ? "fa-solid fa-moon" : "fa-solid fa-sun"}></i>
    </div>
  );
};

export default DarkModeButton;