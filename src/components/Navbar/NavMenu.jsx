import PropTypes from "prop-types";
import { Link, NavLink } from "react-router-dom";
import { LANG_NAVBAR } from "../../utils/language-contants";

export default function NavMenu({ lang }) {
  return (
    <div className="nav__menu">
      <Link to="/" className="nav__brand-logo">
        <h2>{LANG_NAVBAR[lang].brandlogo}</h2>
      </Link>
      <ul>
        <NavItem menu={LANG_NAVBAR[lang].firstMenu} link="/" />
        <NavItem menu={LANG_NAVBAR[lang].secondMenu} link="/notes/archived" />
      </ul>
    </div>
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

NavMenu.propTypes = {
  lang: PropTypes.string.isRequired,
};

NavItem.propTypes = {
  menu: PropTypes.string.isRequired,
  link: PropTypes.string.isRequired,
};
