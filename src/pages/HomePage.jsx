import NotesEmpty from "../components/NotesEmpty";
import Card from "../components/Card";
import useActiveNotes from "../hooks/useActiveNotes";
import LoadingPage from "./LoadingPage";

function HomePage() {
  const [notes, archivedHandler] = useActiveNotes();

  if (!notes) {
    return <LoadingPage />;
  }

  return (
    <section id="home">
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
                archivedHandler={archivedHandler}
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

export default HomePage;
