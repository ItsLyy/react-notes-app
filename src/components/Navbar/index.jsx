import NavSetting from "./NavSetting";
import NavAction from "./NavAction";
import NavMenu from "./NavMenu";
import { useContext } from "react";
import { LanguageContext } from "../../contexts/LanguageContext";

export default function Navbar() {
  const { language } = useContext(LanguageContext);
  return (
    <header className="nav">
      <nav>
        <NavMenu lang={language} />
        <NavAction lang={language} />
        <NavSetting lang={language} />
      </nav>
    </header>
  );
}
