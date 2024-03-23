import { Outlet } from 'react-router-dom';
import Nav from '../components/Nav/Nav';
import Footer from '../components/Footer/Footer';

const Root = () => {
  return (
    <div>
      <div>
        <Nav />
        <Outlet />
      </div>
      <Footer />
    </div>
  );
};

export default Root;
