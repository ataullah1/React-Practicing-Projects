import { Outlet } from 'react-router-dom';
import Nav from '../components/Nav/Nav';
import Footer from '../components/Footer/Footer';

const Root = () => {
  return (
    <div>
      <div className="w-full px-2 sm:px-0 sm:w-11/12 mx-auto">
        <Nav />
        <Outlet />
      </div>
      <Footer />
    </div>
  );
};

export default Root;
