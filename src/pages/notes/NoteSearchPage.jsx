import React, { useState } from "react";
import {
  archiveNote,
  getAllNotes,
  unarchiveNote,
} from "../../utils/local-data";
import Card from "../../components/Card";
import NotesEmpty from "../../components/NotesEmpty";
import { useSearchParams } from "react-router-dom";

class NoteSearchPage extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <section id="home">
        <CardContainer />
      </section>
    );
  }
}

const CardContainer = () => {
  const [notes, setNotes] = useState(getAllNotes());
  const [search] = useSearchParams();

  function onArchiveHandler(id) {
    if (notes.archived) {
      unarchiveNote(id);
    } else {
      archiveNote(id);
    }
    setNotes(getAllNotes());
  }

  return (
    <div className="container">
      <h1 className="search-found">
        Notes Found (
        {
          notes.filter((note) =>
            search.get("keyword")
              ? note.title
                  .toLowerCase()
                  .includes(search.get("keyword").toLowerCase())
              : note
          ).length
        }
        )
      </h1>
      {notes.filter((note) =>
        search.get("keyword")
          ? note.title
              .toLowerCase()
              .includes(search.get("keyword").toLowerCase())
          : note
      ).length > 0 ? (
        <div className="card__group">
          {notes
            .filter((note) =>
              search.get("keyword")
                ? note.title
                    .toLowerCase()
                    .includes(search.get("keyword").toLowerCase())
                : note
            )
            .map((note) => (
              <Card
                key={note.id}
                id={note.id}
                title={note.title}
                description={note.body}
                createdAt={note.createdAt}
                archived={note.archived}
                archivedHandler={onArchiveHandler}
              />
            ))}
        </div>
      ) : (
        <NotesEmpty />
      )}
    </div>
  );
};

export default NoteSearchPage;
