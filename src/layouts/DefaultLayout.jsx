import PropTypes from "prop-types";
import Navbar from "../components/Navbar";
import { useCallback, useEffect } from "react";

function DefaultLayout({ children }) {
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
      <main>{children}</main>
    </>
  );
}

DefaultLayout.propTypes = {
  children: PropTypes.element.isRequired,
};

export default DefaultLayout;
