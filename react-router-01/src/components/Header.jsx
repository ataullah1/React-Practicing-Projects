import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <div>
      <ul className="flex gap-8 justify-center my-6">
        <Link className="bg-fuchsia-300 px-5 py-1 rounded-md" to="/">
          Heme
        </Link>
        <Link className="bg-fuchsia-300 px-5 py-1 rounded-md" to="users">
          Users
        </Link>
        <Link className="bg-fuchsia-300 px-5 py-1 rounded-md" to="about">
          About
        </Link>
        <Link className="bg-fuchsia-300 px-5 py-1 rounded-md" to="contact">
          Contact
        </Link>
      </ul>
    </div>
  );
};

export default Header;
