const Header = () => {
  return (
    <div className="navbar bg-base-100 shadow-lg p-0 min-h-0">
      <div className="w-11/12 mx-auto">
        <div className="flex-1">
          <a className="font-bold cursor-pointer text-2xl">React Routing</a>
        </div>
        <div className="flex-none">
          <ul className="menu menu-horizontal px-1 flex gap-8 text-lg">
            <li className="hover:bg-green-300 px-5 py-1 rounded-md font-normal cursor-pointer">
              Home
            </li>
            <li className="hover:bg-green-300 px-5 py-1 rounded-md font-normal cursor-pointer">
              Team
            </li>
            <li className="hover:bg-green-300 px-5 py-1 rounded-md font-normal cursor-pointer">
              Blog
            </li>
            <li className="hover:bg-green-300 px-5 py-1 rounded-md font-normal cursor-pointer">
              About
            </li>
            <li className="hover:bg-green-300 px-5 py-1 rounded-md font-normal cursor-pointer">
              Service
            </li>
            <li className="hover:bg-green-300 px-5 py-1 rounded-md font-normal cursor-pointer">
              Contact us
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Header;
