import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import parser from "html-react-parser";
import Bookmark from "./icons/Bookmark";
import BookmarkSlash from "./icons/BookmarkSlash";

function Card({
  id,
  title,
  description,
  createdAt,
  archived,
  archivedHandler,
}) {
  return (
    <article className="card">
      <header className="card__header">
        <h2 className="card__title">{title}</h2>
        <span className="card__date">{createdAt}</span>
      </header>
      <p className="card__description">{parser(description)}</p>
      <div className="card__action">
        <button
          onClick={() => archivedHandler(id)}
          className="btn-secondary"
          type="button"
        >
          {archived ? <BookmarkSlash /> : <Bookmark />}
        </button>
        <Link className="btn-primary" to={`/notes/${id}`}>
          See More
        </Link>
      </div>
    </article>
  );
}

Card.propTypes = {
  id: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  createdAt: PropTypes.string.isRequired,
  archived: PropTypes.bool.isRequired,
  archivedHandler: PropTypes.func.isRequired,
};

export default Card;
