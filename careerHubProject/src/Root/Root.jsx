import { Outlet } from 'react-router-dom';
import Nav from '../components/Nav/Nav';
import Footer from '../components/Footer/Footer';

const Root = () => {
  return (
    <div>
      <div className="max-w-[1500px] mx-auto">
        <Nav />
        <Outlet />
      </div>
      <Footer />
    </div>
  );
};

export default Root;
