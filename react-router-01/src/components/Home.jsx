import { Outlet } from 'react-router-dom';

const Home = () => {
  return (
    <div>
      <h1>This is home section</h1>
      <Outlet />
    </div>
  );
};

export default Home;
