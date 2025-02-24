import React from "react";
import NotesEmpty from "../../components/NotesEmpty";
import Card from "../../components/Card";
import { getArchivedNotes, unarchiveNote } from "../../utils/local-data";

class NotesArchivedPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      notes: getArchivedNotes(),
    };
    this.onUnarchiveHandler = this.onUnarchiveHandler.bind(this);
  }

  onUnarchiveHandler(id) {
    console.log("hello");
    unarchiveNote(id);
    this.setState({ notes: getArchivedNotes() });
  }

  render() {
    return (
      <section id="archived">
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
                  archivedHandler={this.onUnarchiveHandler}
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

export default NotesArchivedPage;
