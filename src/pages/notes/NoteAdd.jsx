import { useContext, useState } from "react";
import Checklist from "../../components/icons/Checklist";
import { useNavigate } from "react-router-dom";
import PropTypes from "prop-types";
import { addNote } from "../../utils/network-data";
import useInput from "../../hooks/useInput";
import { LanguageContext } from "../../contexts/LanguageContext";
import {
  LANG_ADD_NOTES,
  LANG_CONFIRMATION,
} from "../../utils/language-contants";

function NoteAdd() {
  const [title, setTitle] = useInput("");
  const [body, setBody] = useState("");

  const { language } = useContext(LanguageContext);

  function onBodyInputHandler(e) {
    e.preventDefault();
    setBody(e.target.innerText);
  }

  return (
    <section id="notes-create">
      <div className="container">
        <input
          type="text"
          name="title"
          id="title"
          className="input__title"
          onChange={setTitle}
          value={title}
          placeholder={LANG_ADD_NOTES[language].title}
        />
        <div
          data-placeholder={LANG_ADD_NOTES[language].description}
          onInput={onBodyInputHandler}
          className="input__body"
          contentEditable
        />
        <NoteAction title={title} body={body} lang={language} />
      </div>
    </section>
  );
}

const NoteAction = ({ title, body, lang }) => {
  const navigate = useNavigate();

  const onAddNoteHandler = async () => {
    if (confirm(LANG_CONFIRMATION[lang])) {
      await addNote({ title, body });
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
  lang: PropTypes.string.isRequired,
};

export default NoteAdd;
