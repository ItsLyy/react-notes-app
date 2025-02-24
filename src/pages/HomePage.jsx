import React from "react";
import NotesEmpty from "../components/NotesEmpty";
import { archiveNote, getActiveNotes } from "../utils/local-data";
import Card from "../components/Card";

class HomePage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      notes: getActiveNotes(),
    };
    this.onArchiveHandler = this.onArchiveHandler.bind(this);
  }

  onArchiveHandler(id) {
    archiveNote(id);
    this.setState({ notes: getActiveNotes() });
  }

  render() {
    return (
      <section id="home">
        <div className="container">
          {this.state.notes.length > 0 ? (
            <div className="card__group">
              {this.state.notes.map((note) => (
                <Card
                  key={note.id}
                  id={note.id}
                  title={note.title}
                  description={note.body}
                  createdAt={note.createdAt}
                  archived={note.archived}
                  archivedHandler={this.onArchiveHandler}
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
}

export default HomePage;
