import PropTypes from 'prop-types';
import { useState } from 'react';
import { AiOutlineMenuFold, AiOutlineClose } from 'react-icons/ai';
const NavBer = ({ routes }) => {
  const [open, setOpen] = useState(false);

  return (
    <div className="flex justify-between items-center py-5">
      <div className="text-2xl font-extrabold">Hello</div>
      <div>
        <div
          className="md:hidden cursor-pointer select-none text-2xl"
          onClick={() => setOpen(!open)}
        >
          {open === true ? <AiOutlineClose /> : <AiOutlineMenuFold />}
        </div>
        <ul
          className={`${
            open ? 'flex md:hidden' : 'hidden'
          }  flex-col  absolute right-0 shadow-lg `}
        >
          {routes.map((dta) => (
            <li key={dta.id} className="hover:bg-red-200 px-4">
              <a href={dta.path}>{dta.name}</a>
            </li>
          ))}
        </ul>
        <ul className=" gap-4 hidden md:flex">
          {routes.map((dta) => (
            <li key={dta.id} className="hover:bg-red-200 px-4">
              <a href={dta.path}>{dta.name}</a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

NavBer.propTypes = {
  routes: PropTypes.object,
};
export default NavBer;
