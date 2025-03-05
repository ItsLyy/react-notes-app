import { useContext } from "react";
import { ThemeContext } from "../../contexts/ThemeContext";
import { LanguageContext } from "../../contexts/LanguageContext";
import Moon from "../icons/Moon";
import Sun from "../icons/Sun";
import { LANG_CONFIRMATION } from "../../utils/language-contants";
import { AuthContext } from "../../contexts/AuthContext";

export default function NavSetting() {
  const { setToken } = useContext(AuthContext);
  const { language, setLanguage } = useContext(LanguageContext);
  const { theme, setTheme } = useContext(ThemeContext);

  async function onLogoutHandler() {
    if (confirm(LANG_CONFIRMATION[language])) {
      setToken("");
    }
  }

  return (
    <ul className="nav__setting">
      <li>
        <button
          onClick={() => setLanguage(language === "id" ? "en" : "id")}
          className="switch-button"
        >
          <div
            className={`switch-setting ${
              language === "en" ? "first" : "second"
            }`}
          >
            <div>
              <span>EN</span>
              <span>ID</span>
            </div>
          </div>
        </button>
      </li>
      <li>
        <button
          onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
          className="switch-button"
        >
          <div
            className={`switch-setting ${
              theme === "dark" ? "first" : "second"
            }`}
          >
            <div>
              <Moon />
              <Sun />
            </div>
          </div>
        </button>
      </li>
      <li>
        <button onClick={onLogoutHandler} className="logout">
          Logout
        </button>
      </li>
    </ul>
  );
}
