import { Outlet } from 'react-router-dom';
import Footer from './components/Footer';
import Header from './components/Header';

const Home = () => {
  return (
    <div className="">
      <Header />
      <div className="w-11/12 mx-auto min-h-screen">
        <Outlet />
      </div>
      <Footer />
    </div>
  );
};

export default Home;
