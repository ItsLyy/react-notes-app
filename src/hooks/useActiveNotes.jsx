import { useEffect, useState } from "react";
import { archiveNote, getActiveNotes } from "../utils/network-data";

export default function useActiveNotes() {
  const [notes, setNotes] = useState(null);

  useEffect(() => {
    async function getNotes() {
      const res = await getActiveNotes();
      setNotes(res.data);
    }

    getNotes();
  }, []);

  const archivedHandler = async (id) => {
    const res = await archiveNote(id);
    if (!res.error) {
      const res = await getActiveNotes();
      setNotes(res.data);
    }
  };

  return [notes, archivedHandler];
}
