import { Outlet } from 'react-router-dom';
import Header from './Header';

const Home = () => {
  return (
    <div>
      <h1>This is home section</h1>
      <Header />
      <Outlet />
      <h3>This is Footer section</h3>
    </div>
  );
};

export default Home;
