import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import NoteAdd from "./pages/notes/NoteAdd";
import NoteDetail from "./pages/notes/NoteDetail";
import NotFound from "./pages/NotFound";
import NotesArchivedPage from "./pages/notes/NotesArchivedPage";
import NoteSearchPage from "./pages/notes/NoteSearchPage";
import { AuthProvider } from "./contexts/AuthContext";
import { ThemeProvider } from "./contexts/ThemeContext";
import { LanguageProvider } from "./contexts/LanguageContext";
import AuthenticatedLayout from "./layouts/AuthenticatedLayout";
import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";

function App() {
  return (
    <AuthProvider>
      <ThemeProvider>
        <LanguageProvider>
          <BrowserRouter>
            <Routes>
              <Route path="/" element={<AuthenticatedLayout />}>
                <Route index element={<HomePage />} />
                <Route path="notes/search" element={<NoteSearchPage />} />
                <Route path="notes/create" element={<NoteAdd />} />
                <Route path="notes/archived" element={<NotesArchivedPage />} />
                <Route path="notes/:id" element={<NoteDetail />} />
              </Route>
              <Route path="/login" element={<LoginPage />} />
              <Route path="/register" element={<RegisterPage />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </BrowserRouter>
        </LanguageProvider>
      </ThemeProvider>
    </AuthProvider>
  );
}

export default App;
