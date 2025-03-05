import { useNavigate } from "react-router-dom";
import {
  archiveNote,
  deleteNote,
  getNote,
  unarchiveNote,
} from "../utils/network-data";
import { useEffect, useState } from "react";
import { LANG_CONFIRMATION } from "../utils/language-contants";

export default function useNotesDetail({ id, lang = "en" }) {
  const [notes, setNotes] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    async function getNoteHandler() {
      const res = await getNote(id);
      setNotes(res.data);
    }

    getNoteHandler();
  }, [id]);

  async function onArchiveHandler() {
    if (notes.archived) {
      await unarchiveNote(id);
    } else {
      await archiveNote(id);
    }
    const res = await getNote(id);
    setNotes(res.data);
  }

  async function onDeleteHandler(id) {
    if (confirm(LANG_CONFIRMATION[lang])) {
      await deleteNote(id);
      navigate("/");
    }
  }

  return [notes, onArchiveHandler, onDeleteHandler];
}
