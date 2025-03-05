import parser from "html-react-parser";
import { useParams } from "react-router-dom";
import NotesEmpty from "../../components/NotesEmpty";
import BookmarkSlash from "../../components/icons/BookmarkSlash";
import Bookmark from "../../components/icons/Bookmark";
import Trash from "../../components/icons/Trash";
import { showFormattedDate } from "../../utils";
import useNotesDetail from "../../hooks/useNotesDetail";
import { useContext } from "react";
import { LanguageContext } from "../../contexts/LanguageContext";

function NoteDetail() {
  const { id } = useParams();
  const { language } = useContext(LanguageContext);
  const [notes, onArchiveHandler, onDeleteHandler] = useNotesDetail({
    id,
    lang: language,
  });

  if (!notes) {
    return (
      <section id="notes-detail--not-found">
        <NotesEmpty message="Note not found" />
      </section>
    );
  }

  return (
    <section id="notes-detail">
      <div className="container">
        <header>
          <h1 className="notes__title">{notes.title}</h1>
          <span className="notes__createdAt">
            {showFormattedDate(notes.createdAt)}
          </span>
        </header>
        <div className="notes__body">{parser(notes.body)}</div>
      </div>
      <div className="notes__action">
        <button onClick={() => onArchiveHandler(id)} className="btn-secondary">
          {notes.archived ? <BookmarkSlash /> : <Bookmark />}
        </button>
        <button onClick={() => onDeleteHandler(id)} className="btn-primary">
          <Trash />
        </button>
      </div>
    </section>
  );
}

export default NoteDetail;
