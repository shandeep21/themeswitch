import UseLocalStorage from "./useLocalStorage";
import "./styles.css";

export default function ThemeSwitch() {
  const [theme, setTheme] = UseLocalStorage("theme", "dark");

  function handleTheme() {
    setTheme(theme === "light" ? "dark" : "light");
  }
  console.log(">>>>", theme);

  return (
    <div className="light-dark-mode" data-theme={theme}>
      <div className="container">
        <h2>{`Switch Theme To ${theme === "light" ? "🌙" : "🌞"}`}</h2>
        <button onClick={handleTheme}>Change Theme</button>
      </div>
    </div>
  );
}
