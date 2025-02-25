import { BrowserRouter, Route, Routes } from "react-router-dom";
import DefaultLayout from "./layouts/DefaultLayout";
import HomePage from "./pages/HomePage";
import NoteAdd from "./pages/notes/NoteAdd";
import NoteDetail from "./pages/notes/NoteDetail";
import NotFound from "./pages/NotFound";
import NotesArchivedPage from "./pages/notes/NotesArchivedPage";
import NoteSearchPage from "./pages/notes/NoteSearchPage";

function App() {
  return (
    <BrowserRouter>
      <DefaultLayout>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/notes/search" element={<NoteSearchPage />} />
          <Route path="/notes/create" element={<NoteAdd />} />
          <Route path="/notes/archived" element={<NotesArchivedPage />} />
          <Route path="/notes/:id" element={<NoteDetail />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </DefaultLayout>
    </BrowserRouter>
  );
}

export default App;
