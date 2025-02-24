import { useEffect, useState } from "react";
import {
  createSearchParams,
  Link,
  useLocation,
  useNavigate,
  useSearchParams,
} from "react-router-dom";
import { getAllNotes } from "../utils/local-data";

export default function SearchBar() {
  const [notes, setNotes] = useState(getAllNotes());
  const [keyword, setKeyword] = useState("");
  const [search, setSearch] = useSearchParams({});

  const { pathname } = useLocation();
  const navigate = useNavigate();

  const onKeywordHandler = (e) => {
    setNotes(getAllNotes());
    if (pathname === "/notes/search") {
      setSearch({
        keyword: e.target.value,
      });
    }
    setKeyword(e.target.value);
  };

  const onEnterHandler = (e) => {
    e.preventDefault();
    console.log(search);
    if (pathname !== "/notes/search") {
      navigate({
        pathname: "notes/search",
        search: createSearchParams({
          keyword: keyword,
        }).toString(),
      });
    }

    setKeyword("");
  };

  useEffect(() => {
    setKeyword("");
  }, [navigate]);

  return (
    <form className="search-bar" onSubmit={onEnterHandler}>
      <input
        type="text"
        name="searchbar"
        id="searchbar"
        autoComplete="notes name"
        placeholder="Search notes name"
        onChange={onKeywordHandler}
        value={keyword}
      />
      <span className="search-bar__key">CTRL + K</span>
      {notes.filter((note) =>
        keyword
          ? note.title.toLowerCase().includes(keyword.toLowerCase())
          : false
      ).length > 0 && (
        <div className="result__container">
          <ul className="result__list">
            {notes
              .filter((note) =>
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
