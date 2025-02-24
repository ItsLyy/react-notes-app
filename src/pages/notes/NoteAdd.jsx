import React from "react";
import Checklist from "../../components/icons/Checklist";
import { addNote } from "../../utils/local-data";
import { useNavigate } from "react-router-dom";
import PropTypes from "prop-types";

class NoteAdd extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      input: {
        title: "",
        body: "",
      },
    };

    this.onTitleInputHandler = this.onTitleInputHandler.bind(this);
    this.onBodyInputHandler = this.onBodyInputHandler.bind(this);
  }

  onTitleInputHandler(e) {
    this.setState((prevState) => {
      return {
        input: {
          ...prevState.input,
          title: e.target.value,
        },
      };
    });
  }

  onBodyInputHandler(e) {
    e.preventDefault();
    this.setState((prevState) => {
      return {
        input: {
          ...prevState.input,
          body: e.target.innerText,
        },
      };
    });
  }

  render() {
    return (
      <section id="notes-create">
        <div className="container">
          <input
            type="text"
            name="title"
            id="title"
            className="input__title"
            onChange={this.onTitleInputHandler}
            value={this.state.title}
            placeholder="Title"
          />
          <div
            data-placeholder="Description..."
            onInput={this.onBodyInputHandler}
            className="input__body"
            contentEditable
          />
          <NoteAction
            title={this.state.input.title}
            body={this.state.input.body}
          />
        </div>
      </section>
    );
  }
}

const NoteAction = ({ title, body }) => {
  const navigate = useNavigate();

  const onAddNoteHandler = () => {
    if (confirm("Are you sure?")) {
      addNote({ title, body });
      navigate("/");
    }
  };
  return (
    <div className="notes__action">
      <button onClick={onAddNoteHandler} className="btn-secondary">
        <Checklist />
      </button>
    </div>
  );
};

NoteAction.propTypes = {
  title: PropTypes.string.isRequired,
  body: PropTypes.string.isRequired,
};

export default NoteAdd;
