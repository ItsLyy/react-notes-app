import parser from "html-react-parser";
import { useNavigate, useParams } from "react-router-dom";
import {
  archiveNote,
  deleteNote,
  getNote,
  unarchiveNote,
} from "../../utils/local-data";
import NotesEmpty from "../../components/NotesEmpty";
import BookmarkSlash from "../../components/icons/BookmarkSlash";
import Bookmark from "../../components/icons/Bookmark";
import Trash from "../../components/icons/Trash";
import { useState } from "react";

function NoteDetail() {
  const { id } = useParams();
  const [notes, setNotes] = useState(getNote(id));
  const navigate = useNavigate();

  if (!notes) {
    return (
      <section id="notes-detail--not-found">
        <NotesEmpty message="Note not found" />
      </section>
    );
  }

  function onArchiveHandler(id) {
    if (notes.archived) {
      unarchiveNote(id);
    } else {
      archiveNote(id);
    }
    setNotes(getNote(id));
  }

  function onDeleteHandler(id) {
    if (confirm("Are you sure?")) {
      deleteNote(id);
      navigate("/");
    }
  }

  return (
    <section id="notes-detail">
      <div className="container">
        <header>
          <h1 className="notes__title">{notes.title}</h1>
          <span className="notes__createdAt">{notes.createdAt}</span>
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
