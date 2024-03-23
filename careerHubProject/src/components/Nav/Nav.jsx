import { Link, NavLink } from 'react-router-dom';
import '../../index.css';
// import Addddddd from '../../index.css';

const Nav = () => {
  return (
    <div className="bg-[#F9F9FF]">
      <div className="navbar bg-[#F9F9FF] w-full px-2 sm:px-0 sm:w-11/12 mx-auto flex items-center justify-between">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 z-[1] shadow bg-base-100 rounded-box w-52 text-neutral-500 text-base font-medium flex flex-col gap-2"
            >
              <NavLink
                className="hover:bg-slate-400 hover:text-white rounded-md px-5"
                to={'/'}
              >
                Statistics
              </NavLink>
              <NavLink
                className="hover:bg-slate-400 hover:text-white rounded-md px-5"
                to={'applied-jobs'}
              >
                Applied Jobs
              </NavLink>
              <NavLink
                className="hover:bg-slate-400 hover:text-white rounded-md px-5"
                to={'blogs'}
              >
                Blogs
              </NavLink>
            </ul>
          </div>
          <Link
            to={'/'}
            className="text-zinc-900 text-2xl md:text-[32px] font-extrabold font-['Manrope']"
          >
            CareerHub
          </Link>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1 flex gap-6 text-neutral-500 text-base font-semibold navBerActiveColor">
            <NavLink className=" px-2 py-2" to={'/'}>
              Statistics
            </NavLink>
            <NavLink className=" px-2 py-2" to={'applied-jobs'}>
              Applied Jobs
            </NavLink>
            <NavLink className=" px-2 py-2" to={'blogs'}>
              Blogs
            </NavLink>
          </ul>
        </div>
        <div className="navbar-end">
          <Link
            to={'/'}
            className="px-4 sm:px-7 py-2 bg-gradient-to-r from-indigo-400 to-violet-500 rounded-lg text-white text-base sm:text-xl font-extrabold "
          >
            Star Applying
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Nav;
