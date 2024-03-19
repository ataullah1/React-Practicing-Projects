import PropTypes from 'prop-types';
import { useState } from 'react';
import { AiOutlineMenuFold, AiOutlineClose } from 'react-icons/ai';
const NavBer = ({ routes }) => {
  const [open, setOpen] = useState(false);

  return (
    <div className="flex justify-between items-center">
      <div className="text-2xl font-extrabold">Hello</div>
      <div>
        <div
          className="md:hidden cursor-pointer select-none text-2xl"
          onClick={() => setOpen(!open)}
        >
          {open === true ? <AiOutlineMenuFold /> : <AiOutlineClose />}
        </div>
        <ul className="hidden md:flex flex-col md:flex-row gap-4">
          {routes.map((dta) => (
            <li key={dta.id}>
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
