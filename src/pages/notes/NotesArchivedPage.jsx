import NotesEmpty from "../../components/NotesEmpty";
import Card from "../../components/Card";
import useArchivedNotes from "../../hooks/useArchivedNotes";
import LoadingPage from "../LoadingPage";

function NotesArchivedPage() {
  const [notes, unArchivedHandler] = useArchivedNotes();

  if (!notes) {
    return <LoadingPage />;
  }

  return (
    <section id="archived">
      <div className="container">
        {notes.length > 0 ? (
          <div className="card__group">
            {notes.map((note) => (
              <Card
                key={note.id}
                id={note.id}
                title={note.title}
                description={note.body}
                createdAt={note.createdAt}
                archived={note.archived}
                archivedHandler={unArchivedHandler}
              />
            ))}
          </div>
        ) : (
          <NotesEmpty />
        )}
      </div>
    </section>
  );
}

export default NotesArchivedPage;
