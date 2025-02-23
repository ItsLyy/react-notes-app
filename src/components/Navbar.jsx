import PropTypes from "prop-types";
import { Link, NavLink } from "react-router-dom";
import SearchBar from "./SearchBar";

export default function Navbar() {
  return (
    <header className="nav">
      <nav>
        <div className="nav__menu">
          <Link to="/" className="nav__brand-logo">
            <h2>NoteApp</h2>
          </Link>
          <ul>
            <NavItem menu="Home" link="/" />
            <NavItem menu="Archived" link="/notes/archived" />
          </ul>
        </div>
        <div className="nav__action">
          <SearchBar />
          <Link to="/notes/create" className="btn-primary">
            Add Notes
          </Link>
        </div>
      </nav>
    </header>
  );
}

const NavItem = ({ menu, link }) => {
  return (
    <li className="nav__item">
      <NavLink
        to={link}
        className={({ isActive }) =>
          `nav__link ${isActive && "nav__link--active"}`
        }
      >
        {menu}
      </NavLink>
    </li>
  );
};

NavItem.propTypes = {
  menu: PropTypes.string.isRequired,
  link: PropTypes.string.isRequired,
};
