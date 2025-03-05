import PropTypes from "prop-types";
import Navbar from "../components/Navbar";
import { useCallback, useContext, useEffect } from "react";
import { Outlet, useNavigate } from "react-router-dom";
import { AuthContext } from "../contexts/AuthContext";

function AuthenticatedLayout() {
  const { user } = useContext(AuthContext);
  const navigate = useNavigate();

  if (!user) {
    navigate("/login");
  }

  const handleKeyPress = useCallback((event) => {
    if (event.ctrlKey && event.key === "k") {
      event.preventDefault();
      document.querySelector(".search-bar input").focus();
    }
  }, []);

  useEffect(() => {
    document.addEventListener("keydown", handleKeyPress);

    return () => {
      document.removeEventListener("keydown", handleKeyPress);
    };
  }, [handleKeyPress]);

  return (
    <>
      <Navbar />
      <main>
        <Outlet />
      </main>
    </>
  );
}

AuthenticatedLayout.propTypes = {
  children: PropTypes.element.isRequired,
};

export default AuthenticatedLayout;
