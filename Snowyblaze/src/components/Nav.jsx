import { useEffect } from 'react';
import { useState } from 'react';
import { NavLink } from 'react-router-dom';

const Nav = () => {
  const [theme, setTheme] = useState('light');
  const clickTheme = (e) => {
    // console.log(e.target.checked);
    if (e.target.checked) {
      setTheme('dim');
    } else {
      setTheme('light');
    }
  };
  useEffect(() => {
    localStorage.setItem('theme', theme);
    const saveTheme = localStorage.getItem('theme');
    document.querySelector('html').setAttribute('data-theme', saveTheme);
  }, [theme]);
  return (
    <div className="navbar bg-base-100 shadow-lg p-0 min-h-0">
      <div className="w-11/12 mx-auto">
        <div className="flex-1">
          <NavLink to={'/'} className="font-bold cursor-pointer text-2xl">
            React Routing
          </NavLink>
        </div>
        <div className="flex-none">
          <ul className="menu menu-horizontal px-1 flex gap-3 text-lg">
            <NavLink
              to={'/'}
              className="hover:bg-green-300 px-5 py-1 rounded-md cursor-pointer font-semibold"
            >
              Home
            </NavLink>
            <NavLink
              to={'/blogs'}
              className="hover:bg-green-300 px-5 py-1 rounded-md cursor-pointer font-semibold"
            >
              Blog
            </NavLink>
            <NavLink
              to={'/bookmarsks'}
              className="hover:bg-green-300 px-5 py-1 rounded-md cursor-pointer font-semibold"
            >
              Bookmarks
            </NavLink>
          </ul>
        </div>
        <label className="cursor-pointer grid place-items-center">
          <input
            type="checkbox"
            onChange={clickTheme}
            className="toggle theme-controller bg-base-content row-start-1 col-start-1 col-span-2"
          />
          <svg
            className="col-start-1 row-start-1 stroke-base-100 fill-base-100"
            xmlns="http://www.w3.org/2000/svg"
            width="14"
            height="14"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <circle cx="12" cy="12" r="5" />
            <path d="M12 1v2M12 21v2M4.2 4.2l1.4 1.4M18.4 18.4l1.4 1.4M1 12h2M21 12h2M4.2 19.8l1.4-1.4M18.4 5.6l1.4-1.4" />
          </svg>
          <svg
            className="col-start-2 row-start-1 stroke-base-100 fill-base-100"
            xmlns="http://www.w3.org/2000/svg"
            width="14"
            height="14"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path>
          </svg>
        </label>
      </div>
    </div>
  );
};

export default Nav;
