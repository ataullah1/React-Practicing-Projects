import './components.css';
import { NavLink } from 'react-router-dom';

const Header = () => {
  return (
    <div>
      <ul className="flex gap-8 justify-center my-6 font-bold navBer">
        <NavLink
          className="bg-fuchsia-500 text-white px-5 py-1 rounded-md"
          to="/"
        >
          Heme
        </NavLink>

        <NavLink
          className="bg-fuchsia-500 text-white px-5 py-1 rounded-md"
          to="users"
        >
          Users
        </NavLink>
        <NavLink
          className="bg-fuchsia-500 text-white px-5 py-1 rounded-md"
          to="about"
        >
          About
        </NavLink>
        <NavLink
          className="bg-fuchsia-500 text-white px-5 py-1 rounded-md"
          to="contact"
        >
          Contact
        </NavLink>
      </ul>
    </div>
  );
};

export default Header;
