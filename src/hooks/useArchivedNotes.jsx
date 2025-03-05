import { useEffect, useState } from "react";
import { getArchivedNotes, unarchiveNote } from "../utils/network-data";

export default function useArchivedNotes() {
  const [notes, setNotes] = useState(null);

  useEffect(() => {
    async function getNotes() {
      const res = await getArchivedNotes();
      setNotes(res.data);
    }

    getNotes();
  }, []);

  const unArchivedHandler = async (id) => {
    const res = await unarchiveNote(id);
    if (!res.error) {
      const res = await getArchivedNotes();
      setNotes(res.data);
    }
  };

  return [notes, unArchivedHandler];
}
