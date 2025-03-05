import { Link } from "react-router-dom";
import SearchBar from "../SearchBar";
import PropTypes from "prop-types";
import { LANG_NAVBAR } from "../../utils/language-contants";

export default function NavAction({ lang }) {
  return (
    <div className="nav__action">
      <SearchBar lang={lang} />
      <Link to="/notes/create" className="btn-primary">
        {LANG_NAVBAR[lang].addButton}
      </Link>
    </div>
  );
}

NavAction.propTypes = {
  lang: PropTypes.string.isRequired,
};
