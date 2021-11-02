import { useTheme } from "next-themes";
import React, { useState } from "react";
import DarkModeToggle from "react-dark-mode-toggle";

const ThemeToggler = () => {
  const { theme, setTheme } = useTheme();

  return (
    <DarkModeToggle
      onChange={() => setTheme(theme === "dark" ? "light" : "dark")}
      checked={theme == "dark"}
      size={50}
    />
  );
};

export default ThemeToggler;
