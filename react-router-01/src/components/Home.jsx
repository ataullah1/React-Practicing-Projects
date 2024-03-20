import { Outlet } from 'react-router-dom';
import Header from './Header';

const Home = () => {
  return (
    <div style={{ textAlign: 'center' }}>
      <Header />
      <Outlet />
      <h3 style={{ textAlign: 'center' }}>This is Footer section</h3>
    </div>
  );
};

export default Home;
