import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <div>
      <ul
        style={{
          display: 'flex',
          gap: '20px',
          justifyContent: 'center',
        }}
      >
        <Link to="/">Heme</Link>
        <Link to="about">About</Link>
        <Link to="contact">Contact</Link>
      </ul>
    </div>
  );
};

export default Header;
