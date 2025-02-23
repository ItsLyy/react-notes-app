import { BrowserRouter, Route, Routes } from "react-router-dom";
import DefaultLayout from "./layouts/DefaultLayout";
import HomePage from "./pages/HomePage";
import NoteAdd from "./pages/notes/NoteAdd";
import NoteDetail from "./pages/notes/NoteDetail";
import NotFound from "./pages/NotFound";

function App() {
  return (
    <BrowserRouter>
      <DefaultLayout>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/notes/create" element={<NoteAdd />} />
          <Route path="/notes/archived" element={"Hello World"} />
          <Route path="/notes/:id" element={<NoteDetail />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </DefaultLayout>
    </BrowserRouter>
  );
}

export default App;
