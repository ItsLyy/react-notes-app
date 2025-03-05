import { useEffect, useState } from "react";
import {
  createSearchParams,
  useLocation,
  useNavigate,
  useSearchParams,
} from "react-router-dom";
import {
  archiveNote,
  getActiveNotes,
  getArchivedNotes,
  unarchiveNote,
} from "../utils/network-data";

export default function useSearchNotes() {
  const [notes, setNotes] = useState(null);
  const [keyword, setKeyword] = useState("");
  const [search, setSearch] = useSearchParams({});

  const { pathname } = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    async function getAllNotes() {
      const resActiveNotes = await getActiveNotes();
      const resArchivedNotes = await getArchivedNotes();

      if (!resActiveNotes.error && !resArchivedNotes.error)
        setNotes([...resActiveNotes.data, ...resArchivedNotes.data]);
    }

    getAllNotes();
  }, []);

  const onKeywordHandler = (e) => {
    if (pathname === "/notes/search") {
      setSearch({
        keyword: e.target.value,
      });
    }
    setKeyword(e.target.value);
  };

  const onEnterHandler = (e) => {
    e.preventDefault();
    console.log(search);
    if (pathname !== "/notes/search") {
      navigate({
        pathname: "notes/search",
        search: createSearchParams({
          keyword: keyword,
        }).toString(),
      });
    }

    setKeyword("");
  };

  async function onArchiveHandler(id) {
    if (notes.archived) {
      await unarchiveNote(id);
    } else {
      await archiveNote(id);
    }
    const resActiveNotes = await getActiveNotes();
    const resArchivedNotes = await getArchivedNotes();

    if (!resActiveNotes.error && !resArchivedNotes.error)
      setNotes([...resActiveNotes.data, ...resArchivedNotes.data]);
  }

  useEffect(() => {
    setKeyword("");
  }, [navigate]);

  return { notes, keyword, onKeywordHandler, onEnterHandler, onArchiveHandler };
}
