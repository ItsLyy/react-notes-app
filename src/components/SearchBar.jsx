import { LANG_NAVBAR } from "../utils/language-contants";
import PropTypes from "prop-types";
import useSearchNotes from "../hooks/useSearchNotes";
import { Link } from "react-router-dom";

export default function SearchBar({ lang }) {
  const { notes, keyword, onKeywordHandler, onEnterHandler } = useSearchNotes();

  return (
    <form className="search-bar" onSubmit={onEnterHandler}>
      <input
        type="text"
        name="searchbar"
        id="searchbar"
        autoComplete="notes name"
        placeholder={LANG_NAVBAR[lang].searchPlaceholder}
        onChange={onKeywordHandler}
        value={keyword}
      />
      <span className="search-bar__key">CTRL + K</span>
      {notes?.filter((note) =>
        keyword
          ? note.title.toLowerCase().includes(keyword.toLowerCase())
          : false
      ).length > 0 && (
        <div className="result__container">
          <ul className="result__list">
            {notes
              ?.filter((note) =>
                keyword
                  ? note.title.toLowerCase().includes(keyword.toLowerCase())
                  : false
              )
              .map((note) => (
                <li className="result__item" key={note.id}>
                  <Link to={`/notes/${note.id}`} className="result__link">
                    {note.title}
                  </Link>
                </li>
              ))}
          </ul>
        </div>
      )}
    </form>
  );
}

SearchBar.propTypes = {
  lang: PropTypes.string.isRequired,
};
